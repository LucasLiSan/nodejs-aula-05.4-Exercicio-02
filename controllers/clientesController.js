import express from "express";
const router = express.Router();

router.get("/clientes", (req,res) => {
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
});

export default router;