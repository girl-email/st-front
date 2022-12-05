const m = (socket) => {
    let s = {
        log: null,
        error: null,
        warn: null
    }
    let data = {
        cmd: 'log',
        createTime: Date.now(),
        value: null,
        type: ''
    }
    Object.keys(s).forEach(el => {
        s[el] = window.console[el];
        window.console[el] = function () {
            s[el].apply(console, arguments);
            data.value = arguments;
            data.type = el;
            socket.emit("data", data);
        }
    })
}

export default m