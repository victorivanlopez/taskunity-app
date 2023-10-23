import User from '../models/User.js';
import { generateUniqueId } from '../helpers/generateUniqueId.js';
import { generateJWT } from '../helpers/generateJWT.js';

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

export const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'El correo no está registrado' });
  }

  if (!user.confirmed) {
    return res.status(403).json({ message: 'La cuenta no ha sido confirmada' });
  }

  if (await user.checkpassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    })
  } else {
    return res.status(403).json({ message: 'La contraseña es incorrecta' });
  }
}