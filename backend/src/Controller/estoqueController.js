const estoque = require("../Model/estoqueModel");

async function buscarTodos (req, res) {
    try {
        const estoque = await estoqueModel.buscarTodos;

        return res.json(estoque);
    } catch(error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao buscar estoque"
        });
    };
};

async function buscarPorId (req, res) {
    try {
        const id = req.params.id;
        const estoque = await estoqueModel.buscarPorId(id);

        if(!estoque || estoque.length === 0) {
            return res.status(404).json({
                error: "Estoque não encontrado"
            });
        };

        return res.json(estoque);
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar estoque"

        });
    };
};

async function criar(req, res) {
    try {
        const {
            quantidade_estoque
        } = req.body;

        novoEstoque = await estoqueModelModel.criar({
            quantidade_estoque
        });

        return res.status(201).json({
            mensagem: "Estoque criado com sucesso",
            id: novoEstoque.insertId
        });
        } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar Estoque"
         
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const estoque = await estoqueModel.buscarPorId(id);

        if(!estoque || estoque.length === 0) {
            return res.status(404).json({
                error: "Estoque não encontrado"
            });
        };

        await estoqueModel.editar(id, req.body);

        return res.json({
            mensagem: "Estoque editado com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao editar estoque"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const estoque = await estoqueModel.buscarPorId(id);

        if(!estoque || estoque.length === 0) {
            return res.status(404).json({
                error: "Estoque não encontrado"
            });
        };

        await estoqueModel.excluir(id);

        return res.json({
            mensagem: "Estoque excluído com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao excluir Estoque"
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