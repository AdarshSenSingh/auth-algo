const express = require('express');
const router= express.Router();
const authRoute =require('../controllers/auth_controllers')


router.route("/").get(authRoute.home);

router.route("/register").post(authRoute.register);


module.exports= router;