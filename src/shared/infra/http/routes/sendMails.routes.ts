import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/CreateUser/CreateUserController";

const sendMailsRoutes = Router();

const createUserController = new CreateUserController();

sendMailsRoutes.post("/send", createUserController.handle);

export { sendMailsRoutes };