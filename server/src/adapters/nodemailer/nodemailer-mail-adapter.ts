import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f977ace67662b3",
      pass: "3484361c7c0315"
    }
  });


export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData) {
            await transport.sendMail({
                from: 'Equipe Feedget <oi@feedget.com>',
                to: 'Luis Ruediger <luisruediger27@gmail.com>',
                subject,
                html: body,
            });
    };
}