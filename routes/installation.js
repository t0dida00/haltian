const express = require("express")

const installator = require("../controllers/installation")

const router = express.Router();

router.post("/",installator.getData)
router.post("/disconnection",installator.disConnection)
module.exports = router;
