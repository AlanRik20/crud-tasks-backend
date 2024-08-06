const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

const router = require("./routers/user.routes");

app.use( router); // Prefijo '/api' para las rutas

// app.use((req, res) => {
//     res.status(404).json({ error: 'Ruta no encontrada' });
// });

app.listen(PORT, () => console.log(`Servidor funcionando en ${PORT}`));
