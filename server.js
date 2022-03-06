const express = require('express');
require("dotenv").config();
const app = express()

app.get('/', (req, res, next) => {
    res.json({
        message: `Using ${req.method} /`,
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
})
app.get('/:id', (req, res, next) => {
    res.json({
        message: `Using ${req.method} / with user ID ${req.params.id}`,
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: req.params.id
        }
    });
})
app.post('/', (req, res, next) => {
    res.json({
        message: `Using ${req.method} /`,
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
})
app.patch('/:id', (req, res, next) => {
    res.json({
        message: `Using ${req.method} / with user ID ${req.params.id}`,
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: req.params.id
        }
    });
})
app.delete('/:id', (req, res, next) => {
    res.json({
        message: `Using ${req.method} / with user ID ${req.params.id}`,
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: req.params.id
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

