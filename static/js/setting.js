function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    //for quickstart en
    try {
        if (window.location.hostname == 'localhost') {
            return;
        }

        if (window.location.pathname === '/quickstart') {
            const l_t = getQueryParam('l_t');
            if (l_t != null && !l_t.startsWith('zh')) {
                window.location.href = '/en/quickstart/';
            }
        }
    } catch (e) { }
};