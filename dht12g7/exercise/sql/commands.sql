CREATE DATABASE htdocswordpresspuravidaofficial;
CREATE DATABASE htdocswordpresspuravidalaboratory;

CREATE DATABASE wordpresspuravida;

CREATE DATABASE puravida;

USE wordpresspuravida;

DROP DATABASE phpmyadmin;

DROP DATABASE test;

DROP DATABASE test;
DROP DATABASE phpmyadmin;


CREATE DATABASE api;
CREATE DATABASE integrator;

CREATE DATABASE wppuravidaofficial;
DROP DATABASE wppuravidaofficial;
USE wppuravidaofficial;

CREATE DATABASE wppuravidalaboratory;
DROP DATABASE wppuravidalaboratory;
USE wppuravidalaboratory;

/*
DB_CONNECTION=mysql
DB_DATABASE=integrator
DB_HOST=localhost
DB_PASSWORD=
DB_PORT=8888
DB_USERNAME=root
*/

DROP DATABASE phpmyadmin;



DROP TABLE publics;
DROP TABLE sequelizemeta;
DROP TABLE orders;

USE api;
USE integrator;

SELECT * FROM categories;
SELECT * FROM items;
SELECT * FROM orders;
SELECT * FROM products;
SELECT * FROM publics;
SELECT * FROM sequelizemeta;
SELECT * FROM services;
SELECT * FROM events;

DROP TABLE categories;
DROP TABLE orders;
DROP TABLE items;
DROP TABLE products;
DROP TABLE publics;
DROP TABLE sequelizemeta;
DROP TABLE services;
DROP TABLE events;

RENAME DATABASE app TO api;

DELETE FROM publics WHERE id BETWEEN 55 AND 87;

SELECT * FROM tasks;

DROP TABLE users;

DROP TABLE publics;
DROP TABLE sequelizemeta;

DROP DATABASE mydb;
DROP DATABASE phpmyadmin;

USE recipe;

CREATE TABLE services LIKE recipes;

CREATE TABLE publics LIKE users;

CREATE TABLE professores (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    sobrenome VARCHAR(100),
    nascimento DATE,
    email VARCHAR(100),
    telefone BIGINT(14),
);

CREATE TABLE cursos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(100)
);

CREATE TABLE alunos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    sobrenome VARCHAR(100),
    nascimento DATE,
    email VARCHAR(100),
    telefone BIGINT(14)
);

CREATE TABLE turmas (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(100)
);

ALTER TABLE turmas MODIFY descricao TEXT;

CREATE TABLE alunos_professores_turmas (
	conclusao DATE,
	FOREIGN KEY (id_aluno) REFERENCES alunos(id),
	FOREIGN KEY (id_professor_assistente) REFERENCES professores(id),
	FOREIGN KEY (id_professor_generalista) REFERENCES professores(id),
	FOREIGN KEY (id_turma) REFERENCES turmas(id),
	id_aluno INT,
	id_professor_assistente INT,
	id_professor_generalista INT,
	id_turma INT,
	id_turmas_alunos_professores INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	inicio DATE
);

ALTER TABLE alunos_professores_turmas CHANGE id_professor_assistente id_assistente INT;
ALTER TABLE alunos_professores_turmas CHANGE id_professor_generalista id_generalista INT;
ALTER TABLE alunos_professores_turmas CHANGE id_turmas_alunos_professores id_alunos_professores_turmas INT;
ALTER TABLE alunos_professores_turmas CHANGE id_alunos_professores_turmas id INT;

INSERT INTO professores (nome, sobrenome) VALUES
('Victor', 'Torres'),
('Vinicius', 'Oliveira'),
('Murilo', 'Ignácio'),
('Marcelo', 'Diament'),
('José', 'Salin'),
('Abraão', 'Mendes'),
('Galvão', 'Bueno'),
('Pablo', 'Duarte'),
('Giulia', 'Prates'),
('Bruna', 'Oliveira');

SELECT * FROM recipes;

SELECT * FROM publics;

SELECT * FROM categories;

SELECT * FROM products;
SELECT * FROM services;

ALTER TABLE services ADD fk_category INT;

ALTER TABLE products DROP COLUMN file;
ALTER TABLE categories DROP COLUMN file;

DELETE FROM recipes WHERE id BETWEEN 1 AND 8;

DELETE FROM categories WHERE id >= 9;

SELECT * FROM services;

SELECT * FROM publics;

DROP TABLE recipes;

SELECT * FROM categories;

