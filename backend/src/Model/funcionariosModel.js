const bd = require("../config/database/conexao");

async function buscarTodos() {
    const sql = `
    SELECT *
    FROM funcionarios;
    `;

    const [resultado] = await bd.execute(sql);

    return resultado;
};

async function buscarPorId(id) {
    const sql = `
    SELECT *
    FROM funcionarios
    WHERE id = ?;
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function criar(nome, id_funcionario, cpf) {
    const sql = `
    INSERT INTO funcionarios VALUES
    ('João', 6, '29471394935'),
    ('Patricia', 7, '88771394935'),
    ('Pedro', 8, '34194712867');
    WHERE (?, ?, ?)
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function editar(nome, cpf) {
    const sql = `
    nome,
    cpf;
    `;


};

async function excluir(funcionarios, [id]) {
    const sql = `
    DELETE * FROM funcionarios
    WHERE id = ?;
    `;

    const [resultado] = await bd.execute(sql, [id])

    return resultado.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarPorId, 
    criar,
    editar,
    excluir
};