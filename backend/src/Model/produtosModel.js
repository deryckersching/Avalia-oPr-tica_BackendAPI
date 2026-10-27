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
    WHERE id = ?;
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function criar(id_produto, nome, categoria, preco, descricao, quantidade_estoque) {
    const sql = `
    INSERT INTO produtos VALUES
    (2, 'teclado', 'eletrônico', 'R$189.99', 'Peça eletrônica', '34'),
    (3, 'mouse', 'eletrônico', 'R$69.90', 'Peça eletrônica', '45'),
    (4, 'livro', 'estudo', 'R$59.90', 'Objeto de estudo e conhecimentos', '149');
    WHERE (?, ?, ?, ?, ?)
    `;

    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function editar(nome, categoria, preco, descricao, quantidade_estoque) {
    const sql = `
    nome, 
    categoria, 
    preco, 
    descricao, 
    quantidade_estoque;
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