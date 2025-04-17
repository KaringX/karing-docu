function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    //for quickstart en
    // if (window.location.hostname == 'localhost') {
    //     return;
    // }
    // console.log(window.location.hostname + ' + ' + window.location.pathname);
    if (window.location.pathname.startsWith('/quickstart')) {
        const l_t = getQueryParam('l_t');
        if (l_t != null && !l_t.startsWith('zh')) {
            if (l_t == 'ru') {
                window.location.href = '/blog/quickstart-in-russian';
            } else if (l_t == 'fa') {
                window.location.href = '/blog/quickstart-for-iranian';
            } else {
                window.location.href = '/en/quickstart/';
            }
        }
    } else if (window.location.pathname.startsWith('/blog/isp/cn')) {
        //countdown
        //
        let countdown;
        let remainingTime = 10; // 10 seconds countdown
        let isCancelled = false; // Flag to track if countdown is cancelled

        // 更新倒计时显示
        function updateCountdown() {
            const countdownElement = document.getElementById('countdown');
            if (!countdownElement) {
                return;
            }
            countdownElement.textContent = remainingTime;

            if (remainingTime <= 0 && !isCancelled) {
                window.location.href = countdownElement.getAttribute("href");
            } else if (!isCancelled) {
                remainingTime--;
                countdown = setTimeout(updateCountdown, 1000); // 每秒更新一次
            }
        }

        // 取消跳转
        function cancelRedirect() {
            isCancelled = true;
            clearTimeout(countdown); // 停止倒计时

            let cancelButton = document.getElementById('cancelRedirect');
            cancelButton.disabled = true; // 禁用取消按钮
            cancelButton.classList.add('disabled'); // 添加禁用样式
            cancelButton.textContent = 'Cancelled'; // 修改按钮文字
        }

        document.getElementById('cancelRedirect').addEventListener('click', cancelRedirect);
        updateCountdown(); // 页面加载后开始倒计时

    }
};
