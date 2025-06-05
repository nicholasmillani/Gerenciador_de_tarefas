CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR, 
    email VARCHAR,
    senha VARCHAR
);

CREATE TABLE categorias(
    id SERIAL PRIMARY KEY,
    nome_categoria VARCHAR
);

CREATE TABLE prioridade(
    id SERIAL PRIMARY KEY,
    prioridade TEXT NOT NULL
);

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    nome_task VARCHAR,
    descricao VARCHAR,
    finalizada BOOLEAN DEFAULT FALSE,
    prioridade_id INTEGER REFERENCES prioridade(id),
    data_criacao TIMESTAMP,
    prazo DATE,
    usuarios_id INTEGER REFERENCES usuarios(id),
    categoria_id INTEGER REFERENCES categorias(id)
);

