//
// Archivo: Cola.js
// Descripción: Diseña, implementa y prueba un objeto cola
// Fecha: 14/03/2024
// Nombre: Denys Litvynov
//

//
// Objeto Cola
//
function Cola(){

    // declaramos el array que representara la cola 
    this.cola = [];

    // elemento:R -> encolar()
    this.encolar = function(elemento){
        return this.cola.push(elemento);
    },

    // desencolar()
    this.desencolar = function(){
        return this.cola.shift();
    },

    // desencolar() -> elemento:R
    this.principio = function(){
        return this.cola[0];
    },

    // estaVacia() -> V/F
    this.estaVacia = function(){
        if(this.cola.length===0){
            return true;
        }
        return false;
    },

    // tamano() -> tamano: N
    this.tamano = function(){
        return this.cola.length;
    },

    // vaciar() 
    this.vaciar = function(){
        return this.cola.splice(0,this.cola.length);
    }

}

//--------------------------------------------
//--------------------------------------------

// prueba automática para el método estaVacia()
function probarEstaVacia(Cola){
    if(Cola.estaVacia()!=true){
        console.log("Esta mal estaVacia()");
    }
}// ()

// pruebas automáticas para los métodos encolar()
function probarEncolar(Cola){
    Cola.encolar(5);
    if(Cola.principio()!=5 || Cola.tamano() != 1){
        console.log("Esta mal apilar() 1");
    }
    Cola.encolar(10);
    Cola.encolar(15);
    if(Cola.principio()!=5 || Cola.tamano() != 3){
        console.log("Esta mal apilar() 2");
    }
}// ()

// pruebas automáticas para los métodos desencolar()
function probarDesencolar(Cola){
    Cola.desencolar();
    if(Cola.principio()!=10 || Cola.tamano() != 2){
        console.log("Esta mal desapilar() 1");
    }
    Cola.desencolar();
    if(Cola.principio()!=15 || Cola.tamano() != 1){
        console.log("Esta mal desapilar() 2");
    }
}// ()

// prueba automática para probar principio()
function probarPrincipio(Cola){
    if(Cola.principio() != 15){
        console.log("Esta mal principio()");
    }
}// ()

// prueba automática para probar tamano()
function probarTamano(Cola){
    if(Cola.tamano()!=1){
        console.log("Esta mal tamano()");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const Cola1 = new Cola();
probarEstaVacia(Cola1);
probarEncolar(Cola1);
probarDesencolar(Cola1);
probarPrincipio(Cola1);
probarTamano(Cola1);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------