SELECT * FROM services;

SELECT * FROM professores;
SELECT * FROM professores WHERE id = 2;
SELECT * FROM professores WHERE id = 5;
SELECT * FROM professores WHERE id < 5;
SELECT * FROM professores WHERE id <= 5;
SELECT * FROM professores WHERE id BETWEEN 2 AND 6;
SELECT * FROM professores WHERE id > 2 AND id < 6;
SELECT * FROM professores WHERE id >= 2 AND id <= 6;

INSERT INTO alunos (nome, sobrenome) VALUES
('Victor', 'Torres'),
('Vinicius', 'Oliveira'),
('Murilo', 'Ignácio'),
('Marcelo', 'Diament'),
('José', 'Salin'),
('Abraão', 'Mendes'),
('Galvão', 'Bueno'),
('Pablo', 'Duarte'),
('Giulia', 'Prates'),
('Bruna', 'Oliveira');

SELECT * FROM alunos;

SELECT COUNT(*) AS Total FROM alunos WHERE nome LIKE 'jOSÉ';

SELECT MAX(id) AS Total FROM alunos;

SELECT MIN(id) AS Total FROM alunos;

SELECT SUM(id) AS Total FROM alunos;

SELECT AVG(id) AS Total FROM alunos;

ALTER TABLE turmas ADD codigo VARCHAR(5);

ALTER TABLE turmas ADD id_cursos INT;

ALTER TABLE turmas ADD FOREIGN KEY (id_cursos) REFERENCES cursos(id);

ALTER TABLE turmas CHANGE id_cursos id_curso INT;

ALTER TABLE turmas ADD id_alunos VARCHAR(100);

ALTER TABLE professores ADD id_turmas INT;

ALTER TABLE professores ADD FOREIGN KEY (id_turmas) REFERENCES turmas(id);

ALTER TABLE professores CHANGE id_turmas id_turma INT;

ALTER TABLE turmas CHANGE id_alunos id_aluno VARCHAR(100);

ALTER TABLE turmas CHANGE id_aluno id_aluno INT;

ALTER TABLE turmas ADD FOREIGN KEY (id_aluno) REFERENCES alunos(id);

SELECT * FROM turmas;

SELECT * FROM publics;

SELECT * FROM alunos;

ALTER TABLE alunos ADD id_professor INT;

ALTER TABLE alunos ADD FOREIGN KEY (id_professor) REFERENCES professores(id);

SELECT * FROM cursos;

UPDATE cursos SET id = 4 WHERE id = 5;

UPDATE cursos SET titulo = 'full stack dev' WHERE id = 4;

SELECT titulo FROM cursos;

SELECT * FROM users;

ALTER TABLE users CHANGE repeatpassword passagain VARCHAR(100);

ALTER TABLE users CHANGE maritalstatus civilstatus VARCHAR(100);

ALTER TABLE users DROP COLUMN id;
ALTER TABLE users DROP COLUMN active;
ALTER TABLE users DROP COLUMN file;
ALTER TABLE users DROP COLUMN name;
ALTER TABLE users DROP COLUMN email;
ALTER TABLE users DROP COLUMN password;

DROP TABLE users;

SELECT * FROM users;

SELECT * FROM recipes;

DELETE FROM users WHERE id BETWEEN 6 AND 30;

INSERT INTO users (fullname, email, password)
VALUES
('Fábio de Almeida Ribeiro', 'far820320@gmail.com', '123456789'),
('Fábio de Almeida Ribeiro', 'far820320@gmail.com', '123456789'),
('Fábio de Almeida Ribeiro', 'far820320@gmail.com', '123456789');

CREATE TABLE users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(100),
    nickname VARCHAR(100),
    genre VARCHAR(100),
    maritalstatus VARCHAR(100),
    birthdate DATE,
    profession VARCHAR(100),
    salary VARCHAR(100),
    
    biography TEXT,
    
    cpf BIGINT(11),
    rg BIGINT(9),
    
    cep BIGINT(8),
    street VARCHAR(100),
    city VARCHAR(100),
    uf VARCHAR(2),
    countrie VARCHAR(100),
    
    cnpj BIGINT(14),
    company VARCHAR(100),
    fantasy VARCHAR(100),
    department VARCHAR(100),
    office VARCHAR(100),
    
    phone BIGINT(14),
    email VARCHAR(100),
    
    level VARCHAR(100),
    active VARCHAR(100),
    
    password VARCHAR(100),
    repeatpassword VARCHAR(100)
);

