const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

const router = require("./routers/user.routes");

app.use( router); 

app.listen(PORT, () => console.log(`Servidor funcionando en ${PORT}`));
