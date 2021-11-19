import { MailProviderInMemory } from "../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"

let createUserUseCase: CreateUserUseCase
let mailProvider: MailProviderInMemory

describe("Send Email Create User", () => {
    beforeEach(() => {
        mailProvider = new MailProviderInMemory()
        createUserUseCase = new CreateUserUseCase(mailProvider)
    })

    it("should be able to send email", async () => {
        const sendEmail = jest.spyOn(mailProvider, "sendMail")

        await createUserUseCase.execute("Marcelo Galdino", "test@marcelo")

        expect(sendEmail).toHaveBeenCalled()
    })
})