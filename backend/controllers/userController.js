import User from '../models/User.js';
import { generateUniqueId } from '../helpers/generateUniqueId.js';

export const createUser = async (req, res) => {

  const { email, name, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
  }

  try {
    const newUser = new User({ email, name, password });
    newUser.token = generateUniqueId();
    const user = await newUser.save();
    return res.status(201).json({ user, message: 'Usuario registrado con éxito.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al registrar el usuario.' });
  }
};