const {insertTask, viewTasks, deleteTasks, updateTasks} = require("../controllers/user.constrollers")
const router = require('express').Router()

router.post("/tasks", insertTask)
router.get("/tasks", viewTasks)
router.delete("/task/:id", deleteTasks)
router.put("/task/:id", updateTasks)

module.exports=router