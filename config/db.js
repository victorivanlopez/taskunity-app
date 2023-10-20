import mongoose from 'mongoose';

const connectDB = async () => {

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
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