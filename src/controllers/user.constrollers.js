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

const deleteTasks = async(req,res)=>{

    const id = parseInt(req.params.id)
    try{
        await conex.promise().query('DELETE FROM tasks WHERE id=?',[id])
        res.status(201).json({message:'la tarea se eliminó correctamente'})
    }catch(error){
        console.log(error);
        res.status(404).json({error:'Hubo un error al eliminar la tarea'})
    }
}

const updateTasks = async (req, res)=>{
    const id = parseInt(req.params.id)
    const { title, description, isComplete } = req.body;
    try{
        await conex.promise().query("UPDATE `tasks` SET title=?,`description`=?,`isComplete`=? WHERE id=?", [title, description, isComplete, id])
        res.status(201).json({message:'la tarea se modificó correctamente'})
    }catch(error){
        console.log(error);
        res.status(404).json({error:'Hubo un error al modificar la tarea'})
    }

}

module.exports = { insertTask, viewTasks, deleteTasks, updateTasks };
