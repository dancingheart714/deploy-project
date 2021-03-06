require('dotenv').config();

console.log("It's working!");

const express = require('express');

const server = express();

server.use(express.json());

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  server.use(cors());
}

server.use('*', (req, res) => {
  res.send('<h1>Success Status Is Granted!</h1>');
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
