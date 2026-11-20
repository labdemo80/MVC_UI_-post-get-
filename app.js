const express = require('express');
const { connectDB } = require('./db');
const router = require('./router/empRouter');

const app = express()

connectDB()

app.use(express.json())

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))

app.use("/",router)

app.listen(2000,()=>{
    console.log("running...");
})