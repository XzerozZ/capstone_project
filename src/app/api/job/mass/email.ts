import nodeemailer from "nodemailer";
import { Email } from "../../interface/interface";

const emailConfig: Email = {
  email: process.env.EMAIL || '',
  key: process.env.EMAIL_PASS || ''
};

export const sentEmail = async (emailUser: string, money: number) => {
  const transporter = nodeemailer.createTransport({
    service: "Gmail",
    auth: {
      user: emailConfig.email,
      pass: emailConfig.key,
    },
  });

  const mailOptions = {
    from: emailConfig.email,
    to: emailUser,
    subject: "Transaction",
    html:''
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return true;
};