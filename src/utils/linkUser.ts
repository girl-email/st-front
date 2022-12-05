function l(appKey: string, userName: string, userId: number, ext?: object) {
    this.socket.emit("data", {
        cmd: 'login',
        data: {
            appKey: appKey,
            userName: userName,
            userId: userId
        }
    });
};

export default l;