create database cloud;
use cloud;

CREATE Table colaborador(
                nome varchar(100) not null,
                dataNasc varchar(15) not null,
                telefone varchar(15) not null, 
                email varchar(100) not null,
                cep varchar(9) not null, 
                logradouro varchar(100) not null,
                numero int not null,
                bairro varchar(100) not null,
                cidade varchar(100) not null,
                uf varchar(2) not null
);

INSERT INTO colaborador (nome, dataNasc, telefone, email, cep, logradouro, numero, bairro, cidade, uf)
VALUES 
('Karen Akemi', '03/10/1983', '(18) 98131-1824', 'karenakemibb@gamil.com', '15015-010', 'Rua Angeolino Caseli', 82, 'Vila Redentora', 'São José do Rio Preto', 'SP'),
('Marcelo Maykon', '19/05/1972', '(18) 98110-4916', 'mykbotelho@hotmail.com', '15015-010', 'Rua Angeolino Caseli', 82, 'Vila Redentora', 'São José do Rio Preto', 'SP'),
('Angela Maria', '26/06/1950', '(14) 98106-0424', 'angelabotelho@gmail.com', '19050-270', 'Rua Pastor Jorge', 1125, 'Jardim Bongiovani', 'Presidente Prudente', 'SP');