INSERT INTO cursos (id, titulo) VALUES
(0, 'dev web full stack'),
(1, 'dev mobile android'),
(2, 'dev mobile IOS'),
(3, 'ux designer');

SELECT * FROM turmas;

INSERT INTO turmas (id) value (4);

SELECT * FROM alunos;

INSERT INTO alunos (nascimento)

SELECT CONCAT(nome, ' ', sobrenome) AS 'Nome Completo:' FROM alunos;

/*
SELECT titulo, nome
FROM filmes
INNER JOIN idioma ON filmes.id_idioma = idiomas.id_idioma;
*/
SELECT * FROM alunos_professores_turmas;

SELECT * FROM sequelizemeta;

SELECT t.descricao, a.nome, 
FROM alunos_professores_turmas AS apt
INNER JOIN turmas AS t ON(apt.id_turma = t.id)
INNER JOIN alunos AS a ON(apt.id_aluno = a.id);

CREATE DATABASE recipe;
USE recipe;
SELECT * FROM recipes;
ALTER TABLE recipes ADD active BOOLEAN;

RENAME TABLE categorys TO categories;

INSERT INTO recipes (name, ingredient, mode, cost, turn, time, active)
VALUES
('Lorem', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 100, 200, '10:00', true),
('Lorem', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 100, 200, '10:00', true),
('Lorem', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 100, 200, '10:00', true),
('Lorem', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 100, 200, '10:00', true),
('Lorem', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 100, 200, '10:00', true),
('Lorem', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 100, 200, '10:00', true),
('Lorem', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 100, 200, '10:00', true);

CREATE TABLE product (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
active BOOLEAN,
coat DECIMAL(6, 2),
description TEXT,
file VARCHAR(100),
name VARCHAR(100)
);

INSERT INTO categorys (description, name)
VALUES
('1 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 1'),
('2 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 2'),
('3 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 3'),
('4 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 4'),
('5 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 5'),
('6 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 6'),
('7 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 7'),
('8 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 8'),
('9 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 9');

DELETE FROM categorys WHERE id = 11;

DELETE FROM categorys WHERE id BETWEEN 1 AND 10;

SELECT * FROM categorys;

CREATE TABLE category (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
active BOOLEAN,
description TEXT,
file VARCHAR(100),
name VARCHAR(100)
);

RENAME TABLE category TO categorys;

alter table recipes drop column createAt;

alter table recipes drop column updateAt;

user recipes;

SELECT * FROM recipes;

SELECT * FROM users;

SELECT * FROM products;

SELECT * FROM recipes;

SELECT * FROM services;

ALTER TABLE recipes ADD fk_category INT;

UPDATE categories SET id = 1 WHERE id = 49;
UPDATE categories SET id = 2 WHERE id = 50;
UPDATE categories SET id = 3 WHERE id = 51;
UPDATE categories SET id = 4 WHERE id = 52;
UPDATE categories SET id = 5 WHERE id = 53;
UPDATE categories SET id = 6 WHERE id = 54;
UPDATE categories SET id = 7 WHERE id = 55;
UPDATE categories SET id = 8 WHERE id = 56;
UPDATE categories SET id = 9 WHERE id = 57;

SELECT * FROM products;

RENAME TABLE product TO products;

ALTER TABLE products CHANGE coat cost DECIMAL(6,2);

ALTER TABLE products CHANGE fk_category fk_category INT;

UPDATE products SET id = 2 WHERE id = 20;
UPDATE products SET id = 3 WHERE id = 21;
UPDATE products SET id = 4 WHERE id = 22;
UPDATE products SET id = 5 WHERE id = 23;
UPDATE products SET id = 6 WHERE id = 24;
UPDATE products SET id = 7 WHERE id = 25;
UPDATE products SET id = 8 WHERE id = 26;
UPDATE products SET id = 9 WHERE id = 27;
UPDATE products SET id = 10 WHERE id = 28;

DELETE FROM products WHERE id BETWEEN 20 AND 36;

SELECT * FROM products;

SELECT * FROM categories;

INSERT INTO products (coat, description, name)
VALUES
('100,00', '1 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 1'),
('100,00', '2 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 2'),
('100,00', '3 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 3'),
('100,00', '4 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 4'),
('100,00', '5 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 5'),
('100,00', '6 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 6'),
('100,00', '7 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 7'),
('100,00', '8 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 8'),
('100,00', '9 Lorem Ipsum é simplesmente uma simulação de texto', 'Lorem 9');






