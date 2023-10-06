import SocketIo from "../Socket/Socket";
import Message from "../Social/Message";
import { Socket } from "socket.io";
import Group from "../Social/Group";
import ApiHandler from "../Factory/ApiHandler";

class User 
{
    private io: SocketIo;
    private api: ApiHandler;
    private socket: Socket;
    private group: Group;

    constructor(socket: Socket) {
        this.io = SocketIo.getInstance();
        this.api = new ApiHandler();
        this.socket = socket;
        this.group = new Group();

        this.initialize()
    }

    private initialize() {
        this.socket.on('get-users', () => this.getUsers());
        this.socket.on('get-messages', () => this.getMessages());
        this.socket.on('send-message', (input: string) => this.sendMessage(input));
    }

    private getUsers() {
        const sockets = this.io.getAllSockets();

        this.socket.emit('get-users', sockets);
    }

    private async getMessages() {
        const messages: any = await this.group.getMessages();

        console.log(messages);
        
        this.socket.emit('get-messages', messages);
    }

    private sendMessage(input: string) {
        const msg = new Message(this.socket, input);

        this.group.setMessage(msg);
        this.getMessages();
    }
}

export default User;