require('dotenv').config();

const express = require('express');
const cors = require('cors');
const postRoute = require('./posts/postRouter');

const port = process.env.PORT;

const server = express();

server.use(cors());
server.use(postRoute);

server.listen(port, () => {
    console.log(`** Server running on port ${port} **`);
});