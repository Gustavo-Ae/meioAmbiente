CREATE TABLE estado(
	id serial primary key,
	nome VARCHAR(50) NOT NULL,
	sigla CHAR(2) 
);

INSERT INTO estado(nome, sigla) VALUES('Pará', 'PA');

INSERT INTO estado(nome, sigla) VALUES('Amazonas','AM');

INSERT INTO estado(nome, sigla) VALUES('Acre', 'AC');

INSERT INTO estado(nome, sigla) VALUES('Mato Grosso', 'MT');

SELECT * FROM estado; 

CREATE TABLE projetos(
	id serial primary key, 
	nome VARCHAR(100) NOT NULL,
	descricao VARCHAR(100) NOT NULL, 
	idLocalizacao int,
	areaPreservada_hectare VARCHAR(255) NOT NULL,
	datDeInicio DATE NOT NULL,
	duracao_ano INT NOT NULL, 
	categoria VARCHAR(255) NOT NULL,
	imagem_url VARCHAR(255),
	emissaoReduzida VARCHAR(255) NOT NULL,
	FOREIGN KEY (idLocalizacao) REFERENCES estado(id)
);

ALTER TABLE projetos RENAME imagem TO imagem_url;

UPDATE projetos SET nome = 'Caapii' where projetos.id = 1

UPDATE projetos SET imagem_url='https://drive.google.com/uc?export=view&id=1I9Otl_wJd2u_i2Uhjgd3lCA9bF4xlpov' WHERE projetos.id = 1;

UPDATE projetos SET imagem_url='https://drive.google.com/uc?export=view&id=1pJIo5xfyhWlFHYEX2uDNQDWl4ZGYxeWw' WHERE projetos.id = 2;

UPDATE projetos SET imagem_url='https://drive.google.com/uc?export=view&id=17_oOCTFOfA32TwDkjFzs4_tqwXJLtHQa' WHERE projetos.id = 3;

UPDATE projetos SET imagem_url='https://drive.google.com/uc?export=view&id=1yG9-oO1TVXD7LPPRFDfrS_ijc_0bGuQy' WHERE projetos.id = 4;

UPDATE projetos SET imagem_url='https://drive.google.com/uc?export=view&id=1XlJMJGW27k1EDs85zloC57lUvDWJSSD1' WHERE projetos.id = 6;

SELECT * FROM projetos WHERE projetos.id = 2

SELECT * FROM projetos; 

CREATE TABLE usuarios(
	id serial primary key,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(150) NOT NULL, 
	cpf VARCHAR(14) NOT NULL,	
	senha VARCHAR(255) NOT NULL
)

SELECT * FROM usuarios

SELECT us.nome,us.email,us.cpf FROM usuarios us WHERE us.id = 3

CREATE TABLE investimentos(
	id serial primary key, 
	idUsuario int, 
	idProjeto int, 
	valorInvestido double precision,
	dataInvestimento timestamp DEFAULT NOW(),
	FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
	FOREIGN KEY (idProjeto) REFERENCES projetos(id)
)

SELECT * FROM investimentos

INSERT INTO creditocarbono(idUsuario,idProjeto, emissaoReduzida) VALUES()

CREATE TABLE creditoCarbono(
	id serial primary key,
	dataEmissao timestamp DEFAULT NOW(),
	idProjeto int, 
	idUsuario int, 
	emissaoReduzida VARCHAR,
	FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
	FOREIGN KEY (idProjeto) REFERENCES projetos(id)
)

SELECT COUNT(*) FROM creditoCarbono WHERE creditoCarbono.idusuario = 3

SELECT estado.nome FROM projetos INNER JOIN estado on estado.id = projetos.idlocalizacao
