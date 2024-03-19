//
// Archivo: Pila.js
// Descripción: Diseña, implementa y prueba un objeto pila
// Fecha: 13/03/2024
// Nombre: Denys Litvynov
//

//
// Objeto Pila
//
var Pila = {

    // declaramos el array que representara la pila
    pila: [],

    // elemento:R -> apilar()
    apilar: function(elemento){
        return this.pila.push(elemento);
    },

    // desapilar()
    desapilar: function(){
        return this.pila.pop();
    },

    // estaVacio() -> V/F
    estaVacia: function(){
        if(this.pila.length===0){
            return true;
        }
        return false;
    },

    // cima() -> elemento:R
    cima: function(){
        return this.pila[this.pila.length-1];
    },

    // tamano() -> tam: N
    tamano: function(){
        return this.pila.length;
    },

    // vaciar()
    vaciar: function(){
        return this.pila.splice(0,this.pila.length);
    }
}// obj


//--------------------------------------------
// main()
//--------------------------------------------

// Prueba automática para la función estaVacia()
if(Pila.estaVacia() != true){
    console.log("estaVacia esta mal")
}

// Prueba automática para la función tamano()
if(Pila.tamano() != 0){
    console.log("tamano esta mal")
}

// Prueba automática para la función apilar()
Pila.apilar(5);
Pila.apilar(10);
Pila.apilar(15);
if(Pila.estaVacia() != false || Pila.tamano() != 3){
    console.log("apilar esta mal")
}

// Prueba automática para la función desapilar()
Pila.desapilar();
if(Pila.estaVacia() != false || Pila.tamano() != 2){
    console.log("desapilar esta mal")
}

// Prueba automática para la función cima()
if(Pila.cima() != 10){
    console.log("cima esta mal")
}

// Prueba automática para la función vaciar()
Pila.vaciar();
if(Pila.tamano() != 0 || Pila.estaVacia() != true){
    console.log("vaciar esta mal")
}

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------