import nodeMailer from 'nodemailer';
import {} from 'dotenv/config';

const MAIL_SETTINGS = {
    host: "smtp.gmail.com",
    service: 'gmail',
    auth: {
      // user:"gayathrivasu13@gmail.com",
      // pass: "BIRIyani@1",
      user:"gayathrivasu13@gmail.com",
      pass: "efdfizzdtwzbvupu",
  
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      }
  }
const transporter = nodeMailer.createTransport(MAIL_SETTINGS);

export const sendMail = async (params) => {
    try {
      let info = await transporter.sendMail({
        from: MAIL_SETTINGS.auth.user,
        to: params.to, 
        subject: 'OTP Verification ✔',
        html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h2>Welcome to the club.</h2>
          <h4>You are officially In ✔</h4>
          <p style="margin-bottom: 30px;">Please enter the sign up OTP to get started</p>
          <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.OTP}</h1>
     </div>
      `,
      });
     
      return info;   
    } catch (error) {
      console.log(error);
      return false;
    }
  };


  sendMail();
