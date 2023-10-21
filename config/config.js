import dotenv from 'dotenv';

dotenv.config();

export const database = {
  URI: process.env.MONGO_URI,
};

export const server = {
  PORT: process.env.PORT || 3000,
};