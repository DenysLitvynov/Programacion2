//
// Archivo: APositivoFCP
// Descripción: Hacer una función que convierte todos los números de una lista en positivos, pasandole otra función como parametro
// Fecha: 04/03/23
// Nombre: Denys Litvynov
//

//
// Lista<T1> (T1->T2) -> mapear() -> Lista<T2>
//
function aPositivo(array,transformar){
    const resultado = [];
    for(let i = 0; i<array.length; i++){
        if(array[i]<0){
            resultado[i] = transformar(array,i);
        }
    }// for
    return resultado;
}// ()

// Prueba automática para la función
function probarMapear(){
    const array = [-1,-2,-3,-4,-5];
    const res = aPositivo(array, function(arr,i){
        return arr[i]*-1;
    });
    const arrayPrueba = [13,2,3,4,5];
    for(let i = 0; i<res.length; i++){
        //console.log(res[i], " ", arrayPrueba[i]);
        if(res[i] != arrayPrueba[i]){
            console.log("Esta mal");
        }
    }// for
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 

//--------------------------------------------
// main()
//--------------------------------------------



//--------------------------------------------
//--------------------------------------------
//--------------------------------------------