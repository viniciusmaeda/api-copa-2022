// importação dos módulos necessário para o projeto
const express = require("express");
const mongoose = require("mongoose");

// instanciar o módulo express
const app = express();

// importar as rotas da aplicação
const groupRoutes = require("./routes/Group");
const teamRoutes = require("./routes/Team");

// rotas disponíveis nesta API
app.use("/group", groupRoutes);
app.use("/team", teamRoutes);

// conexão com o banco de dados MongoDB (Atlas)
mongoose
  .connect("")
  .then(() => {
    console.log("Database connected!");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
