import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { secret } from '../config/config.js';

export const checkUserAuth = async (req, res, next) => {

  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  if (token.startsWith('Bearer')) {
    try {
      token = token.split(' ')[1];
      const decoded = jwt.verify(token, secret.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('_id name email');
      return next();
    } catch (error) {
      return res.status(404).json({ message: 'Token no válido o expirado.', error });
    }
  } else {
    return res.status(404).json({ message: 'Token no válido.' });
  }
}