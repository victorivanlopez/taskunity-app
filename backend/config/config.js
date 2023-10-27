import dotenv from 'dotenv';

dotenv.config();

export const database = {
  URI: process.env.MONGO_URI,
};

export const server = {
  PORT: process.env.PORT || 3000,
};

export const front = {
  URL: process.env.FRONTEND_URL,
}

export const secret = {
  JWT_SECRET: process.env.JWT_SECRET,
}