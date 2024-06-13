Orientações para utilização

Baixar o container do DockerHub:
docker push karenakemi/karen:0.0.1

Para criar o banco de dados, rode os comandos abaixo:
docker run -d --name my_mysql -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=cloud mysql?latest

Após a criação, comande:
docker exec -it my_mysql mysql -u root -p123456 cloud

Realize os comandos para criar a tabela e preenche-las:
CREATE Table Colaborador(
               codColaborador integer auto_increment not null unique key,
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

INSERT INTO colaborador (cpf, nome, dataNasc, telefone, email, cep, logradouro, numero, bairro, cidade, uf)
VALUES 
('Karen Akemi', '03/10/1983', '(18) 98131-1824', 'karenakemibb@gamil.com', '15015-010', 'Rua Angeolino Caseli', 82, 'Vila Redentora', 'São José do Rio Preto', 'SP'),
('Marcelo Maykon', '19/05/1972', '(18) 98110-4916', 'mykbotelho@hotmail.com', '15015-010', 'Rua Angeolino Caseli', 82, 'Vila Redentora', 'São José do Rio Preto', 'SP'),
('Angela Maria', '26/06/1950', '(14) 98106-0424', 'angelabotelho@gmail.com', '19050-270', 'Rua Pastor Jorge', 1125, 'Jardim Bongiovani', 'Presidente Prudente', 'SP');

Verifique a tabela:
SELECT * FROM colaborador;

Saia do terminal query:
exit

Executando a aplicação:docker   
docker run -p 3004:3004 -e DB_HOST=172.17.0.5 --name karenativ karenakemi/karenativ

Acesse http://localhost:3000

End-points:
/liveness
/readiness
/consulta-cadastro

Repositório da aplicação: https://github.com/kaakemi/karen.git
DockerHub da aplicação: https://hub.docker.com/repository/docker/karenakemi/karen