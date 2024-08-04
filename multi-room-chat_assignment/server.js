const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);

    socket.emit('message', { username: 'Admin', text: `Welcome ${username}!` });
    socket.broadcast.to(room).emit('message', { username: 'Admin', text: `${username} has joined the room!` });
  });

  socket.on('chatMessage', ({ username, room, text }) => {
    io.to(room).emit('message', { username, text });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
