//--------------------------------------------------
// node 01.3-mainUsoBasicoArray.js
//--------------------------------------------------

//--------------------------------------------------
// main ()
//--------------------------------------------------

console.log (" -- 1 ----------------- ")
//
// splice: elimina (posicion, cuantos elementos)
//
var array = [ 1, 22, 333, 4444, 55555]

var eliminados = array.splice(1,3)

console.log( array )
console.log( eliminados )

console.log (" -- 2 ----------------- ")
//
// splice:
// elimina e inserta = sustitye (posicion, cuantos elementos, nuevos)
//
array = [ 1, 22, 333, 4444, 55555]

eliminados = array.splice(2, 2, 888, 999)

console.log( array )
console.log( eliminados )

console.log (" -- 3 ----------------- ")
//
// splice:
// inserta (si cuantos==0 no eliminia) 
//
array = [ 1, 22, 333, 4444, 55555]

eliminados = array.splice(2, 0, 888, 999)

console.log( array )
console.log( eliminados )

console.log (" -- 4 ----------------- ")
//
// slice: no cambia el original
// devuelve lo seleccionado: [inicio, fin[
//
array = [ 1, 22, 333, 4444, 55555]

nuevo = array.slice(2,4)

console.log( array )
console.log( nuevo )
