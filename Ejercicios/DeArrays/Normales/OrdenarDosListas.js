//
// Archivo: OrdenarDosListas.js
// Descripción: hacer una función que se le pasen dos listas ordenadas y nos devuelva 
// una tercera lista ordenada con todos los elementos de las dos listas anteriores
// Fecha: 21/02/2024
// Nombre: Denys Litvynov
//

//
// Lista1<R> Lista2<R> -> ordenarDosListas() -> Lista3<R>
//
function ordenarDosListas(array1,array2){
    let cont1 = 0, cont2 = 0;
    let res = new Array();
    while (cont1 < array1.length && cont2 < array2.length) {
        if (array1[cont1] <= array2[cont2]) {
            res.push(array1[cont1]);
            cont1++;
        } else { 
            res.push(array2[cont2]);
            cont2++;
        }
    }
    while (cont1 < array1.length) {
        res.push(array1[cont1]);
        cont1++;
    }
    while (cont2 < array2.length) {
        res.push(array2[cont2]);
        cont2++;
    }
    return res;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarOrdenarDosListas(){
    let array1 = new Array(1,3,5);
    let array2 = new Array(2,4,6);
    let arrPrueba = new Array(1,2,3,4,5,6);
    let res = ordenarDosListas(array1,array2);
    for(let i=0;i<res.length;i++){
        console.log(res[i]);
        if(res[i]!=arrPrueba[i]){
            console.log("Esta mal");
        }
    }//for()
}//()

//--------------------------------------------
// main()
//--------------------------------------------

probarOrdenarDosListas();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------