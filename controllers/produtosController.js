import express from "express";
import Produto from "../models/produtos.js";
const router = express.Router();

router.get("/produtos", (req,res) => {
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos
        })
    })
});

/*var produtos = [
    {imgProd: "imgs/placaDeVideoRTX4060.webp", nomeProd: "Placa de Vídeo RTX 4060 VENTUS 2x Black OC MSI NVIDIA GeForce, 8GB GDDR6, DLSS, Ray Tracing", preco: 2149.99, categoria: "hardware"},
    {imgProd: "imgs/processadorAMDRyzen5-4600G.webp", nomeProd: "Processador AMD Ryzen 5 4600G, 3.7GHz (4.2GHz Max Turbo), Cache 11MB, AM4, Vídeo Integrado", preco: 599.99, categoria: "hardware"},
    {imgProd: "imgs/placaMãeAsusTUFGAMINGA520MPLUSII-AMD-AM4.webp", nomeProd: "Placa Mãe Asus TUF GAMING A520M-PLUS II, AMD AM4, mATX, DDR4", preco: 569.99, categoria: "hardware"},
    {imgProd: "imgs/microsoft365Personal.webp", nomeProd: "Microsoft 365 Personal, 12 Meses - QQ2-01017 / QQ2-01386 - Mídia Física", preco: 139.99, categoria: "software"},
    {imgProd: "imgs/microsoftWindows11Pro64.webp", nomeProd: "Licença Microsoft Windows 11 Pro 64 Bits ESD", preco: 79.90, categoria: "software"},
    {imgProd: "imgs/adobePhotoshop2023.webp", nomeProd: "Adobe Photoshop 2023", preco: 229.00, categoria: "software"},
    {imgProd: "imgs/tecladoGamerRiseModeG1Full.webp", nomeProd: "Teclado Gamer Rise Mode G1 Full, USB, Branco - RM-TG-01-FW", preco: 32.99, categoria: "periféricos"},
    {imgProd: "imgs/headsetGamerRedragonZeusX.webp", nomeProd: "Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Surround 7.1, USB, Drivers 53MM, Preto/Vermelho - H510-RGB", preco: 259.99, categoria: "periféricos"},
    {imgProd: "imgs/mouseGamerRedragonCobra.webp", nomeProd: "Mouse Gamer Redragon Cobra, Chroma RGB, 10000DPI, 7 Botões, Preto - M711 V2", preco: 119.99, categoria: "periféricos"}
];*/

export default router;