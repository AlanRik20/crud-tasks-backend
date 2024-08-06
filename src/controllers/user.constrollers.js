const { conex } = require("../db/conex");

const insertTask = async (req, res) => {
    const { title, description, isComplete } = req.body;
    try {
        await conex.promise().query('INSERT INTO tasks (`title`, `description`, `isComplete`) VALUES (?,?,?)', [title, description, isComplete]);
        res.status(201).json({ message: 'La tarea se creó correctamente' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Hubo un error a la hora de crear la tarea' });
    }
};

const viewTasks = async (req, res) => {
    try {
        const [rows] = await conex.promise().query('SELECT * FROM tasks');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Hubo un error al obtener las tareas' });
    }
};

module.exports = { insertTask, viewTasks };
