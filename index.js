const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/classify-number?number=371', (req, res) => {
  res.send('Hello World!');
});

app.get('/*', (req, res) => {
  res.status(404).send('Hello World!');
});