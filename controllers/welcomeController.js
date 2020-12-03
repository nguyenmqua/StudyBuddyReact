let nodemailer = require("nodemailer");
const { addListener } = require("nodemon");
require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports = {

  sendWelcome: async function (req, res) {
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.REACT_APP_USER,
        pass: process.env.REACT_APP_PASS,
      },
    });

    // Message object
    let message = {
      from: "no-reply@studdy-buddy.app",

      // Comma separated list of recipients
      to: req.body.email,
      bcc: "",

      // Subject of the message
      subject: "Welcome!!",

      // plaintext body
      text: "Welcome!",

      // HTML body
      html:
        "<p>Welcome to StuddyBuddy!"
    };

    let info = await transporter.sendMail(message);
    res.json(info);
    console.log("Message sent successfully as %s", info.messageId);
  },
  // checkToken: function (req, res) {
  //   res.sendStatus(200);  
  // }
};
