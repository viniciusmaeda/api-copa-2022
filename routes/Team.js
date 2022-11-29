// importar o módulo express
const express = require("express");

// importar o modelo
const Team = require("../models/TeamModel");

// método Router para lidar com as rotas
const routes = express.Router();

// GET - Obter os dados dos times
routes.get("/", (req, res) => {
  res.send("Esta rota irá retornar os times.");
});

// POST - Salvar um novo time no BD
routes.post("/", async (req, res) => {
  // obter os dados através da requisição
  const time = req.body;

  await Team.create(time);

  console.log(time);

  res.send("teste");
});

// exportar as rotas para veículo
module.exports = routes;
