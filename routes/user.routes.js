const express = require("express");
const router = express.Router();


const userController = require("../controllers/user.controller");

// C(reate)R(read)U(pdate)D(elete) actions
//router.get("/", middlewares, blockchain.updateScore, userController.list);
router.post("/create", userController.create);
router.post("/join",userController.join);
router.get("/:id", userController.getMembers);

module.exports = router;
