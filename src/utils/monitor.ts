const m = (socket) => {
    // let s = {
    //     o: null,
    //     e: null,
    //     w: null
    // }
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
    // s.o = window.console.log;
    // s.e = window.console.error;
    // s.w = window.console.warn;
    // window.console.log = function () {
    //     s.o.apply(console, arguments);
    //     data.value = arguments;
    //     data.type = 'log';
    //     socket.emit("data", data);
    // }
    // window.console.error = function () {
    //     s.e.apply(console, arguments);
    //     data.value = arguments;
    //     data.type = 'error';
    //     socket.emit("data", data);
    // }
    // window.console.warn = function () {
    //     s.w.apply(console, arguments);
    //     data.value = arguments;
    //     data.type = 'warn';
    //     socket.emit("data", data);
    // }
}

export default m