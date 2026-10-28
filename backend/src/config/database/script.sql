CREATE DATABASE AvaliacaoPratica_BackendAPI;
USE AvaliacaoPratica_BackendAPI;

CREATE TABLE produtos ( 
 id_produtos INT AUTO_INCREMENT PRIMARY KEY, 
 nome VARCHAR(45) NOT NULL,  
 categoria VARCHAR(200) NOT NULL,
 preco DECIMAL(10,2) NOT NULL,
 descricao VARCHAR(200) UNIQUE,
 quantidade_estoque VARCHAR(45) NOT NULL,
 quantidade_minima VARCHAR(45) NOT NULL
); 

INSERT INTO produtos(id_produto, nome, categoria, preco, descricao, quantidade_estoque, quantidade_minima) VALUES 
(2, 'teclado', 'eletrônico', '189.99', 'Peça Eletrônica', '180', '80'),
(3, 'moletom', 'roupa', '69.90', 'Peça de Roupa', '340', '200'),
(4, 'guerra fria', 'leitura', '59.90', 'Objeto de estudo e conhecimentos', '149', '100');

FOREIGN KEY (id_categoria) REFERENCES produtos(id)

CREATE TABLE categoria ( 
 id_categoria INT AUTO_INCREMENT PRIMARY KEY, 
 nome VARCHAR(45) NOT NULL
); 

INSERT INTO categoria (id_categoria, nome) VALUES 
(6, 'eletrônico'),
(7, 'leitura'),
(8, 'roupa');

CREATE TABLE estoque ( 
 id_estoque INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
 id_produto INT AUTO_INCREMENT,  
 quantidade_estoque VARCHAR(45) NOT NULL
); 

INSERT INTO estoque (id_estoque, id_produto, quantidade_estoque) VALUES
(8, 2, '180'),
(9, 3, '200'),
(1, 4, '149');

FOREIGN KEY (id_produtos) REFERENCES estoque(id)

