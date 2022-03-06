const express = require('express');
require("dotenv").config();
const app = express()

app.get('/', (req, res, next) => {
    res.json({
        message: "Did you get it?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
})
app.post('/', (req, res, next) => {
    res.json({
        message: "Did you post it?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
})
app.patch('/', (req, res, next) => {
    res.json({
        message: "Did you patch it?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
})
app.delete('/', (req, res, next) => {
    res.json({
        message: "Did you delete it?",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
})

//middleware modules for error handling
app.use((req,res,next) =>{
    const error = new Error("NOT FOUND!!");
    error.status= 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error:{
        message:error.message,
        status: error.status,
        method: req.method
        }
    })
})


app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))

