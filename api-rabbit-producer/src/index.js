const express = require('express');

const Cliente = require("./models/cliente");
const Produto = require("./models/produto");
const Venda = require("./models/venda");
const enviarVenda = require("./rabbitmq/send");

const app = express();

const PORT = 3001;

app.post('/enviar', (req, res) => {
    let cliente = new Cliente(1, 'Fulano da Silva', 'fulano@gmail.com', Date.now());
    let produto = new Produto(1, 'Celular xpto', 'eletronicos', Date.now(), 1000.00);
    let venda = new Venda(cliente, produto, 5);
    enviarVenda(venda);
    res.send("ENVIANDO A VENDA");
    });

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));