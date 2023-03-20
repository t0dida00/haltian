const express = require("express")

const messageController = require("../controllers/messagesController")

const router = express.Router();

router.post("/",messageController.insertMessage)