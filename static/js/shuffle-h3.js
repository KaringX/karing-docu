// static/js/shuffle-h3.js

(function () {
    // ========== 配置区域 ==========
    // 需要启用随机排序的页面路径（支持部分匹配）
    const TARGET_PATHS = [
        '/blog/isp/cn',
        '/blog/isp/cn/',
        // '/blog/isp/ru',
    ];

    // 内容容器选择器（请根据实际情况调整）
    const CONTAINER_SELECTOR = '.markdown';
    // =============================

    const currentPath = window.location.pathname;
    const shouldRun = TARGET_PATHS.some(path => currentPath.includes(path));
    if (!shouldRun) return;

    /**
     * 等待指定选择器的元素出现在 DOM 中
     */
    function waitForElement(selector, timeout = 5000) {
        return new Promise((resolve, reject) => {
            // 如果元素已存在，立即返回
            const existing = document.querySelector(selector);
            if (existing) {
                return resolve(existing);
            }

            // 确定一个可靠的观察目标：优先 document.body，若不存在则用 document.documentElement
            const observeTarget = document.body || document.documentElement;

            const observer = new MutationObserver((mutations, obs) => {
                const element = document.querySelector(selector);
                if (element) {
                    obs.disconnect();
                    resolve(element);
                }
            });

            // 开始观察
            observer.observe(observeTarget, {
                childList: true,
                subtree: true,
            });

            // 超时处理
            setTimeout(() => {
                observer.disconnect();
                reject(new Error(`等待元素 "${selector}" 超时 (${timeout}ms)`));
            }, timeout);
        });
    }

    /**
     * 打乱 h3 及其紧跟 ul 的顺序
     */
    function shuffleH3Groups(container) {
        // 添加隐藏类（防闪烁）
        container.classList.add('randomize-container');

        // 获取所有 h3
        const h3Elements = Array.from(container.querySelectorAll('h3'));
        const groups = [];

        // 将 h3 和紧跟的 ul 配对
        for (const h3 of h3Elements) {
            let nextElem = h3.nextElementSibling;
            while (nextElem && nextElem.tagName !== 'UL') {
                nextElem = nextElem.nextElementSibling;
            }
            if (nextElem && nextElem.tagName === 'UL') {
                groups.push({ h3, ul: nextElem });
            }
        }

        // 如果配对不足 2 组，无需打乱
        if (groups.length < 2) {
            container.classList.add('ready');
            return;
        }

        // Fisher–Yates 洗牌
        for (let i = groups.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [groups[i], groups[j]] = [groups[j], groups[i]];
        }

        // 获取公共父节点，移除原有节点
        const parent = groups[0].h3.parentNode;
        groups.forEach(group => {
            parent.removeChild(group.h3);
            parent.removeChild(group.ul);
        });

        // 按新顺序重新插入
        groups.forEach(group => {
            parent.appendChild(group.h3);
            parent.appendChild(group.ul);
        });

        // 显示容器
        container.classList.add('ready');
    }

    // 启动流程
    waitForElement(CONTAINER_SELECTOR)
        .then(container => {
            shuffleH3Groups(container);
        })
        .catch(err => {
            console.warn('[shuffle-h3]', err.message);
        });
})();