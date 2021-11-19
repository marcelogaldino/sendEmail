import "reflect-metadata"
import express from "express";

import '@shared/container/providers'

import { routes } from "@shared/infra/http/routes";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.json({ status: "Server is running" })
})

app.use(routes);

export { app }