Create database aula;

create table usuario(
id int not null auto_increment,
nome varchar (50) null default null,
senha varchar (50) null default null,
primary key (id)
);
