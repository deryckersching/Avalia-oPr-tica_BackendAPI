const loja_sistema = require("../Model/loja_sistemaModel");

async function buscarTodos (req, res) {
    try {
        const loja_sistema = await loja_sistemaModel.buscarTodos;

        return res.json(loja_sistema);
    } catch(error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao buscar loja"
        });
    };
};

async function buscarPorId (req, res) {
    try {
        const id = req.params.id;
        const loja_sistema = await loja_sistemaModel.buscarPorId(id);

        if(!loja_sistema || loja_sistema.length === 0) {
            return res.status(404).json({
                error: "Loja não encontrada"
            });
        };

        return res.json(loja_sistema);
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar Loja"

        });
    };
};

async function criar(req, res) {
    try {
        const {
            preco,
            quantidade_estoque
        } = req.body;

        novoSistema = await loja_sistemaModel.criar({
            preco, 
            quantidade_estoque
        });

        return res.status(201).json({
            mensagem: "Loja criada com sucesso",
            id: novoSistema.insertId
        });
        } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar Loja"
         
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const loja_sistema = await loja_sistemaModel.buscarPorId(id);

        if(!loja_sistema || loja_sistema.length === 0) {
            return res.status(404).json({
                error: "Loja não encontrada"
            });
        };

        await loja_sistemaModel.editar(id, req.body);

        return res.json({
            mensagem: "Loja editada com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao editar loja"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const loja_sistema = await loja_sistemaModel.buscarPorId(id);

        if(!loja_sistema || loja_sistema.length === 0) {
            return res.status(404).json({
                error: "Loja não encontrada"
            });
        };

        await loja_sistemaModel.excluir(id);

        return res.json({
            mensagem: "Loja excluído com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao excluir loja"
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