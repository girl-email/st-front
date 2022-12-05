import { io, Socket } from "socket.io-client";
import { ClientToServerEvents } from "../types/main";
import m from "./monitor";
import project from "../../package.json";
import login from "./linkUser";

class ST {
    socket: Socket<ClientToServerEvents> = io("ws://10.255.8.9:7001");
    init() {
        console.log(
            `\n%c${project.name}${project.version}  🚀`,
            'color:#0dd8d8; background:#0b1021; font-size:25px; padding:8px; text-align: center; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;'
        );
    
        this.socket.on("connect", () => {
            console.log('%cst-sdk连接成功', 'color: #fff; background:#3CB371; font-size: 16px; padding:4px; border-radius: 4px;');
            m(this.socket);
        });
    
        this.socket.on("disconnect", () => {
            console.log('st-sdk连接关闭');
        })
    }
    login = login
};

const st = new ST()

export default st;