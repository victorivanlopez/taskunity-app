
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});