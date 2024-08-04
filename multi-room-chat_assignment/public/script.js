const socket = io();

document.getElementById('chat-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const room = document.getElementById('room').value;
  const msg = document.getElementById('msg').value;

  socket.emit('joinRoom', { username, room });
  socket.emit('chatMessage', { username, room, text: msg });

  document.getElementById('msg').value = '';
});

socket.on('message', (message) => {
  const chatBox = document.getElementById('chat-box');
  const div = document.createElement('div');
  div.innerHTML = `<p><strong>${message.username}:</strong> ${message.text}</p>`;
  chatBox.appendChild(div);
});
