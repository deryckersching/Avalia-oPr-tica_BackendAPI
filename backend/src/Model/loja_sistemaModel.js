const bd = require("../config/database/conexao");

async function buscarTodos() {
    const sql = `
    SELECT *
    FROM loja_sistema;
    `;

    const [resultado] = await bd.execute(sql);

    return resultado;
};

async function buscarPorId(id) {
    const sql = `
    SELECT *
    FROM loja_sistema
    WHERE id = ?;
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function criar(id_loja_sistema, id_produtos, id_funcionarios, preco, quantidade_estoque) {
    const sql = `
    INSERT INTO loja_sistema VALUES
    (5, 2, 6, 'R$189.99', '34'),
    (4, 3, 7, 'R$69.90', '45'),
    (6, 4, 8, 'R$59.90', '149');
    WHERE (?, ?, ?, ?, ?)
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function editar(preco, quantidade_estoque) {
    const sql = `
    preco,
    quantidade_estoque;
    `;


};

async function excluir(loja_sistema, [id]) {
    const sql = `
    DELETE * FROM loja_sistema
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