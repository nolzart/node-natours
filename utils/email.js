const nodemailer = require('nodemailer');
// const nodemailerSendgrid = require('nodemailer-sendgrid');
const pug = require('pug');
const htmlToText = require('html-to-text');

module.exports = class Email {
    constructor(user, url) {
        this.to = user.email;
        this.firstName = user.name.split(' ')[0];
        this.url = url;
        this.from = `Natours <${process.env.EMAIL_FROM}>`;
    }

    newTransport() {
        if (process.env.NODE_ENV === 'production')
            return nodemailer.createTransport({
                service: 'SendGrid',
                // secure: false,
                auth: {
                    user: process.env.SENDGRID_USERNAME,
                    pass: process.env.SENDGRID_API_KEY,
                },
            });

        return nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    async send(template, subject) {
        console.log(process.env.SENDGRID_API_KEY);
        // 1) get template
        const html = pug.renderFile(
            `${__dirname}/../views/emails/${template}.pug`,
            {
                firstName: this.firstName,
                subject,
                url: this.url,
            }
        );
        // 2)
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            text: htmlToText.fromString(html),
            html,
        };
        // 3)
        await this.newTransport().sendMail(mailOptions);
    }

    async sendWelcome() {
        await this.send('welcome', 'Welcome to the Natours famliy!');
    }

    async sendResetPassword() {
        await this.send(
            'resetPassword',
            'Your password reset token (valid for 10m)'
        );
    }
};
