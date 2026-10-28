const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const PORT = process.env.API_PORT;

const produtosRoutes = require("./backend/src/Routes/produtosRoutes");
const categoriaRoutes = require("./backend/src/Routes/categoriaRoutes");
const estoqueRoutes = require("./backend/src/Routes/estoqueRoutes");

app.use(express.json());

app.use("/produtos", produtosRoutes);
app.use("/categoria", categoriaRoutes);
app.use("/estoque", estoqueRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`)
});





