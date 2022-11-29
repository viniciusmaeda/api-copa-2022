// importação dos módulos necessário para o projeto
const express = require("express");
const mongoose = require("mongoose");

// utilização do dotenv para leitura dos dados privados
require("dotenv").config();

// instanciar o módulo express
const app = express();

// habilita o recebimento de dados json
app.use(express.json());

// importar as rotas da aplicação
const groupRoutes = require("./routes/Group");
const teamRoutes = require("./routes/Team");

// rotas disponíveis nesta API
app.use("/group", groupRoutes);
app.use("/team", teamRoutes);

// conexão com o banco de dados MongoDB (Atlas)
mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qxdwo.mongodb.net/${process.env.DB}`,
  )
  .then(() => {
    console.log("Database connected!");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
