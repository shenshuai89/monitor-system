export default function (callback) {
    // documente加载完成
    if (document.readyState === 'complete') {
        callback();
    } else {
        // 等待load事件完成后
        window.addEventListener('load', callback);
    }
}