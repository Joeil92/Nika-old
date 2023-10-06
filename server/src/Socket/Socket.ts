import User from '../User/User';
import express, { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';

class SocketIo
{
    private static instance: SocketIo = new SocketIo();
    private app: Express
    private server: http.Server;
    private io: Server;

    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = new Server(this.server, {});

        this.initialize();
    }

    private initialize(): void {
        
        this.io.on('connect', (socket) => {
            console.log(`new user : ${socket.id}`);
            new User(socket);
        })
    }

    public getIo(): Server {
        return this.io;
    }

    public getAllSockets() {
        const sockets = [];

        for(const socket of Array.from(this.io.sockets.sockets)) {
            sockets.push({
                id: socket[0]
            })
        }

        return sockets;
    }

    public static getInstance(): SocketIo {
        return SocketIo.instance;
    }

    public start(port: number): void {
        this.server.listen(port, () => {
            console.log('SERVER RUNNING ON PORT', port);
        })
    }
}

export default SocketIo;