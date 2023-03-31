const express = require("express")

const installator = require("../controllers/installation")

const router = express.Router();

router.post("/",installator.getData)

module.exports = router;
