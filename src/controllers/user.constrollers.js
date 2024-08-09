import { conex } from "../db/conex.js";

const insertTask = async (req, res) => {
    const { title, description, isComplete } = req.body;
    if (! typeof isComplete !== 'boolean') {
        return res.status(400).json({ error: 'el dato "isComplete" debe ser booleano' });
    }
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

const viewTaskById = async(req,res)=>{
    const id = parseInt(req.params.id)
    try {
    const [sel]= await conex.promise().query("SELECT * FROM tasks WHERE id = ?", [id])
    if(sel.length===0){
        return res.status(404).json({message:"no existe el elemento con el ID seleccionado"})
    }
    res.json(sel)
    res.status(200)
    }catch{
        console.log(error);
        res.status(404).json({message:"hubo un error al seleccionar el elemento"})
    }
}

const deleteTasks = async(req,res)=>{

    const id = parseInt(req.params.id)

    try{
        const [rows] = await conex.promise().query('SELECT * FROM tasks WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No existe una tarea con el ID proporcionado." });
        }
        await conex.promise().query('DELETE FROM tasks WHERE id=?',[id])
        res.status(200).json({message:'la tarea se eliminó correctamente'})
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

export { insertTask, viewTasks, deleteTasks, updateTasks, viewTaskById };

