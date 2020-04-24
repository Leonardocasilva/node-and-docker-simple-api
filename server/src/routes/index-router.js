"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    gitRepository: "https://github.com/Leonardocasilva/Angular-and-Node-Task-Manager-With-Chronometer",
    title: "Node API Structure",
    version: "0.0.2"
  });
});

module.exports = router;
