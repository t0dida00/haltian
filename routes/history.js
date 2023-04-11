const express = require("express")

const historyController = require("../controllers/history")

const router = express.Router();

router.get("/",historyController.getData)
module.exports = router;
