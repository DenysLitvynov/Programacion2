//
// Archivo: Capicua.js
// Descripción: Hacer una función que reciba una lista y diga si es capicua
// Fecha: 21/02/2024
// Nombre: Denys Litvynov
//

//
// Lista<N> -> esCapicua() -> V/F
//
function esCapicua(array){
    let cont1 = 0, cont2 = array.length-1, res = false;
    for(let i=0;i<array.length;i++){
        console.log(array[cont1]," ",array[cont2]);
        if(array[cont1]==array[cont2]){
            res = true;
            cont1++;
            cont2--;
        }
    }//for()
    return res;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarEsCapicua(){
    let array = new Array(1,2,2,1);
    let res = esCapicua(array);
    if(res!=true){
        console.log("Esta mal");
    }
}//()

//--------------------------------------------
// main()
//--------------------------------------------

probarEsCapicua();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------