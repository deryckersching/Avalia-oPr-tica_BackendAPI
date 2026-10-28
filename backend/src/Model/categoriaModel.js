const bd = require("../config/database/conexao");

async function buscarTodos() {
    const sql = `
    SELECT *
    FROM categoria;
    `;

    const [resultado] = await bd.execute(sql);

    return resultado;
};

async function buscarPorId(id) {
    const sql = `
    SELECT *
    FROM categoria
    WHERE id_categoria = ?;
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function criar(id_categoria, nome) {
    const sql = `
    (6, 'eletrônico'),
    (7, 'leitura'),
    (8, 'roupa');
    WHERE (?, ?)
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function editar(nome) {
    const sql = `
    nome;
    `;


};

async function excluir(categoria, [id]) {
    const sql = `
    DELETE * FROM categoria
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