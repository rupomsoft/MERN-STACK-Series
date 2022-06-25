const express =require('express');
const UsersController=require("../controllers/UsersController");
const TasksController=require("../controllers/TasksController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");


const router =express.Router();


router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);


router.post("/createTask",AuthVerifyMiddleware,TasksController.createTask);

router.get("/updateTaskStatus/:id/:status",AuthVerifyMiddleware,TasksController.updateTaskStatus);
router.get("/listTaskByStatus/:status",AuthVerifyMiddleware,TasksController.listTaskByStatus);
router.get("/taskStatusCount",AuthVerifyMiddleware,TasksController.taskStatusCount);



module.exports=router;






































module.exports=router;