const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');

const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    }
});

const dirPath = path.resolve();

app.use(express.static(path.join(dirPath, 'frontend', 'dist')));

app.get('*', (req, res) => {
    const indexFile = path.join(dirPath, 'frontend', 'dist', 'index.html');
    if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
    } else {
        res.status(500).send("index.html not found — did you run `npm run build`?");
    }
});

io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);
});

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001');
});
