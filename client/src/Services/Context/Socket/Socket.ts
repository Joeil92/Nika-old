import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io('http://10.93.188.243:3001', {transports: ['websocket']});

export const socketContext = createContext(socket);