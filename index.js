import express from "express";
import connection from "./config/sequelize-config.js";
const app = express();

connection.authenticate().then(() => {
    console.log("Conexão com o banco realizada com sucesso!")
}).catch((error) => {
    console.log(error)
});

connection.query(`CREATE DATABASE IF NOT EXISTS loja;`).then(() => {
    console.log("Banco de dados criado!")
}).catch((error) => {
    console.log(error)
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

import clientesController from "./controllers/clientesController.js";
import pedidosController from "./controllers/pedidosController.js";
import produtosController from "./controllers/produtosController.js";

app.use("/", clientesController);
app.use("/", pedidosController);
app.use("/", produtosController);

//Tela login
app.get("/index", (req,res) => {
    res.render("index");
});

//Tela inicial
app.get("/user", (req, res) => {
    res.render("user")
});

//'192.168.9.23'
app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado!")
    }
});