import { io, Socket } from "socket.io-client";
import { ClientToServerEvents } from "./types/main";
import m from "./utils/monitor";
import project from "../package.json";

const link = (window) => {
    const socket: Socket<ClientToServerEvents> = io("ws://10.255.8.9:7001");
    console.log(
        `\n%cst-sdk${project.version}  🚀`,
        'color:#0dd8d8; background:#0b1021; font-size:25px; padding:8px; text-align: center; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;'
    );

    socket.on("connect", () => {
        console.log('%cst-sdk连接成功', 'color: #fff; background:#3CB371; font-size: 16px; padding:4px; border-radius: 4px;');
    });

    socket.on("data", (arg) => {
        console.log(arg);
    });
    console.log('link',m(window));
    
    socket.on("disconnect", () => {
        console.log('st-sdk连接关闭');
    })

    socket.emit("data", "world");

    socket.io.on("reconnect", (attempt) => {
        console.log('st-sdk正在重新连接...');
    });

    socket.io.on("reconnect_error", (error) => {
        console.log('st-sdk重连遇到故障：', error);
    });
}

export default link