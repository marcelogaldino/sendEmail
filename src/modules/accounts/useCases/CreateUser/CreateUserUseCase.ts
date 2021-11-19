import "reflect-metadata"
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider"
import { inject, injectable } from "tsyringe"

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("EtherealMailProvider")
        private mailProvider: IMailProvider
    ) { }

    async execute(name: string, email: string) {
        await this.mailProvider.sendMail(email, "Criação de novo usuário na plataforma", name)
    }
}

export { CreateUserUseCase }