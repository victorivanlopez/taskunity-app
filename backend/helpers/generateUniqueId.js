import { randomBytes } from 'node:crypto';

export const generateUniqueId = (size = 32) => {
  return randomBytes(size).toString('hex');
}