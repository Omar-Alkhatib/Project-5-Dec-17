const adminRouter = require("express").Router();
const { addCategory, students_details, disable_user, instructors_details} = require('../controllers/main-controller');

adminRouter.post('/category',addCategory) // req.body.name

adminRouter.get('/students_details', students_details);
// // Disable students accounts
adminRouter.put('/disable', disable_user);
// // View all instructors accounts details
adminRouter.get('/instructors_details', instructors_details);


module.exports = adminRouter;
