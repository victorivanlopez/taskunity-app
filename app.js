import express from 'express';
import connectDB from './config/db.js';
import { server } from './config/config.js';

const app = express();

connectDB();

// Routing 
app.get('/', (req, res) => {
  res.json({message: 'ok'});
});

app.listen(server.PORT, () => {
  console.log(`Example app listening on port ${server.PORT}`)
});