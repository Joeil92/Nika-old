import SocketIo from "./Socket/Socket";

const socket: SocketIo = SocketIo.getInstance();
socket.start(3001);