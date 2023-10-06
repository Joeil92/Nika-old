
import ApiHandler from "../Factory/ApiHandler";
import Message from "./Message";

const uuid = require('uuid');

class Group
{
    private id: string;
    api: ApiHandler;
    private messages: Array<Message>;

    constructor() {
        this.id = uuid.v4();
        this.api = new ApiHandler();
        this.messages = [];        
    }

    public setMessage(msg: Message) {
        this.messages.unshift(msg);

        this.api.setData({
            content: msg.getContent()
        })
    }

    public async getMessages() {
        const messages = await this.api.getDataFromEndpoints('api/messages');

        return messages;
    }
}

export default Group;