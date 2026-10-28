const bd = require("../config/database/conexao");

async function buscarTodos() {
    const sql = `
    SELECT *
    FROM produtos;
    `;

    const [resultado] = await bd.execute(sql);

    return resultado;
};

async function buscarPorId(id) {
    const sql = `
    SELECT *
    FROM produtos
    WHERE id_produtos = ?;
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function criar(id_produtos, nome, categoria, preco, descricao, quantidade_estoque, quantidade_minima) {
    const sql = `
    INSERT INTO produtos VALUES
    (2, 'teclado', 'eletrônico', '189.99', 'Peça Eletrônica', '180', '80'),
    (3, 'moletom', 'roupa', '69.90', 'Peça de Roupa', '340', '200'),
    (4, 'guerra fria', 'leitura', '59.90', 'Objeto de estudo e conhecimentos', '149', '100');
    WHERE (?, ?, ?, ?, ?, ?, ?)
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function editar(nome, categoria, preco, descricao, quantidade_estoque, quantidade_minima) {
    const sql = `
    nome, 
    categoria, 
    preco, 
    descricao, 
    quantidade_estoque,
    quantidade_minima;
    `;


};

async function excluir(produtos, [id]) {
    const sql = `
    DELETE * FROM produtos
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