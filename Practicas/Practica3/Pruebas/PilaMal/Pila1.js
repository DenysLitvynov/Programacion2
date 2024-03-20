//
// Archivo: Pila1.js
// Descripción:  Diseña, implementa y prueba un objeto pila (consultar Pila) con operaciones apilar(), desapilar() y cima().
// Con la sintaxis de un objeto literal
// Fecha: 06/03/2024
// Nombre: Denys Litvynov
//

//
// Objeto Pila
//
const Pila = {
    // declaración del atributo utilizando un array
    pila : [],

    // estaVacia() -> V/F
    estaVacia: function(){
        return this.pila.length === 0;
    },

    // elem:R -> apilar()
    apilar: function(elemento){
        this.pila.push(elemento);
    },

    // desapilar()
    desapilar: function(){
        if(this.estaVacia()){
            return;
        }
        return this.pila.pop();
    },

    // cima() -> elem:R 
    cima: function(){
        if(this.estaVacia()){
            return;
        }
        return this.pila[this.pila.length-1];
    },

    // tamano() -> tam:R
    tamano: function(){
        return this.pila.length;
    }
}// obj

//--------------------------------------------
//--------------------------------------------

// prueba automática para el método estaVacia()
function probarEstaVacia(){
    if(Pila.estaVacia()!=true){
        console.log("Esta mal estaVacia()");
    }
}// ()

// pruebas automáticas para los métodos apilar()
function probarApilar(){
    Pila.apilar(5);
    if(Pila.cima()!=5 || Pila.tamano() != 1){
        console.log("Esta mal apilar() 1");
    }
    Pila.apilar(10);
    Pila.apilar(15);
    if(Pila.cima()!=15 || Pila.tamano() != 3){
        console.log("Esta mal apilar() 2");
    }
}// ()

// pruebas automáticas para los métodos desapilar()
function probarDesapilar(){
    Pila.desapilar();
    if(Pila.cima()!=10 || Pila.tamano() != 2){
        console.log("Esta mal desapilar() 1");
    }
    Pila.desapilar();
    if(Pila.cima()!=5 || Pila.tamano() != 1){
        console.log("Esta mal desapilar() 2");
    }
}// ()

// prueba automática para probar cima()
function probarCima(){
    if(Pila.cima() != 5){
        console.log("Esta mal cima()");
    }
}// ()

// prueba automática para probar tamano()
function probarTamano(){
    if(Pila.tamano()!=1){
        console.log("Esta mal tamano()");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarEstaVacia();
probarApilar();
probarDesapilar();
probarCima();
probarTamano();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------