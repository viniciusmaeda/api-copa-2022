// importar o módulo express
const express = require("express");

// instanciar o módulo express
const app = express();

// importar as rotas da aplicação
const groupRoutes = require("./routes/Group");
const teamRoutes = require("./routes/Team");

// rotas disponíveis nesta API
app.use("/group", groupRoutes);
app.use("/team", teamRoutes);

// número da porta em que o servidor irá rodar
const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));
