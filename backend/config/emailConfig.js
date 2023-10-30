import nodemailer from 'nodemailer';
import { email } from './config.js';

const transporter = nodemailer.createTransport({
  host: email.HOST,
  port: email.PORT,
  auth: {
    user: email.USER,
    pass: email.PASS,
  },
});

export default transporter;