CREATE TABLE orders (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    status VARCHAR(100),
    fk_user INT
);


CREATE TABLE items (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fk_order INT,
    fk_product INT
);

SELECT * FROM items;

INSERT INTO items (fk_order, fk_product)
VALUES
(1, 1),
(1, 2),
(2, 1);

CREATE TABLE users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    active BOOLEAN NOT NULL,
    file VARCHAR(100),
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

SELECT * FROM users;

INSERT INTO users (name, email, password)
VALUES
('Fábio Ribeiro', 'far820320@gmail.com', '123456789'),
('Roberto Alves', 'far820320@gmail.com', '123456789'),
('Aurelio Marinho', 'far820320@gmail.com', '123456789'),
('Matilda Malvada', 'far820320@gmail.com', '123456789');




SELECT * FROM orders;

SELECT * FROM items;

ALTER TABLE items ADD active BOOLEAN;

UPDATE items SET active = true WHERE id = 1;
UPDATE items SET active = true WHERE id = 2;
UPDATE items SET active = true WHERE id = 3;

ALTER TABLE orders ADD active BOOLEAN;

ALTER TABLE orders MODIFY status BOOLEAN;

UPDATE orders SET active = true WHERE id = 1;
UPDATE orders SET active = true WHERE id = 2;

UPDATE orders SET status = true WHERE id = 1;
UPDATE orders SET status = true WHERE id = 2;

INSERT INTO orders (status, fk_user) VALUES ('yes', 1), ('yes', 1);

SELECT * FROM users;

UPDATE users SET active = 1 WHERE id = 1;
UPDATE users SET active = 1 WHERE id = 2;
UPDATE users SET active = 1 WHERE id = 3;
UPDATE users SET active = 1 WHERE id = 4;




USE escola;

insert into alunos (nascimento) values ('1982-03-20');

select * from alunos;

update escola.alunos set nascimento = '1982-03-20' where (id = 1);
update escola.alunos set nascimento = '1982-03-20' where (id = 2);
update escola.alunos set nascimento = '1982-03-20' where (id = 3);
update escola.alunos set nascimento = '1982-03-20' where (id = 4);
update escola.alunos set nascimento = '1982-03-20' where (id = 5);
update escola.alunos set nascimento = '1982-03-20' where (id = 6);
update escola.alunos set nascimento = '1982-03-20' where (id = 7);
update escola.alunos set nascimento = '1982-03-20' where (id = 8);
update escola.alunos set nascimento = '1982-03-20' where (id = 9);
update escola.alunos set nascimento = '1982-03-20' where (id = 10);
update escola.alunos set nascimento = '1982-03-20' where (id = 11);
update escola.alunos set nascimento = '1982-03-20' where (id = 12);

update alunos set nome = 'Boris', sobrenome = 'Torres', email = 'far820320@gmail.com' where id = 1;

select * from alunos;

select concat(nome, ' ', sobrenome) as 'Lista de nomes:' from alunos where id <= 5;


delete from alunos where id = 11;
delete from alunos where id = 12;
delete from alunos where id = 13;

delete from alunos where id between 10 and 24;

select * from alunos;

update alunos set email = 'far820320@gmail.com' where id between 2 and 9;

update alunos set email = 'far820320@gmail.com', telefone = '11940058153' where id between 1 and 9;

select * from alunos order by id asc;

insert into alunos(nome, sobrenome) values ('Fábio', 'Ribeiro');
update alunos set id = 10 where id = 25;
select * from alunos;
delete from alunos where id = 10;

describe alunos;
show columns from alunos;

select * from alunos WHERE email = 'far820320@gmail.com' AND sobrenome = 'salin';

select count(*) as 'Colunas:' from alunos;

select * from alunos;

update alunos set nome = 'Fábio', sobrenome = 'Ribeiro', email = 'fabinho_ribeiro@hmail.com' where id = 3;

create table supervisores (
id int primary key not null auto_increment,
nome VARCHAR(20),
sobrenome VARCHAR(35),
entrada date,
saida time
);




CREATE TABLE usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50),
    email VARCHAR(50) NOT NULL UNIQUE,
    nascimento DATE
);
ALTER TABLE usuarios ADD telefone VARCHAR(50);

/* ----- */

SELECT id_filmes, titulo, filme.id_idioma, idioma.id_idioma, nome
FROM filme, idioma
WHERE filme.id_idioma = idioma.id_idioma;

