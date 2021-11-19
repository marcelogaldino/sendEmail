import { Router } from "express";

import { sendMailsRoutes } from "./sendMails.routes";


const routes = Router();

routes.use("/email", sendMailsRoutes);


export { routes };