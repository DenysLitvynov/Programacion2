//
// Archivo: APositivoReduce.js
// Descripción: Hacer una función que convierte todos los números de una lista en positivos, utilizando el método de biblioteca .reduce
// Fecha: 12/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> function() -> aPositivo() -> Lista<T2>
//
function aPositivo(array,fnAcomular,acom){
    return array.reduce(fnAcomular,acom);
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarAPositivo(array){
    const res = aPositivo(array, function(elem){
        return acom.push.Math.abs(elem);
    },[])
    for(let i=0;i<arrayRes.length;i++){
        if(arrayRes[i]<0){
            console.log("Esta mal");
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarAPositivo();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------