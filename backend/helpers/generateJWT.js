import jwt from 'jsonwebtoken';
import { secret } from '../config/config.js';

export const generateJWT = (id) => {
  return jwt.sign({ id }, secret.JWT_SECRET, {
    expiresIn: '30d',
  });
}