//
// Archivo: Persona.js
// Descripción: crear un objeto Persona para prácticar el trabajo con los objetos
// Fecha: 13/03/2024
// Nombre: Denys Litvynov
//

/* 
Crear un objeto:
1.Crea un objeto persona con propiedades como nombre, edad, email, etc.

Acceder a las propiedades:
2.Accede a las propiedades del objeto persona y muestra su valor por consola.

Modificar propiedades:
3.Modifica alguna propiedad del objeto persona (por ejemplo, cambia su edad o email) y muestra el objeto actualizado.

Agregar nuevas propiedades:
4.Agrega una nueva propiedad al objeto persona (por ejemplo, ciudad) y muestra el objeto actualizado.

Eliminar propiedades:
5.Elimina una propiedad del objeto persona (por ejemplo, elimina email) y muestra el objeto actualizado.

Iterar sobre las propiedades:
6.Itera sobre todas las propiedades del objeto persona y muestra cada una de ellas por consola.

Objeto como parámetro:
7.Crea una función que acepte un objeto usuario como parámetro y muestre alguna información sobre él.

Arrays de objetos:
8.Crea un array de objetos llamado usuarios, donde cada objeto representa a una persona con propiedades como nombre, edad, etc.

Acceder a objetos en un array:
9.Accede a un objeto específico dentro del array usuarios y muestra alguna de sus propiedades.

Agregar objetos al array:
10.Agrega un nuevo objeto al array usuarios y muestra el array actualizado.

Eliminar objetos del array:
11.Elimina un objeto específico del array usuarios y muestra el array actualizado.

Buscar objetos por propiedad:
12.Crea una función que acepte un parámetro (por ejemplo, nombre) y busque si hay algún usuario en el array usuarios con ese nombre.
*/ 

// 1.Creacion del objeto Persona
var unaPersona = {
    nombre : "JuanBa",
    edad : 29,
    email : "magraenelshomens1995@gmail.com"
}

// 2.Accedemos a las propiedades del objeto mostrandolas en pantalla
console.log(unaPersona.nombre);
console.log(unaPersona.edad);
console.log(unaPersona.email);

// 3.Modificamos las propiedades del objeto
unaPersona.edad = 72;
unaPersona.nombre = "JuanBaPeris"
// mostramos los valores otra vez para ver los cambios 
console.log(unaPersona.edad," ", unaPersona.nombre);

// 4.Agregamos propiedades nuevas a nuestro objeto
unaPersona.direccion = "Carrer del subnormal 55";
// mostramos la nueva propiedad por consola
console.log(unaPersona.direccion);

// 5.Eliminamos una propiedad
delete unaPersona.direccion;
// verificamos que se haya eliminado 
console.log(unaPersona.direccion);

// 6.Iteramos por todas las propiedades del objeto 
function iterar(){
    for(let propiedad in unaPersona){
        console.log(propiedad + ": " +  unaPersona[propiedad]);
    }// for
}// ()
iterar();

// 7.Creamos un objeto Usuario y una función a la que se lo pasamos como parametro
var usuario = {
    Nombre: "Juan-Bautista",
    Apellido: "Peris Fonestad",
    Edad: 29,
    Email: "melesmenjetotes@gmail.com"
}

function mostrarInfoDelUsuario(usuario){
    for(let propiedad in usuario){
        console.log(propiedad + ": " + usuario[propiedad])
    }// for
}// ()
mostrarInfoDelUsuario(usuario);

// 8.Creamos un array de objetos usuarios
var usuarios = [
    {nombre: "pau", edad: 50},
    {nombre: "ariel", edad: 51},
    {nombre: "pablo", edad: 52}
];

// 9. Accedemos a algun objeto concreto dentro del array y mostramos una de sus propiedades
console.log(usuarios[0].nombre);

// 10. Agregamos un objeto nuevo a nuestro array de objetos y mostramos el resultado
var otroUsuario = {
    nombre: "ta mare la molt guarra",
    edad: 53
}
usuarios.push(otroUsuario);
console.log(usuarios);

// 11. Eliminamos un elemento del array 
usuarios.splice(2,1); // el primer elemento indica desde que casilla queremos empezar a eliminar elementos y el segundo la cantidad de elementnos que queremos eliminar
console.log(usuarios);

// 12. Recorremos el array de usuarios para buscar uno concreto por su nombre
function buscarUsuariosPorNombre(listaUsuarios,nombre){
    for(let i=0;i<usuarios.length;i++){
        if(listaUsuarios[i].nombre === nombre){
            return listaUsuarios[i]
        }
    }// for
    return null;
}// ()
var resultado = buscarUsuariosPorNombre(usuarios,"pau");
console.log(resultado);

// 13. Utilizamos for of para recorrer el array de objetos usuarios
var usuariosDos = [
    {nombre: "tamare", edad: 45},
    {nombre: "tonpare", edad: 46},
    {nombre: "tontio", edad: 47},
]

function iterarDos(usuariosDos){
    for(let usuario of usuariosDos){
        for(let propiedad in usuario){
            console.log(propiedad + ": " + usuario[propiedad]);
        }// for in
    }// for of
}// ()
iterarDos(usuariosDos);

// 14. Utilizamos forEach para recorrer el array de objetos usuarios
var usuariosTres = [
    {nombre: "for in", nivel: 1},
    {nombre: "for of", nivel: 2},
    {nombre: "forEach", nivel: 3},
]

usuariosTres.forEach(function(usuario){
    for(let propiedad in usuario){
        console.log(propiedad + ": " + usuario[propiedad]);
    }// for in
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------