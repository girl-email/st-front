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
    s.o = window.console.log;
    s.e = window.console.error;
    s.w = window.console.warn;
    window.console.log = function () {
        s.o.apply(console, arguments);
        cmd.log = arguments
        socket.emit("data", cmd);
    }
    window.console.error = function () {
        s.e.apply(console, arguments);
        cmd.error = arguments
        socket.emit("data", cmd);
    }
    window.console.warn = function () {
        s.w.apply(console, arguments);
        cmd.warn = arguments
        socket.emit("data", cmd);
    }
}

export default m