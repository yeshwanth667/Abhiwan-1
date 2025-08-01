import { Server } from 'socket.io';

let io: Server;

export const initIO = (server: Server) => {
  io = server;
};

export const getIO = () => {
  if (!io) throw new Error('Socket.io not initialized');
  return io;
};
