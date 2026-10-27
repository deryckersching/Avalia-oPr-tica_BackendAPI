const funcionarios = require("../Model/funcionariosModel");

async function buscarTodos (req, res) {
    try {
        const funcionarios = await funcionariosModel.buscarTodos;

        return res.json(funcionarios);
    } catch(error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao buscar funcionário"
        });
    };
};

async function buscarPorId (req, res) {
    try {
        const id = req.params.id;
        const funcionarios = await funcionariosModel.buscarPorId(id);

        if(!funcionarios || funcionarios.length === 0) {
            return res.status(404).json({
                error: "Funcionário não encontrado"
            });
        };

        return res.json(funcionarios);
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar Funcionário"

        });
    };
};

async function criar(req, res) {
    try {
        const {
            nome, 
            cpf
        } = req.body;

        novoFuncionario = await funcionariosModel.criar({
            nome, 
            cpf
        });

        return res.status(201).json({
            mensagem: "Funcionário criado com sucesso",
            id: novoFuncionario.insertId
        });
        } catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar Funcionário"
         
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const funcionarios = await funcionariosModel.buscarPorId(id);

        if(!funcionarios || funcionarios.length === 0) {
            return res.status(404).json({
                error: "Funcionário não encontrado"
            });
        };

        await funcionariosModel.editar(id, req.body);

        return res.json({
            mensagem: "Funcionário editado com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao editar funcionário"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const funcionarios = await funcionariosModel.buscarPorId(id);

        if(!funcionarios || funcionarios.length === 0) {
            return res.status(404).json({
                error: "Funcionário não encontrado"
            });
        };

        await funcionariosModel.excluir(id);

        return res.json({
            mensagem: "Funcionário excluído com sucesso"
        });

    } catch(error) {
        console.log(error);
        return res.status(500)({
            error: "Erro ao excluir Funcionário"
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