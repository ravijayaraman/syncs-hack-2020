var express = require('express');
var controller = require('../controllers/hacky.server.controller');
var router = express.Router();

router.get("/",controller.getLoginPage);
module.exports = router
