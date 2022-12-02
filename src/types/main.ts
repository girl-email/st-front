export interface ClientToServerEvents {
    data: (arg:any) => void;
    connect: () => void;
    disconnect: () => void;
}