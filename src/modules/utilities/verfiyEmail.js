import { createTransport } from "nodemailer";
import emailTemplate from "./emailTemplate.js"

const transporter = createTransport({
    service:"gmail",
    auth: {
        user: "ititestapps@gmail.com",
        pass: "tetx mkiq vcud gawf",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Note App Verfication 👻" <ititestapps@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: emailTemplate(email), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


export default sendEmail;