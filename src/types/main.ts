export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
    connection: (socket: any) => void;
    connect: () => void;
    disconnect: () => void;
}

export interface ClientToServerEvents {
    hello: () => void;
    connection: (socket: any) => void;
    connect: () => void;
    disconnect: () => void;
}