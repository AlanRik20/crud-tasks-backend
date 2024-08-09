import express, { json } from "express";
const app = express();
const PORT = 4000;

app.use(json());

import {taskRouter} from "./routers/user.routes.js";

app.use( "/api/tasks",taskRouter); 

app.listen(PORT, () => console.log(`Servidor funcionando en ${PORT}`));
