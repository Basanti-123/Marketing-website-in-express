const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "bnagari154@gmail.com",
    pass: "vczfctluukbvktnq",
  },
});
//verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const mailer = async (payload) => {
    const {to, data} = payload

    const messageOptions = {
        from: '"Basanti Nagri " <bnagari154@gmail.com>', // sender address
        to: to, // list of receivers
        subject: "Message from your website", // Subject line
        html: JSON.stringify(data),
        
         
       
    };
  const info = await transporter.sendMail(messageOptions);

return info.messageId;
};




module.exports = {mailer};
