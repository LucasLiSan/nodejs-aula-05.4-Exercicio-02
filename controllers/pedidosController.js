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

export default router;