const {insertTask, viewTasks, deleteTasks, updateTasks} = require("../controllers/user.constrollers")
const {validateCreate} = require("../validaciones/task.validation")
const router = require('express').Router()

router.post("/tasks", validateCreate, insertTask)
router.get("/tasks", viewTasks)
router.delete("/task/:id", deleteTasks)
router.put("/task/:id", updateTasks)

module.exports=router