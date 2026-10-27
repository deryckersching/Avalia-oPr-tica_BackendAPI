CREATE DATABASE AvaliacaoPratica_BackendAPI;
USE AvaliacaoPratica_BackendAPI;

CREATE TABLE produtos ( 
 id_produto INT AUTO_INCREMENT PRIMARY KEY, 
 nome VARCHAR(45) NOT NULL,  
 categoria VARCHAR(45) NOT NULL,
 preco VARCHAR(45) NOT NULL,
 descricao VARCHAR(45) NOT NULL,
 quantidade_estoque VARCHAR(45) NOT NULL
); 

INSERT INTO produtos(id_produto, nome, categoria, preco, descricao, quantidade_estoque) VALUES 
(2, 'teclado', 'eletrônico', 'R$189.99', 'Peça eletrônica', '34'),
(3, 'mouse', 'eletrônico', 'R$69.90', 'Peça eletrônica', '45'),
(4, 'livro', 'estudo', 'R$59.90', 'Objeto de estudo e conhecimentos', '149');

CREATE TABLE funcionarios ( 
 nome VARCHAR(45) NOT NULL,  
 id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
 cpf VARCHAR(45) UNIQUE
); 

INSERT INTO funcionarios (nome, id_funcionario, cpf) VALUES 
('João', 6, '29471394935'),
('Patricia', 7, '88771394935'),
('Pedro', 8, '34194712867');

CREATE TABLE loja_sistema ( 
 id_loja_sistema INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
 id_produtos INT AUTO_INCREMENT NOT NULL,  
 id_funcionarios INT AUTO_INCREMENT NOT NULL,  
 preco VARCHAR(45) NOT NULL,  
 quantidade_estoque VARCHAR(45) NOT NULL
); 

INSERT INTO loja_sistema (id_loja_sistema, id_produtos, id_funcionarios, preco, quantidade_estoque) VALUES 
(5, 2, 6, 'R$189.99', '34'),
(4, 3, 7, 'R$69.90', '45'),
(6, 4, 8, 'R$59.90', '149');

FOREIGN KEY (id_produtos) REFERENCES produtos(id),
FOREIGN KEY (id_funcionarios) REFERENCES funcioanrios(id)


CREATE TABLE estoque ( 
 id_estoque INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
 id_produto INT AUTO_INCREMENT,  
 quantidade_estoque VARCHAR(45) NOT NULL
); 

INSERT INTO estoque (id_estoque, id_produto, quantidade_estoque) VALUES
(8, 2, '34'),
(9, 3, '45'),
(1, 4, '149');

CREATE TABLE Rel ( 
 idloja_sistema INT PRIMARY KEY,  
 idestoque INT PRIMARY KEY  
); 