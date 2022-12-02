const m = (socket) => {
    let s = {
        o: null,
        e: null,
        w: null
    }
    let cmd = {
        log: null,
        error: null,
        warn: null
    };
    let data = {
        cmd: cmd,
        createTime: Date.now()
    }
    s.o = window.console.log;
    s.e = window.console.error;
    s.w = window.console.warn;
    window.console.log = function () {
        s.o.apply(console, arguments);
        cmd.log = arguments
        socket.emit("data", data);
    }
    window.console.error = function () {
        s.e.apply(console, arguments);
        cmd.error = arguments
        socket.emit("data", data);
    }
    window.console.warn = function () {
        s.w.apply(console, arguments);
        cmd.warn = arguments
        socket.emit("data", data);
    }
}

export default m