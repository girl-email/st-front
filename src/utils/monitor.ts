const m = (socket) => {
    let s = {
        o: null,
        e: null,
        w: null
    }
    let data = {
        cmd: 'log',
        createTime: Date.now(),
        value: null,
        type: ''
    }
    s.o = window.console.log;
    s.e = window.console.error;
    s.w = window.console.warn;
    window.console.log = function () {
        s.o.apply(console, arguments);
        data.value = arguments;
        data.type = 'log';
        socket.emit("data", data);
    }
    window.console.error = function () {
        s.e.apply(console, arguments);
        data.value = arguments;
        data.type = 'error';
        socket.emit("data", data);
    }
    window.console.warn = function () {
        s.w.apply(console, arguments);
        data.value = arguments;
        data.type = 'warn';
        socket.emit("data", data);
    }
}

export default m