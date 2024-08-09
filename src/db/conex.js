import { createConnection } from 'mysql2';

const conex = createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Añade tu contraseña si es necesario
    database: 'tasks_db'
});

conex.connect((err) => {
    if (err) {
        console.log('Error de conexión: ', err);
        return;
    }
    console.log("Conectado a la BD");
});

export { conex };
