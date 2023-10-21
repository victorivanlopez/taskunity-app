import mongoose from 'mongoose';
import { database } from './config.js';

const connectDB = async () => {

  try {
    const connection = await mongoose.connect(database.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado en: ${connection.connection.host}:${connection.connection.port}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;