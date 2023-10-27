import transporter from '../config/emailConfig.js';

export const sendConfirmationEmail = (email, confirmationLink) => {

  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .heading {
            font-size: 24px;
          }
          .instructions {
            font-size: 16px;
          }
          .confirmation-link {
            display: inline-block;
            text-decoration: none;
            margin-top: 10px;
            background-color: #423F98;
            padding: 14px 40px;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            border-radius: 1px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2 class="heading">¡Bienvenido a TaskUnity!</h2>
          <p class="instructions">Por favor, haga clic en el siguiente botón para confirmar su cuenta:</p>
          <a href="${confirmationLink}" class="confirmation-link">Confirmar cuenta</a>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: 'TaskUnity <info@taskunity.com>',
    to: email,
    subject: 'TaskUnity - Confirmación de cuenta',
    html: htmlContent,
  };

  transporter.sendMail(mailOptions);
};