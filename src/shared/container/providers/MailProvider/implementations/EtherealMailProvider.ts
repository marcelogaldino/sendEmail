import { injectable } from "tsyringe"
import nodemailer, { Transporter } from 'nodemailer'
import { IMailProvider } from "../IMailProvider"

@injectable()
class EtherealMailProvider implements IMailProvider {
    private client: Transporter

    constructor() {
        nodemailer.createTestAccount().then(account => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            })
            this.client = transporter
        }).catch(error => console.error(error))
    }
    async sendMail(to: string, subject: string, body: string): Promise<void> {
        const message = await this.client.sendMail({
            to,
            from: "Talk Gazin <noreplay@gazin.com.br>",
            subject,
            html: `Parabéns o novo usuário <strong>${body}</strong> foi criado`
        })

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }

}

export { EtherealMailProvider }