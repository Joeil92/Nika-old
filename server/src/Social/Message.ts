import { Socket } from "socket.io";

class Message 
{
    private socket: Socket;
    private content: string;
    private createdAt: Date

    constructor(socket: Socket, content: string) {
        this.socket = socket;
        this.content = content;
        this.createdAt = new Date();
    }

    getContent(): string {
        return this.content;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    getMessage() {
        return {
            socket: this.socket.id,
            user: this.socket.id,
            content: this.content,
            createdAt: this.createdAt.toLocaleDateString('fr')
        }
    }
}

export default Message;