-- crearMatricula.sql

create table Matricula (
    dni char(9) not null,
    codigo varchar(10) not null,
    foreign key (dni) references Persona(dni),
    foreign key (codigo) references Asignatura(codigo),
    primary key (dni,codigo)
);