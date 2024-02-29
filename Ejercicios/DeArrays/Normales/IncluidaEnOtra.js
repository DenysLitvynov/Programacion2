//
// Archivo: IncluidaEnOtra.js
// Descripción: hacer una función que se le pasen dos listas y 
// nos diga si la primera está estrictamente incluida en la segunda
// Fecha: 21/02/2024
// Nombre: Denys Litvynov
//

//
// Lista<N> Lista<N> -> estaIncluida() -> V/F
//
function estaIncluida(array1,array2){
    let res = false;
    let contador = 0;
    for(let i=0;i<array1.length;i++){
        if(array1[i]==array2[0]){ // si no coincide el primer elemento, no esta incluido
            contador = i;
            for(let j=0;j<array2.length;j++){
                //console.log(array1[contador]," ",array2[j]);
                if(array1[contador]==array2[j]){ // comparamos desde el primero que ha coincidido
                    res = true;
                    contador++;
                }else{
                    res = false;
                }
            }//for.interior()
        }
    }//for.exterior()
    //console.log(res)
    return res;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarEstaIncluida(){
    const array1 = new Array(1,2,3,4,5,7);
    const array2 = new Array(3,4,5);
    let res = estaIncluida(array1,array2);
    if(res!=true){
        console.log("Esta mal");
    }
}

//--------------------------------------------
// main()
//--------------------------------------------

probarEstaIncluida();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
