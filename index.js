const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db.js');

console.log("click");asdasd
app.get('/',(req,res)=>{
    res.status(200).json({
        success: vikas,
        message: 'Data fetchedd ajeet'
    });
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})
