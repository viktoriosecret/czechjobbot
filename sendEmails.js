const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "berhaneselassie1945@gmail.com",
    pass: "jfzl ubnc xwnw tzht",
  },
});

module.exports = {
  sendMail: async (subject, text) => {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // от какого адреса отправляется
      to: "viktoriosecret@gmail.com",
      subject: subject,
      text: text,
    });
    console.log("Message sent: %s", info.messageId);
  },
};