SELECT id_filmes, titulo, filme.id_idioma, idioma.id_idioma, nome
FROM filme
INNER JOIN idioma
ON filme.id_idioma = idioma.id_idioma;

SELECT id_filmes, titulo, filme.id_idioma, idioma.id_idioma, nome
FROM filme
LEFT JOIN idioma
ON filme.id_idioma = idioma.id_idioma;

SELECT id_filmes, titulo, filme.id_idioma, idioma.id_idioma, nome
FROM filme
RIGHT JOIN idioma
ON filme.id_idioma = idioma.id_idioma;

/* ----- */

SELECT titulo, nome
FROM filme, categoria, filme_categotia
WHERE filme.id_filme = filme_categotia.id_filme;

/* ----- */

SELECT filme.id_filmes, titulo, nome
FROM filme
INNER JOIN filme_categotias ON filme.id_filme = filme_categotia.id_filme
INNER JOIN categoria ON categoria.id_categoria = filme_categotia.id_categoria;

/* --- */




/* criar banco de dados */
create database escola;

/* definindo banco de dados em uso */
use escola;

/* criando tabelas */
create table cursos (
	id int primary key not null auto_increment,
    descricao varchar(100)
);
create table professores (
	id int primary key not null auto_increment,
    nome varchar(100),
    sobrenome varchar(100)
);
create table alunos (
	id int primary key not null auto_increment,
    nome varchar(100),
    sobrenome varchar(100)
);
create table turmas (
	id int primary key not null auto_increment,
    codigo varchar(100),
    descricao varchar(100)
);

/* teste */ 
create table teste (
	id int primary key not null auto_increment,
    nome varchar(100)
);
/* adicionando coluna na tabela */
alter table teste add coluna varchar(10);
/* modificando coluna na tabela */
alter table teste modify coluna varchar(100);
alter table teste modify coluna text;
/* alterando o nome da coluna e o seu tipo primitivo */
alter table teste change coluna sobrenome varchar(100);
/* renomear tabela */
alter table teste rename to funcionarios;
/* adicionando coluna na tabela */
alter table funcionarios add idade varchar(10);
/* excluir coluna */
alter table funcionarios drop sobrenome;
/* excluir tabela */
drop table funcionarios;

/* excluir banco de dados */
/* drop database escola; */

/* adicionapndo coluna id_curso para efetuar relacionamento */
alter table turmas add id_curso int(11);

/* efetuando relacionamento */
alter table turmas add foreign key (id_curso) references cursos(id);

create table turmas_alunos_professores (
	id_turmas_alunos_professores int(11) primary key not null auto_increment, 
	id_turma int(11),
	id_aluno int(11), 
	id_professor_generalista int(11),
	id_professor_assistente int(11),
	inicio date,  
	conclusao date,
    foreign key (id_turma) references turmas(id),
    foreign key (id_aluno) references alunos(id),
    foreign key (id_professor_generalista) references professores(id),
    foreign key (id_professor_assistente) references professores(id)
);

/* inserindo registros na tabela cursos */
insert into cursos (descricao) values ('Web Full Stack'), ('Mobile IOS'), ('Mobile Android'), ('UX');

/* inserindo registros na tabela professores */
insert into professores (nome, sobrenome) values
('Victor', 'Torres'),
('Vinicius', 'Oliveira'),
('Murilo', 'Ignácio'),
('Marcelo', 'Diament'),
('José', 'Salin'),
('Abraão', 'Mendes'),
('Galvão', 'Bueno'),
('Pablo', 'Duarte'),
('Giulia', 'Prates'),
('Bruna', 'Oliveira');

/* inserindo registros na tabela alunos */
insert into alunos (nome, sobrenome) values
('Victor', 'Torres'),
('Vinicius', 'Oliveira'),
('Murilo', 'Ignácio'),
('Marcelo', 'Diament'),
('José', 'Salin'),
('Abraão', 'Mendes'),
('Galvão', 'Bueno'),
('Pablo', 'Duarte'),
('Giulia', 'Prates'),
('Bruna', 'Oliveira');

/* inserindo registros na tabela turmas */
insert into turmas (codigo, descricao, id_cursos) values
(0, 'dev web full stack', 1),
(1, 'dev mobile android', 3),
(2, 'dev mobile IOS', 2),
(3, 'ux designer', 4),
(4, 'dev web full stack', 1);

/* alterando o nome da coluna */
alter table turmas_alunos_professores change conclusao data_conclusao date;
alter table turmas_alunos_professores change inicio data_inicio date;

