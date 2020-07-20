const nodemailer = require("nodemailer");

const globals = require("../config/globals");

module.exports.send = (
  fromEmail,
  toEmails,
  emailSubject,
  emailText,
  emailHtmlBody,
  ccEmail,
  bccEmail,
  attachmentsArray,
  isAuthenticationEmail = false
) => {
  if (!isAuthenticationEmail) {
    if (bccEmail) bccEmail += `,${process.env.EMAIL_support}`;
    else {
      bccEmail = `${process.env.EMAIL_support}`;
    }
  }

  let transporter;

  if (process.env.NODE_ENV !== globals.environment.PRODUCTION) {
    // console.log("prod false");
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.DEV_EMAIL_USERNAME,
        pass: process.env.DEV_EMAIL_PASSWORD,
      },
    });
  } else {
    transporter = nodemailer.createTransport({
      host: config.SMTP_host, // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 25, // port for secure SMTP
      tls: {
        rejectUnauthorized: false, // /without SSL certification
      },
    });
  }

  // setup e-mail data, even with unicode symbols
  const mailOptions = {
    from: fromEmail, // sender address (who sends)
    to:
      process.env.NODE_ENV === globals.environment.PRODUCTION
        ? toEmails
        : process.env.EMAIL_LOCAL_DEV, // list of receivers (who receives)
    cc: ccEmail,
    bcc:
      process.env.NODE_ENV === globals.environment.PRODUCTION
        ? bccEmail
        : process.env.EMAIL_LOCAL_DEV,
    subject: emailSubject, // Subject line
    text: emailText, // plaintext body
    html: emailHtmlBody, // html body
    attachments: attachmentsArray,
  };

  // console.log(mailOptions);

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      if ((process.env.DEPLOYMENT_MODE = true)) {
        return console.log(error);
      }
    }
    if ((process.env.DEPLOYMENT_MODE = true)) {
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  });
};
