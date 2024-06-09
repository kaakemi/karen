const express = require("express");
const os = require("os");
const app = express();

app.get("/", (request, response)=>{
    return response
        .status(200)
        .json({
            message:"Olá"
        });
});

app.get("/liveness", (request, response)=>{
    return response
        .status(200)
        .json({
            message:"Meu app está vivo",
            path:"",
            gid:"",
            uid:"",
            date:new Date().getTime()
        });
});

app.get("/readiness", (request, response)=>{
    return response
        .status(200)
        .json({
            message:"Meu app está pronto",
            platform:os.platform(),
            freemen:os.freemem(),
            homedir: os.homedir(),
            date:new Date().getTime()
        });
});


module.exports = app;