const express = require('express');
const {register} =require('../controllers/registration_controllers/register_controllers');
const {login} =require('../controllers/registration_controllers/login_controllers')
const registerRouter = express.Router();

registerRouter.post("/register/:role",register);
registerRouter.post("/login",login);

module.exports = registerRouter;
