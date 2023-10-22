import crypto from 'crypto';

export const generateUniqueId = (size = 32) => {
  return crypto.randomBytes(size).toString('hex');
}