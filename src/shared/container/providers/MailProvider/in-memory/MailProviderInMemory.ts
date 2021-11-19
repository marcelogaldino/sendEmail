import { IMailProvider } from "../IMailProvider";

class MailProviderInMemory implements IMailProvider {
    private message: any[] = []

    async sendMail(to: string, subject: string, body: string): Promise<void> {
        this.message.push({
            to,
            subject,
            body
        })
    }

}

export { MailProviderInMemory }