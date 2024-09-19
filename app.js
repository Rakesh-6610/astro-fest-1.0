const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));




function sendMail(status, email) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    if (status) {
        const mailOptions = {
            from: `"Astro Fest 1.0" <${process.env.EMAIL}>`,
            to: email,
            subject: "Registration Status",
            html: `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                        <title>ID</title>

                        <style type="text/css">
                            table {
                                border-spacing: 0;
                            }
                            td {
                                padding: 0;
                            }
                            img {
                                border: 0;
                            }
                            .wrapper {
                                width: 100%;
                                table-layout: fixed;
                                background-color: #cccccc00;
                            }
                            .main {
                                background-color: #f0f0f0;
                                margin: 0 auto;
                                width: 100%;
                                max-width: 468px;
                                border-spacing: 0;

                            }
                        
                        </style>
                    </head>

                    <body style="margin:0; background-color: #e9dede00; box-sizing: border-box;">
                        <center class="wrapper">
                            <table class="main" style="width: 100%; max-width: 468px; background-color: #f0f0f0; height: 100%; border-spacing: 0;">
                                <tr>
                                    <td style="width: 100%; max-width: 468px;">
                                        <table class="top" style="border-spacing: 0;width: 100%; max-width: 468px;; height: 100%; background-color: #f0f0f0; background-image: url('https://scontent.xx.fbcdn.net/v/t1.15752-9/434360080_414158554560714_4905350436994214544_n.jpg?stp=dst-jpg_p403x403&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3do5PVBv3zcAb5Q6oD5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdXckBBA2xrh34kpUznTinLk5eNjUn3UhYP4h4u5eK1tpQ&oe=664062D4'); background-repeat: no-repeat; background-size: 100% 230px; background-position: top center;">
                                            <tr>
                                                <td>
                                                    <center>
                                                        <img src="https://scontent.fdac149-1.fna.fbcdn.net/v/t1.15752-9/434400342_890092896222890_3660791898893176370_n.jpg?stp=dst-jpg_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MP0hlNlVe5IAb7aw64b&_nc_ht=scontent.fdac149-1.fna&oh=03_AdUqQPwP31xxt_wb-odV2qwAi386_NbmCV_R80y8KhXcBg&oe=663F93E9" alt="Mindspeak Society logo" style="margin-top: 80px; width: 100px; height: 100px; border-radius: 50%;">
                                                    </center>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><h2 style="margin: 0; padding: 0;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: 400; font-size: 22px; line-height: 49px; letter-spacing: 0.01em; margin-top: 10px; text-align: center;">Towsif Arafat Taorat</h2></td>
                                            </tr>
                                            <tr>
                                                <td><h2 style="margin: 0; padding: 0;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: 400; font-size: 2.2rem; line-height: 49px; letter-spacing: 0.01em; margin-top: 10px; text-align: center;">Official Member</h2></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            

                                <tr>
                                    <td style="width: 100%; max-width: 468px;; background-color: #f0f0f0;">
                                        <table class="id-c" style="border-spacing: 0;background-color: #f0f0f0; width: 100%; max-width: 468px; height: 100%;">
                                            <tr>
                                                <td>
                                                    <center>
                                                        <table class="id-con" style="border-spacing: 0; padding: 40px 0px; text-align: center; margin-top: 50px;width: 100%; max-width: 468px; height: 150px;background-color: rgb(249, 249, 249);">
                                                            <tr>
                                                                <td>
                                                                    <p style="margin: 0; padding: 0;">Here is your id for <em>Mindspeak Society</em>:</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h1 style="margin: 0; padding: 0;letter-spacing: 0.04em; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 2rem; user-select: text;">MSSCP240001</h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </center>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="width: 100%; max-width: 468px; background-color: #f0f0f0;">
                                        <center>
                                            <table class="text" style="border-spacing: 0;width: 90%; max-width: 265px; text-align: center; margin: 50px 0px;">
                                                <tr>
                                                    <td>
                                                        <p style="margin: 0; padding: 0;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-weight: 600;color: rgba(0, 0, 0, 0.589);">This is an ID given to everyone who is an official member of the society. In order to protect the privacy of each member, we created this system. Please use this ID for any official events.</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </center>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="width: 100%; max-width: 468px; background-color: red;">
                                        <center>
                                            <table class="footer" style="border-spacing: 0;">
                                                <tr>
                                                    <td>
                                                        <h2 style="text-align: center; margin-top: 25px; padding: 0;font-size: 25px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgba(255, 255, 255, 0.863);">Mindspeak Society</h2>
                                                    </td>
                                                </tr>


                                                <tr>
                                                    <td>
                                                        <p style="margin-bottom: 30px; margin-top: 0px;">
                                                            <a href="https://www.facebook.com/profile.php?id=100089095411472" class="facebook" title="facebook" style="text-decoration: none;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; text-align: center; font-size: 17px;color: rgba(249, 249, 249, 0.856); margin: 10px 11px;">Facebook</a><span style="font-size: 30px; font-weight: 400; color: #f0f0f0; margin: 0;">|</span>
                                                            <a href="https://www.instagram.com/mindspeak_society" class="insta" title="instagram" style="text-decoration: none;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; text-align: center; font-size: 17px;color: rgba(249, 249, 249, 0.856); margin: 10px 11px;">Instagram</a><span style="font-size: 30px; font-weight: 400; color: #f0f0f0; margin: 0;">|</span>
                                                            <a href="https://discord.gg/6QpezKET6P" class="dc" title="discord" style="text-decoration: none;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; text-align: center; font-size: 17px;color: rgba(249, 249, 249, 0.856); margin: 10px 11px;">Discord</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </center>
                                    </td>
                                </tr>
                            </table>
                        </center>
                    </body>
                </html>


            `
        };
    }
    else {
        const mailOptions = {
            from: `"Astro Fest 1.0" <${process.env.EMAIL}>`,
            to: email,
            subject: "Registration Status",
            html: "<h1>Registration Failed</h1><p>Please contact with us at <a href='mailto:rakeshkarmaker0175@gmail.com'>rakeshkarmaker0175@gmail.com</a></p>"
        };
    }
    

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}







app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/form.html");
    // res.send("Hello World");
})


app.post("/register", (req, res) => {

    const segments = [];
    
    if (req.body.quiz) { segments.push("quiz") }
    if (req.body.writing) { segments.push("writing") }
    if (req.body.poster) { segments.push("poster") }
    if (req.body.speech) { segments.push("speech") }
    if (req.body.meme) { segments.push("meme") }

    const url = "https://us9.api.mailchimp.com/3.0/lists/3126c4f861";
    const options = {
        method: "POST",
        auth: `Rakesh:${process.env.MAILCHIMP_API_KEY}`,
    }
    const data = {
        members: [
            {
                email_address: req.body.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: req.body.firstName,
                    LNAME: req.body.lastName,
                    FBLINK: req.body.facebookLink,
                    PHONE: req.body.phoneNumber,
                    SEGMENTS: String(segments)
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);
    const request = https.request(url, options, (response) => {
        if (response.statusCode === 200) {
            console.log("Successfully subscribed to the mailchimp list");
            sendMail(true, req.body.email);
        } else {

            console.log("Failed to subscribe to the mailchimp list");
            response.on("data", function (data) {
                console.log(JSON.parse(data));
            })

            sendMail(false, req.body.email);
        }
    })
    request.write(jsonData);
    request.end();

})


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
})