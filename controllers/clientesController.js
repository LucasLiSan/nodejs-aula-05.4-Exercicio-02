import express from "express";
import Cliente from "../models/clientes.js";
const router = express.Router();

router.get("/clientes", function(req,res) {
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes: clientes
        })
    })
});

//CADASTRAR
router.post("/clientes/new", (req,res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    Cliente.create({
        nome : nome,
        cpf : cpf,
        endereco : endereco
    }).then(() => {
        res.redirect("/clientes")
    }).catch((error) => {
        console.log(error)
    })
});

//DELETAR
router.get("/clientes/delete/:id", (req,res) => {
    const id = req.params.id;
    Cliente.destroy({
        where: {
            id : id
        }
    }).then(() => {
        res.redirect("/clientes")
    }).catch((error) => {
        console.log(error)
    })
});

//EDITAR
router.get("/clientes/edit/:id", (req,res) => {
    const id = req.params.id;
    Cliente.findByPk(id).then(function(cliente) {
        res.render("clienteEdit", {
            cliente : cliente
        })
    }).catch((error) => {
        console.log(error)
    })
});

//ATUALIZAR BANCO DE DADOS
router.post("/clientes/update/:id", (req,res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    Cliente.update(
        {
            nome : nome,
            cpf : cpf,
            endereco : endereco
        },
        {where: {id : id}}
    ).then(() => {
        res.redirect("/clientes")
    }).catch((error) => {
        console.log(error)
    })
});



/*router.get("/clientes", (req,res) => {
    const clientes = [
        {profilePic: "imgs/profilePic/BillGates.webp" , nome: "William Gates", cpf: "123.456.789-10", endereco: "Rua Seattle"},
        {profilePic: "imgs/profilePic/LinusTorvalds.webp" ,nome: "Linus Torvalds", cpf: "456.789.012-13", endereco: "Rua Helsinque"},
        {profilePic: "imgs/profilePic/MarkZuckerberg.webp" ,nome: "Mark Zuckerberg", cpf: "789.012.345-16", endereco: "Rua White Plains"},
        {profilePic: "imgs/profilePic/SergeyBrin.webp" ,nome: "Sergey Brin", cpf: "012.345.678-19", endereco: "Rua Moscou"},
        {profilePic: "imgs/profilePic/LawrencePage.webp" ,nome: "Lawrence Page", cpf: "345.678.901-22", endereco: "Rua Lansing"},
        {profilePic: "imgs/profilePic/JeffreyBezos.webp" ,nome: "Jeffrey Bezos", cpf: "678.901.234-25", endereco: "Rua Albuquerque"},
        {profilePic: "imgs/profilePic/GabeNewell.webp" ,nome: "Gabe Newell", cpf: "901.234.567-28", endereco: "Rua Colorado"},
        {profilePic: "imgs/profilePic/ShigeruMiyamoto.webp" ,nome: "Shigeru Miyamoto", cpf: "234.567.890-31", endereco: "Rua Sonobe"}
    ];
    res.render("clientes", {
        clientes : clientes
    });
});*/

export default router;