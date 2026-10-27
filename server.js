app.use("dotenv");

app.use((express.json));
app.use("/produtos", produtosRoutes);
app.use("/loja_sistema", loja_sistemaRoutes);
app.use("/funcionarios", funcionariosRoutes);
app.use("/estoque", estoqueRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`)
});