/* inserindo registros na tabela turmas_alunos_professores */
insert into turmas_alunos_professores (
	id_turma,
    id_aluno,
    id_professor_generalista,
    id_professor_assistente,
    data_inicio,
    data_conclusao
    ) values
    (1, 1, 1, 2, now(), now()),
    (2, 2, 3, 4, now(), now()),
    (3, 3, 5, 6, now(), now()),
    (4, 1, 7, 8, now(), now()),
    (5, 4, 1, 2, now(), now()),
    (2, 5, 9, 10, now(), now()
);

/* alterando nome e sobrenome de um determinado registro da tabela professores */
update professores set nome = 'Boris', sobrenome = 'Torres' 
where id = 10;

/* excluindo registro da tabela professores */
insert into professores (nome, sobrenome) values ('sad', 'dsadas');
delete from professores where id = 11;

select * from alunos;

select * from alunos where id = 2;
select * from alunos where id != 2;
select * from alunos where id < 4;
select * from alunos where id > 4;
select * from alunos where id >= 4;
select * from alunos where id <= 4;

select * from professores where id between 2 and 6;
select * from professores where id >= 2 and id <= 6;

select * from turmas where data_inicio between '2021/02/01' and '2021/02/25';



CREATE DATABASE escola;

USE escola;

CREATE TABLE professores (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    sobrenome VARCHAR(100),
    nascimento DATE,
    email VARCHAR(100),
    telefone BIGINT(14)
);

CREATE TABLE cursos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(100)
);

CREATE TABLE alunos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    sobrenome VARCHAR(100),
    nascimento DATE,
    email VARCHAR(100),
    telefone BIGINT(14)
);

CREATE TABLE turmas (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(100)
);

ALTER TABLE turmas MODIFY descricao TEXT;

CREATE TABLE alunos_professores_turmas (
	conclusao DATE,
	FOREIGN KEY (id_aluno) REFERENCES alunos(id),
	FOREIGN KEY (id_professor_assistente) REFERENCES professores(id),
	FOREIGN KEY (id_professor_generalista) REFERENCES professores(id),
	FOREIGN KEY (id_turma) REFERENCES turmas(id),
	id_aluno INT,
	id_professor_assistente INT,
	id_professor_generalista INT,
	id_turma INT,
	id_turmas_alunos_professores INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	inicio DATE
);

ALTER TABLE alunos_professores_turmas CHANGE id_professor_assistente id_assistente INT;
ALTER TABLE alunos_professores_turmas CHANGE id_professor_generalista id_generalista INT;
ALTER TABLE alunos_professores_turmas CHANGE id_turmas_alunos_professores id_alunos_professores_turmas INT;
ALTER TABLE alunos_professores_turmas CHANGE id_alunos_professores_turmas id INT;

INSERT INTO professores (nome, sobrenome) VALUES
('Victor', 'Torres'),
('Vinicius', 'Oliveira'),
('Murilo', 'Ignácio'),
('Marcelo', 'Diament'),
('José', 'Salin'),
('Abraão', 'Mendes'),
('Galvão', 'Bueno'),
('Pablo', 'Duarte'),
('Giulia', 'Prates'),
('Bruna', 'Oliveira');

SELECT * FROM professores;
SELECT * FROM professores WHERE id = 2;
SELECT * FROM professores WHERE id = 5;
SELECT * FROM professores WHERE id < 5;
SELECT * FROM professores WHERE id <= 5;
SELECT * FROM professores WHERE id BETWEEN 2 AND 6;
SELECT * FROM professores WHERE id > 2 AND id < 6;
SELECT * FROM professores WHERE id >= 2 AND id <= 6;

INSERT INTO alunos (nome, sobrenome) VALUES
('Victor', 'Torres'),
('Vinicius', 'Oliveira'),
('Murilo', 'Ignácio'),
('Marcelo', 'Diament'),
('José', 'Salin'),
('Abraão', 'Mendes'),
('Galvão', 'Bueno'),
('Pablo', 'Duarte'),
('Giulia', 'Prates'),
('Bruna', 'Oliveira');

SELECT * FROM alunos;

ALTER TABLE turmas ADD codigo VARCHAR(5);

ALTER TABLE turmas ADD id_cursos INT;

ALTER TABLE turmas ADD FOREIGN KEY (id_cursos) REFERENCES cursos(id);

ALTER TABLE turmas CHANGE id_cursos id_curso INT;

ALTER TABLE turmas ADD id_alunos VARCHAR(100);

