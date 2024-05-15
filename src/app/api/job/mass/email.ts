import nodeemailer from "nodemailer";
import { Email } from "../../interface/interface";

const emailConfig: Email = {
  email: process.env.EMAIL || '',
  key: process.env.EMAIL_PASS || ''
};

export const sentReceipt = async (emailUser: string, money: number, vat: number, id: string, name:string) => {
  const transporter = nodeemailer.createTransport({
    service: "Gmail",
    auth: {
      user: emailConfig.email,
      pass: emailConfig.key,
    },
  });

  const Amount = money - vat;
  const vatAmount = vat;
  const currentDate = new Date().toLocaleDateString();
  const mailOptions = {
    from: emailConfig.email,
    to: emailUser,
    subject: "Thank you for your supporting",
    html: `
    <!DOCTYPE html>
    <html>
        <body>
        <div
          style='background-color:#F5F5F5;color:#242424;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
        >
          <table
            align="center"
            width="100%"
            style="margin:0 auto;max-width:600px;background-color:#F5F5F5"
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
          >
            <tbody>
              <tr style="width:100%">
                <td>
                  <div style="background-color:#ffffff;padding:16px 24px 24px 24px">
                    <div style="padding:16px 0px 16px 0px">
                      <table
                        align="center"
                        width="100%"
                        cellpadding="0"
                        border="0"
                        style="table-layout:fixed;border-collapse:collapse"
                      >
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                                >
                                  Receipt from BIZ - Cooperation
                                </div>
                                <h1
                                  style="font-weight:bold;text-align:left;margin:0;font-size:32px;padding:16px 0px 0px 0px"
                                >
                                  ${money.toFixed(2)} THB
                                </h1>
                                <div
                                  style="color:#474849;font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                                >
                                  Paid ${currentDate}
                                </div>
                                <div style="padding:16px 0px 16px 0px">
                                  <hr
                                    style="width:100%;border:none;border-top:1px solid #EEEEEE;margin:0"
                                  />
                                </div>
                              </div>
                            </td>
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="padding:0px 0px 0px 0px;text-align:right"
                                >
                                 <img
                                      alt="Your invoice has been paid."  src="https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_8yUGBZcXaAtTEofB/invoice-skeleton.png"
                                      style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div style="padding:8px 0px 8px 0px">
                      <table
                        align="center"
                        width="100%"
                        cellpadding="0"
                        border="0"
                        style="table-layout:fixed;border-collapse:collapse"
                      >
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="color:#474849;font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                                >
                                  Receipt number
                                </div>
                              </div>
                            </td>
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="font-size:14px;font-weight:normal;text-align:right;padding:0px 0px 0px 0px"
                                >
                                  ${id}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div style="padding:8px 0px 8px 0px">
                      <table
                        align="center"
                        width="100%"
                        cellpadding="0"
                        border="0"
                        style="table-layout:fixed;border-collapse:collapse"
                      >
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="color:#474849;font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                                >
                                  Payment method
                                </div>
                              </div>
                            </td>
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <divstyle="font-size:14px;font-weight:normal;text-align:right;padding:0px 0px 0px 0px"
                                >
                                  Master Card
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div style="background-color:#ffffff;padding:16px 24px 24px 24px">
                    <div style="padding:0px 0px 0px 0px">
                      <div style="padding:8px 0px 8px 0px">
                        <table
                          align="center"
                          width="100%"
                          cellpadding="0"
                          border="0"
                          style="table-layout:fixed;border-collapse:collapse"
                        >
                          <tbody style="width:100%">
                            <tr style="width:100%">
                              <td
                                style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                              >
                                <div style="padding:0px 0px 0px 0px">
                                  <div
                                    style="font-size:14px;font-weight:bold;text-align:left;padding:0px 0px 0px 0px"
                                  >
                                    ${name}
                                  </div>
                                </div>
                              </td>
                              <td
                                style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                              >
                                <div style="padding:0px 0px 0px 0px">
                                  <div
                                    style="font-size:14px;font-weight:bold;text-align:right;padding:0px 0px 0px 0px"
                                  >
                                    ${Amount.toFixed(2)} THB
                                  </div>
                                </div>
                              </td>
                              
                            </tr>
                          </tbody>
                          
                          <tbody style="width:100%">
                            <tr style="width:100%">
                              <td
                                style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                              >
                                <div style="padding:0px 0px 0px 0px">
                                  <div
                                    style="font-size:14px;font-weight:bold;text-align:left;padding:0px 0px 0px 0px"
                                  >
                                    VAT 7%
                                  </div>
                                </div>
                              </td>
                              <td
                                style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                              >
                                <div style="padding:0px 0px 0px 0px">
                                  <div
                                    style="font-size:14px;font-weight:bold;text-align:right;padding:0px 0px 0px 0px"
                                  >
                                    ${vatAmount.toFixed(2)} THB
                                  </div>
                                </div>
                              </td>
                              
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div style="padding:8px 0px 8px 0px">
                        <hr
                          style="width:100%;border:none;border-top:1px solid #EEEEEE;margin:0"
                        />
                      </div>
                    </div>
                    <div style="padding:8px 0px 8px 0px">
                      <table
                        align="center"
                        width="100%"
                        cellpadding="0"
                        border="0"
                        style="table-layout:fixed;border-collapse:collapse"
                      >
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="font-size:14px;font-weight:bold;text-align:left;padding:0px 0px 0px 0px"
                                >
                                  Total
                                </div>
                              </div>
                            </td>
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="font-size:14px;font-weight:bold;text-align:right;padding:0px 0px 0px 0px"
                                >
                                  ${money.toFixed(2)} THB
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        
                      </table>
                    </div>
                    <div style="padding:8px 0px 8px 0px">
                      <hr
                        style="width:100%;border:none;border-top:1px solid #EEEEEE;margin:0"
                      />
                    </div>
                    <div style="padding:8px 0px 8px 0px">
                      <table
                        align="center"
                        width="100%"
                        cellpadding="0"
                        border="0"
                        style="table-layout:fixed;border-collapse:collapse"
                      >
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="font-size:14px;font-weight:bold;text-align:left;padding:0px 0px 0px 0px"
                                >
                                  Amount paid
                                </div>
                              </div>
                            </td>
                            <td
                              style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                            >
                              <div style="padding:0px 0px 0px 0px">
                                <div
                                  style="font-size:14px;font-weight:bold;text-align:right;padding:0px 0px 0px 0px"
                                >
                                  ${money.toFixed(2)} THB
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    style="color:#474849;font-size:12px;font-weight:normal;text-align:left;padding:24px 24px 16px 24px"
                  >
                    Can we help? Just reply to this email.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
