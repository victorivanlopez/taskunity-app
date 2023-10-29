import nodemailer from 'nodemailer';

//TODO: configurar variables de entorno
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '4daea9d84cb062',
    pass: '1acae141ec6a72',
  },
});

export default transporter;