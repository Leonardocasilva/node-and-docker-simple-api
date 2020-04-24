"use strict";

const express = require("express");
const router = express.Router();
const controller = require('../controller/sms-controller');

router.post('/v1/callbackBroker/', controller.post);

module.exports = router;