ALTER TABLE professores ADD id_turmas INT;

ALTER TABLE professores ADD FOREIGN KEY (id_turmas) REFERENCES turmas(id);

ALTER TABLE professores CHANGE id_turmas id_turma INT;

ALTER TABLE turmas CHANGE id_alunos id_aluno VARCHAR(100);

ALTER TABLE turmas CHANGE id_aluno id_aluno INT;

ALTER TABLE turmas ADD FOREIGN KEY (id_aluno) REFERENCES alunos(id);

SELECT * FROM turmas;

SELECT * FROM alunos;

ALTER TABLE alunos ADD id_professor INT;

ALTER TABLE alunos ADD FOREIGN KEY (id_professor) REFERENCES professores(id);

SELECT * FROM cursos;

UPDATE cursos SET id = 4 WHERE id = 5;

UPDATE cursos SET titulo = 'full stack dev' WHERE id = 4;

SELECT titulo FROM cursos;

SELECT id FROM cursos;

INSERT INTO cursos (id, titulo) VALUES
(0, 'dev web full stack'),
(1, 'dev mobile android'),
(2, 'dev mobile IOS'),
(3, 'ux designer');

SELECT * FROM professores;



/* criar banco de dados */
create database escola;


/* definindo banco de dados em uso */
use escola;


/* criando tabelas */
create table cursos (
	id int primary key not null auto_increment,
    descricao varchar(100)
);
create table professores (
	id int primary key not null auto_increment,
    nome varchar(100),
    sobrenome varchar(100)
);
create table alunos (
	id int primary key not null auto_increment,
    nome varchar(100),
    sobrenome varchar(100)
);
create table turmas (
	id int primary key not null auto_increment,
    codigo varchar(100),
    descricao varchar(100)
);


/* teste */ 
create table teste (
	id int primary key not null auto_increment,
    nome varchar(100)
);
/* adicionando coluna na tabela */
alter table teste add coluna varchar(10);
/* modificando coluna na tabela */
alter table teste modify coluna varchar(100);
alter table teste modify coluna text;
/* alterando o nome da coluna e o seu tipo primitivo */
alter table teste change coluna sobrenome varchar(100);
/* renomear tabela */
alter table teste rename to funcionarios;
/* adicionando coluna na tabela */
alter table funcionarios add idade varchar(10);
/* excluir coluna */
alter table funcionarios drop sobrenome;
/* excluir tabela */
drop table funcionarios;


/* excluir banco de dados */
/* drop database escola; */


/* adicionapndo coluna id_curso para efetuar relacionamento */
alter table turmas add id_curso int(11);

/* efetuando relacionamento */
alter table turmas add foreign key (id_curso) references cursos(id);

create table turmas_alunos_professores (
	id_turmas_alunos_professores int(11) primary key not null auto_increment, 
	id_turma int(11),
	id_aluno int(11), 
	id_professor_generalista int(11),
	id_professor_assistente int(11),
	inicio date,  
	conclusao date,
    foreign key (id_turma) references turmas(id),
    foreign key (id_aluno) references alunos(id),
    foreign key (id_professor_generalista) references professores(id),
    foreign key (id_professor_assistente) references professores(id)
);

/* inserindo registros na tabela cursos */
insert into cursos (descricao) values ('Web Full Stack'), ('Mobile IOS'), ('Mobile Android'), ('UX');

/* inserindo registros na tabela professores */
insert into professores (nome, sobrenome) values
('Victor', 'Torres'),
('Vinicius', 'Oliveira'),
('Murilo', 'Ignácio'),
('Marcelo', 'Diament'),
('José', 'Salin'),
('Abraão', 'Mendes'),
('Galvão', 'Bueno'),
('Pablo', 'Duarte'),
('Giulia', 'Prates'),
('Bruna', 'Oliveira');

/* inserindo registros na tabela alunos */
insert into alunos (nome, sobrenome) values
('Victor', 'Torres'),
('Vinicius', 'Oliveira'),
('Murilo', 'Ignácio'),
('Marcelo', 'Diament'),
('José', 'Salin'),
('Abraão', 'Mendes'),
('Galvão', 'Bueno'),
('Pablo', 'Duarte'),
('Giulia', 'Prates'),
('Bruna', 'Oliveira');

/* inserindo registros na tabela turmas */
insert into turmas (codigo, descricao, id_cursos) values
(0, 'dev web full stack', 1),
(1, 'dev mobile android', 3),
(2, 'dev mobile IOS', 2),
(3, 'ux designer', 4),
(4, 'dev web full stack', 1);

