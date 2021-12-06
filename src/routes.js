const express = require("express");
const routes = express.Router();
const ClientController = require("./controllers/ClientController");
const produtoController = require('./controllers/ProdutController');
const vendaController = require("./controllers/VendaController");

//Clientes
routes.get('/cliente/busca/:id', ClientController.buscar)
routes.get('/cliente/listar', ClientController.index )
routes.post('/cliente/cadastro',ClientController.cadastrar )
routes.delete('/cliente/apagar/:id', ClientController.apagar)
routes.put('/cliente/atualizar/:id', ClientController.atualizar)

//Produtos
routes.post('/produto/cadastro', produtoController.cadastrar)
routes.get('/produto/listar', produtoController.listar)
routes.put('/produto/atualizar/:id', produtoController.atualizar)
routes.get('/produto/busca/:id', produtoController.buscar)
routes.delete('/produto/apagar/:id', produtoController.apagar)

//Vendas
routes.post('/venda/cadastro', vendaController.cadastrar)
routes.get('/venda/busca/:id', vendaController.buscar)
routes.get('/venda/listar', vendaController.listar)
routes.delete('/venda/apagar/:id', vendaController.apagar)



module.exports = routes;