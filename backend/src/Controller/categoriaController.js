const categoriaModel = require("../Model/categoriaModel");

async function buscarTodos (req, res) {
    try {
        const categoria = await categoriaModel.buscarTodos;

        return res.json(categoria);
    } catch(error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao buscar Categoria"
        });
    };
};

async function buscarPorId (req, res) {
    try {
        const id = req.params.id;
        const categoria = await categoriaModel.buscarPorId(id);

        if(!categoria || categoria.length === 0) {
            return res.status(404).json({
                error: "Categoria não encontrada"
            });
        };

        return res.json(categoria);
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar Categoria"

        });
    };
};

async function criar(req, res) {
    try {
        const {
            nome,
        } = req.body;

        novoCategoria = await categoriaModel.criar({
            nome,
        });

        return res.status(201).json({
            mensagem: "Categoria criada com sucesso",
            id: novoCategoria.insertId
        });
        } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar Categoria"
         
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const categoria = await categoriaModel.buscarPorId(id);

        if(!categoria || categoria.length === 0) {
            return res.status(404).json({
                error: "Categoria não encontrada"
            });
        };

        await categoriaModel.editar(id, req.body);

        return res.json({
            mensagem: "Categoria editada com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao editar Categoria"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const categoria = await categoriaModel.buscarPorId(id);

        if(!categoria || categoria.length === 0) {
            return res.status(404).json({
                error: "Categoria não encontrada"
            });
        };

        await categoriaModel.excluir(id);

        return res.json({
            mensagem: "Categoria excluída com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao excluir Categoria"
        });
    };
};


module.exports = {
    buscarTodos,
    buscarPorId, 
    criar,
    editar,
    excluir
};