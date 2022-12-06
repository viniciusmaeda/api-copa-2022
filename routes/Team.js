// importar o módulo express
const express = require("express");

// importar o modelo
const Team = require("../models/TeamModel");

// método Router para lidar com as rotas
const routes = express.Router();

// GET - Obter os dados dos times
routes.get("/", async (req, res) => {
  try {
    // constante para receber os dados do banco
    const teams = await Team.find();

    // enviar os dados da consulta ao usuário
    res.status(200).json(teams);
  } catch (error) {
    // se houver erro na consulta, devolve a mensagem de erro
    res.status(500).json({ error: error });
  }
});

// POST - Salvar um novo time no BD
routes.post("/", async (req, res) => {
  // obter os dados do corpo da requisição
  const team = req.body;

  try {
    // realiza a criação dos dados no BD
    await Team.create(team);

    // retorna com mensagem de sucesso e o código de criação
    res.status(201).send("Time inserido com sucesso");
  } catch (error) {
    // se houver erro na consulta, devolve a mensagem de erro
    res.status(500).json({ error: error });
  }
});

// PUT - updateOne()

// DELETE - deleteOne()

// exportar as rotas para veículo
module.exports = routes;
