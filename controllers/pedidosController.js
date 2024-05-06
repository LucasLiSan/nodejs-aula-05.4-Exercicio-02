import express from "express";
import Produto from "../models/produtos.js";
import Pedido from "../models/pedidos.js";
const router = express.Router();

router.get("/carrinho", (req,res) => {
    Pedido.findAll().then(pedidos => {
        Produto.findAll().then(produtos => {
            res.render("carrinho", {
                pedidos: pedidos,
                produtos: produtos
            });
        })
    })
});

//CADASTRAR
router.post("/carrinho/new", (req,res) => {
    const numPedido = req.body.numPedido;
    const valorPedido = req.body.valorPedido.replace(',', '.');
    Pedido.create({
        numPedido : numPedido,
        valorPedido : valorPedido,
    }).then(() => {
        res.redirect("/carrinho")
    }).catch((error) => {
        console.log(error)
    })
});

//DELETAR
router.get("/carrinho/delete/:id", (req,res) => {
    const id = req.params.id;
    Pedido.destroy({
        where: {
            id : id
        }
    }).then(() => {
        res.redirect("/carrinho")
    }).catch((error) => {
        console.log(error)
    })
});

//EDITAR
router.get("/carrinho/edit/:id", (req,res) => {
    const id = req.params.id;
    Pedido.findByPk(id).then(function(pedido) {
        res.render("carrinhoEdit", {
            pedido : pedido
        })
    }).catch((error) => {
        console.log(error)
    })
});

//ATUALIZAR BANCO DE DADOS
router.post("/carrinho/update/:id", (req,res) => {
    const id = req.body.id;
    const numPedido = req.body.numPedido;
    const valorPedido = req.body.valorPedido.replace(',', '.');
    Pedido.update(
        {
            numPedido : numPedido,
            valorPedido : valorPedido,
        },
        {where: {id : id}}
    ).then(() => {
        res.redirect("/carrinho")
    }).catch((error) => {
        console.log(error)
    })
});

export default router;