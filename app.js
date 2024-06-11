const express = require("express");
const os = require("os");
const app = express();
const mysql = require("mysql");
require('dotenv').config();

const conexao = mysql.createConnection({
    host:process.env.DB_HOST ?? "localhost",
    user:"root",
    port:3306,
    password:"123456",
    database:"cloud"
});

conexao.connect(function(erro){
    if (erro) throw erro;
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