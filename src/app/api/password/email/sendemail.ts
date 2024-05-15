import nodeemailer from "nodemailer";
import { Email } from "../../interface/interface";
const emailConfig: Email = {
  email: process.env.EMAIL || '',
  key: process.env.EMAIL_PASS || ''
};

export const sentEmail = async (emailUser: string, OTP: string) => {
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
    subject: "Recovery password",
    html: `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
    <!doctype html>
          <html>
            <body>
              <div
                style='background-color:#FFFFFF;color:#FFFFFF;font-family:"Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
              >
                <table
                  align="center"
                  width="100%"
                  style="margin:0 auto;max-width:600px;background-color:#202192"
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tbody>
                    <tr style="width:100%">
                      <td>
                      <div style="display:flex;justify-content:center;text-align:center;font-weight:bold;font-size:25px;font-family:'Nimbus Mono PS', 'Courier New', 'Cutive Mono', monospace;color:white;padding:16px 24px 16px 24px;margin-left:auto;margin-right:auto">
                        <h1  style="display:flex;justify-content:center;text-align:center;font-weight:bold;font-size:50px;font-family:'Nimbus Mono PS', 'Courier New', 'Cutive Mono', monospace;color:white;padding:16px 24px 16px 24px;margin-left:auto;margin-right:auto">
                          Slowwork
                        </h1>
                      </div>
                        <div
                          style="color:#FFFFFF;font-size:16px;font-weight:normal;text-align:center;padding:16px 24px 16px 24px"
                        >
                          Here is your one-time passcode:
                        </div>
                        <h1
                          style='font-weight:bold;text-align:center;margin:0;font-family:"Nimbus Mono PS", "Courier New", "Cutive Mono", monospace;font-size:32px;padding:16px 24px 16px 24px'
                        >
                          ${OTP}
                        </h1>
                        <div
                          style="color:#FFFFFF;font-size:16px;font-weight:normal;text-align:center;padding:16px 24px 16px 24px"
                        >
                          This code will expire in 5 minutes.
                        </div>
                        <div
                          style="font-size:10px;font-weight:bold;color:white;padding:16px 24px 16px 24px"
                        >
                          Do not share this code. We will never contact you to ask for it.
                          If you did not request this code, there is no further action you
                          need to take. If you received numerous codes you did not
                          request, strongly encourage you to link a different email to
                          your account(s)
                        </div>
                        <div
                          style="font-size:12px;font-weight:bold;color:white;padding:16px 24px 16px 24px"
                        >
                          Thank you,
                        </div>
                        <div
                          style="font-size:11px;font-weight:bold;color:white;padding:16px 24px 16px 24px"
                        >
                          The Slowwork Team
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </body>
          </html>
    </body>
    </html>
    `
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