const produtosModel = require("../Model/produtosModel");

async function buscarTodos (req, res) {
    try {
        const produtos = await produtosModel.buscarTodos;

        return res.json(produtos);
    } catch(error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao buscar produtos"
        });
    };
};

async function buscarPorId (req, res) {
    try {
        const id = req.params.id;
        const produtos = await produtosModel.buscarPorId(id);

        if(!produtos || produtos.length === 0) {
            return res.status(404).json({
                error: "Produto não encontrado"
            });
        };

        return res.json(produtos);
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar Produto"

        });
    };
};

async function criar(req, res) {
    try {
        const {
            nome, 
            categoria, 
            preco, 
            descricao, 
            quantidade_estoque, 
            quantidade_minima
        } = req.body;

        novoProduto = await produtosModel.criar({
            nome, 
            categoria, 
            preco, 
            descricao, 
            quantidade_estoque, 
            quantidade_minima
        });

        return res.status(201).json({
            mensagem: "Produto criado com sucesso",
            id: novoProduto.insertId
        });
        } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar Produto"
         
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const produtos = await produtosModel.buscarPorId(id);

        if(!produtos || produtos.length === 0) {
            return res.status(404).json({
                error: "Produto não encontrado"
            });
        };

        await produtosModel.editar(id, req.body);

        return res.json({
            mensagem: "Produto editado com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao editar produto"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const produtos = await produtosModel.buscarPorId(id);

        if(!produtos || produtos.length === 0) {
            return res.status(404).json({
                error: "Produto não encontrado"
            });
        };

        await produtosModel.excluir(id);

        return res.json({
            mensagem: "Produto excluído com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao excluir produto"
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