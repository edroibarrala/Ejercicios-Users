const express = require('express');
const Controller = require('../controllers/user.controller');

const router = express.Router();

router.get("/", Controller.findAll);
router.get("/:id", Controller.findById);
router.post("/", Controller.addUser);
router.put("/:id", Controller.updateUser);
router.delete("/:id", Controller.deleteUser);

module.exports = router;
