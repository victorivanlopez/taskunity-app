import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  token: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;