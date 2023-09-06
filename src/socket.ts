import { io } from 'socket.io-client';
const URL = 'https://chat-api-node.onrender.com';

export const socket = io(URL);