const {insertTask, viewTasks} = require("../controllers/user.constrollers")
const router = require('express').Router()

router.post("/task/insert", insertTask)
router.get("/tasks/view", viewTasks)

module.exports=router