/* alterando o nome da coluna */
alter table turmas_alunos_professores change conclusao data_conclusao date;
alter table turmas_alunos_professores change inicio data_inicio date;

/* inserindo registros na tabela turmas_alunos_professores */
insert into turmas_alunos_professores (
	id_turma,
    id_aluno,
    id_professor_generalista,
    id_professor_assistente,
    data_inicio,
    data_conclusao
    ) values
    (1, 1, 1, 2, now(), now()),
    (2, 2, 3, 4, now(), now()),
    (3, 3, 5, 6, now(), now()),
    (4, 1, 7, 8, now(), now()),
    (5, 4, 1, 2, now(), now()),
    (2, 5, 9, 10, now(), now()
);

/* alterando nome e sobrenome de um determinado registro da tabela professores */
update professores set nome = 'Boris', sobrenome = 'Torres' 
where id = 10;

/* excluindo registro da tabela professores */
insert into professores (nome, sobrenome) values ('sad', 'dsadas');
delete from professores where id = 11;

select * from alunos;

select * from alunos where id = 2;
select * from alunos where id != 2;
select * from alunos where id < 4;
select * from alunos where id > 4;
select * from alunos where id >= 4;
select * from alunos where id <= 4;

select * from professores where id between 2 and 6;

select * from professores where id >= 2 and id <= 6;

select * from turmas where data_inicio between '2021/02/01' and '2021/02/25';

select * from alunos where id in(1, 3, 5, 7);

select * from alunos where id = 1 or id = 2 or sobrenome = 'Moreno';

select * from alunos where id IN(1, 2) OR sobrenome = 'Moreno';
/* A >>> Z */ 
select * from alunos order by nome asc;
/* Z >>> A */
select * from alunos order by nome desc;
/* Z >>> A - PERGAR OS TRES ULTIMOS REGISTROS */
select * from alunos order by id desc limit 3;

select * from alunos where nome like 'L%';

select * from alunos where nome like '_A%';

select * from alunos where nome like '%A%';

select * from cursos;
select * from turmas;

select * from turmas left join cursos on (turmas.id_curso = cursos.id);

select * from turmas right join cursos on (turmas.id_curso = cursos.id);

select * from turmas inner join cursos on (turmas.id_curso = cursos.id);






-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `companies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `address` TEXT NOT NULL,
  `cnpj` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `site` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `galleries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galleries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `companies_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_galleries_companies_idx` (`companies_id` ASC) VISIBLE,
  CONSTRAINT `fk_galleries_companies`
    FOREIGN KEY (`companies_id`)
    REFERENCES `companies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `status` TINYINT NOT NULL DEFAULT 0,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_categories1_idx` (`categories_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `email`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `email` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `profiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `profiles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullname` VARCHAR(45) NOT NULL,
  `phone_id` INT NOT NULL,
  `email_id` INT NOT NULL,
  `profiles_id` INT NOT NULL,
  `companies_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_phone1_idx` (`phone_id` ASC) VISIBLE,
  INDEX `fk_users_email1_idx` (`email_id` ASC) VISIBLE,
  INDEX `fk_users_profiles1_idx` (`profiles_id` ASC) VISIBLE,
  INDEX `fk_users_companies1_idx` (`companies_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_phone1`
    FOREIGN KEY (`phone_id`)
    REFERENCES `phone` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_email1`
    FOREIGN KEY (`email_id`)
    REFERENCES `email` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_profiles1`
    FOREIGN KEY (`profiles_id`)
    REFERENCES `profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_companies1`
    FOREIGN KEY (`companies_id`)
    REFERENCES `companies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `donations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` DECIMAL NOT NULL,
  `products_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_donations_products1_idx` (`products_id` ASC) VISIBLE,
  INDEX `fk_donations_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_donations_categories1_idx` (`categories_id` ASC) VISIBLE,
  CONSTRAINT `fk_donations_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_donations_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_donations_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `companies_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `companies_categories` (
  `companies_id` INT NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`companies_id`, `categories_id`),
  INDEX `fk_companies_has_categories_categories1_idx` (`categories_id` ASC) VISIBLE,
  INDEX `fk_companies_has_categories_companies1_idx` (`companies_id` ASC) VISIBLE,
  CONSTRAINT `fk_companies_has_categories_companies1`
    FOREIGN KEY (`companies_id`)
    REFERENCES `companies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_companies_has_categories_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;