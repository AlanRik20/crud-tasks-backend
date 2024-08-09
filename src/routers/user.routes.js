import { insertTask, viewTasks, deleteTasks, updateTasks, viewTaskById } from "../controllers/user.constrollers.js"
import { validateCreate } from "../validaciones/task.validation.js"

import { Router } from "express"
const taskRouter = Router()

taskRouter.post("/", validateCreate, insertTask)
taskRouter.get("/", viewTasks)
taskRouter.delete("/:id", deleteTasks)
taskRouter.put("/:id", updateTasks)
taskRouter.get("/:id", viewTaskById)

export {taskRouter}