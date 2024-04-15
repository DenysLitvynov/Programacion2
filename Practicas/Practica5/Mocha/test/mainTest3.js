//
// Archivo: mainTest2.js
// Descripción: test 2
// Fecha: 15/04/2024
// Nombre: Denys Litvynov
//

const Punto = require("../Punto");
const assert = require("assert");

//Comienza la prueba con el describe()
describe("Prueba de diferencia()", () => {
    var p1 = new Punto(3, 4);
    var p2 = new Punto(2, 1);
    // ––––––––––––––––––––-
    before(function (hecho) {
        console.log("esto ocurre antes de los it(), comienzan las pruebas");
        hecho(); // llamo a esta funcion para seguir
    });
    // ––––––––––––––––––––-
    // it(): test concreto
    it("la diferencia de p1 y p2 es", function (hecho) {
        // Esta es la comprobación:
        assert.deepEqual(p1.diferencia(p2), { x: 1, y: 3 });
        hecho();
    }); // it
    // ––––––––––––––––––––-
    // it(): test concreto
    it("la diferencia de p1 y p3 es", function (hecho) {
        // Esta es la comprobación:
        assert.deepEqual(p2.diferencia(p1), { x: -1, y: -3 });
        hecho();
    }); // it

    // ––––––––––––––––––––-
    after(function () {
        console.log("esto ocurre después de los it(), acaban las pruebas");
    });
});


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------