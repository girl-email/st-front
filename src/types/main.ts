export interface ClientToServerEvents {
    data: (arg:any, callback?: () => void) => void;
    login: (arg:any) => void;
    connect: () => void;
    disconnect: () => void;
}