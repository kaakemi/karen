const express = require("express");
const os = require("os");
const app = express();
const mysql = require("mysql2");
require('dotenv').config();

const conexao = mysql.createConnection({
    host:process.env.DB_HOST,
    port:3010,
    user:'root',
    password:'123456',
    database:'cloud'
});

conexao.connect((error)=>{
    if (error) {
        console.error('Erro ao conectar: ', error);
        return;
    }
    console.log("Conectado")
});

app.get("/", (request, response)=>{
    return response
        .status(200)
        .json({
            message:"Olá mundo"
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

app.get("/consulta-cadastro", (request, response)=>{
    const query = 'SELECT * from colaborador';
    conexao.query(query,(erro,resultado)=>{
        if (erro) {
            console.error('Erro ao executar a consulta', erro);
            return response.status(500).json({error:'Erro ao consultar dados'})
        }
        return response.status(200).json(resultado);
    });
});


module.exports = app;