const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db.js');

console.log("click");s
app.get('/',(req,res)=>{
    res.status(200).json({
        success: true,
        message: 'Data fetchedd successfully'
    });
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})
