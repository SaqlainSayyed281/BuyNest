const express = require("express")
const router = express.Router()


const{
    Health
} = require("../controller/api")

router.post("/health" , Health)

module.exports = router