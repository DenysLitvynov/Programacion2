//
// Archivo: Cola.js
// Descripción: Diseña, implementa y prueba un objeto cola
// Fecha: 13/03/2024
// Nombre: Denys Litvynov
//

//
// Objeto Cola
//
var Cola = {
    // declaramos el array que representara la cola 
    cola: [],

    // elemento:R -> encolar()
    encolar: function(elemento){
        return this.cola.push(elemento);
    },

    // desencolar()
    desencolar: function(){
        return this.cola.shift();
    },

    // desencolar() -> elemento:R
    principio: function(){
        return this.cola[0];
    },

    // estaVacia() -> V/F
    estaVacia: function(){
        if(this.cola.length===0){
            return true;
        }
        return false;
    },

    // tamano() -> tamano: N
    tamano: function(){
        return this.cola.length;
    },

    // vaciar() 
    vaciar: function(){
        return this.cola.splice(0,this.cola.length);
    }
}// obj

//--------------------------------------------
// main()
//--------------------------------------------

// Prueba automática para la función estaVacia()
if(Cola.estaVacia() != true){
    console.log("estaVacia esta mal")
}

// Prueba automática para la función tamano()
if(Cola.tamano() != 0){
    console.log("tamano esta mal")
}

// Prueba automática para la función encolar()
Cola.encolar(5);
Cola.encolar(10);
Cola.encolar(15);
if(Cola.estaVacia() != false || Cola.tamano() != 3){
    console.log("apilar esta mal")
}

// Prueba automática para la función desencolar()
Cola.desencolar();
if(Cola.estaVacia() != false || Cola.tamano() != 2){
    console.log("desapilar esta mal")
}

// Prueba automática para la función principio()
if(Cola.principio() != 10){
    console.log("cima esta mal")
}

// Prueba automática para la función vaciar()
Cola.vaciar();
if(Cola.tamano() != 0 || Cola.estaVacia() != true){
    console.log("vaciar esta mal")
}

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------