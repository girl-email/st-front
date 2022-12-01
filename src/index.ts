import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "./types/main";

const link = () => {
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("ws://10.255.8.9:7001");

    socket.on("connection", (socket: any) => {
        console.log(socket.id);
    });
}

export default link