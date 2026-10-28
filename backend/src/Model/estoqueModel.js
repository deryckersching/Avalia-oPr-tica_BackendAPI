const bd = require("../config/database/conexao");

async function buscarTodos() {
    const sql = `
    SELECT *
    FROM estoque;
    `;

    const [resultado] = await bd.execute(sql);

    return resultado;
};

async function buscarPorId(id) {
    const sql = `
    SELECT *
    FROM estoque
    WHERE id_estoque = ?;
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function criar(id_estoque, id_produto, quantidade_estoque) {
    const sql = `
    INSERT INTO estoque VALUES
    (8, 2, '180'),
    (9, 3, '200'),
    (1, 4, '149');
    WHERE (?, ?, ?)
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function editar(quantidade_estoque) {
    const sql = `
    quantidade_estoque;
    `;


};

async function excluir(estoque, [id]) {
    const sql = `
    DELETE * FROM estoque
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