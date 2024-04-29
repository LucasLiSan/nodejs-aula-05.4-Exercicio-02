import express from "express";
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

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

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado!")
    }
});