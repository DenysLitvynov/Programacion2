-- crearPersona.sql 

create table Persona (
    dni char(9) not null, 
    nombre varchar(20) not null,
    apellidos varchar(90) not null,
    primary key (dni)
);
