const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "priyankraychura.online@gmail.com",
        pass: "qifhuvrgrdkkurxp"
    }
})

module.exports.sendOTP = (to, otp) => {
    let mailOptions = {
        to: to,
        from:  "priyankraychura.online@gmail.com",
        subject: "PASSWORD RESET OTP",
        text: `Your password reset OTP is ${otp}`
    }
    transporter.sendMail(mailOptions);
    console.log("OTP Sent!");
}