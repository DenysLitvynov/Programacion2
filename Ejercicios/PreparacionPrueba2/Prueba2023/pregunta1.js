//
// Archivo: pregunta1.js
// Descripción: ----
// Fecha: 22/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// numeros:N -> encontrarMasRepetido() -> masRepetido{numero: N, repeticiones: N}
//--------------------------------------------
function encontrarMasRepetido(numeros){
    let repeticiones = numeros.reduce(function(acum,elem){
        acum[elem] += 1;
        return acum; 
    }, [0,0,0,0,0,0,0,0,0,0])
    let masRepetido = repeticiones.reduce(function(acum,elem, index){
        if(acum.repeticiones < elem){
            acum.numero = index;
            acum.repeticiones = elem;
        }
        return acum;
    },{numero: 0, repeticiones: 0})
    console.log(masRepetido);
    return masRepetido;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarEncontrarMasRepetido(numeros, esperado){
    const resultado = encontrarMasRepetido(numeros);
    if(resultado.numero !== esperado.numero || resultado.repeticiones !== esperado.repeticiones){
        console.log("La función encontrarMasRepetido() está mal")
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

function main(){
    const numeros = [0,1,2,3,4,4,4,4,5,6,7,8,9]
    const esperado = {numero: 4, repeticiones: 4};
    probarEncontrarMasRepetido(numeros,esperado);
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------