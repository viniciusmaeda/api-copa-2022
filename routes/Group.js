// importar o módulo express
const express = require("express");

// método Router para lidar com as rotas
const routes = express.Router();

// GET - Obter os dados dos grupos
routes.get("/", (req, res) => {
  res.send("Dados dos grupos...");
});

// exportar as rotas para veículo
module.exports = routes;
