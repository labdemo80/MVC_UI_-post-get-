const express = require('express');
const { displayEmp, addEmp, addForm } = require('../controller/empController');

const router = express.Router()

router.get("/",displayEmp)

router.get("/add",addForm)

router.post("/addEmp",addEmp)

module.exports = router


