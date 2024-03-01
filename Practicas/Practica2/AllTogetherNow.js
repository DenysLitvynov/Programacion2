//
// Archivo: AllTogetherNow.js
// Descripción: Utilizando las anteriores funciones filtrar(), mapear() y reducir(); 
// escribe trozos de código que, a partir de esta lista de palabras
// Fecha: 01/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T> (T -> V/F) -> filtrar() -> Lista<T>
//
function filtrar(array,condicion){
    const resultado = [];
    for(let i = 0; i < array.length; i++){
        if(condicion(array,i)){
            resultado.push(array[i]);
        }
    }// for
    return resultado;
}// ()

//--------------------------------------------
//--------------------------------------------

//
// Lista<T1> (T1->T2) -> mapear() -> Lista<T2>
//
function mapear(array,transformar){
    const resultado = [];
    for(let i = 0; i<array.length; i++){
        resultado[i] = transformar(array,i);
    }// for
    return resultado;
}// ()

//--------------------------------------------
//--------------------------------------------

//
// Lista<T1> T2 T2,T1->T2 -> reducir() -> T2
//
function reducir(array,operacion){
    let res = 0;
    for(let i = 0; i<array.length; i++){
        res = operacion(array,res,i);
    }// for
    return res;
}// ()

//--------------------------------------------
// 1. obtenga una nueva lista con cada palabra escrita del revés
//--------------------------------------------
function invertirPalabras(palabra,iter){
    let palabraInvertida = '';
    for(let i = palabra[iter].length - 1; i>=0; i--){
        palabraInvertida += palabra[iter].charAt(i);
    }// for
    return palabraInvertida;
}// ()

// prueba automática para la función invertirPalabras()
function probarInvertirPalabras(palabras){
    const res = mapear(palabras,invertirPalabras);
    let arrayPrueba = ["sE", "aroha", "ut", "dadinutropo", "arap", "rahcevorpa", "etse", "aíd"];
    for(var i=0;i<res.length;i++){
        //console.log(res[i], " ", arrayPrueba[i]);
        if(res[i]!==arrayPrueba[i]){
            console.log("Ejercicio 1 está mal");
            break;
        }
    } //for()
}// ()

//--------------------------------------------
// 2. calcule el total de caracteres de la frase completa
//--------------------------------------------
function calcularCaracteres(palabras){
    const caracteres = mapear(palabras,function(a,e){
        return a[e].length;
    });
    const res = reducir(caracteres,function(arr,result,i){
        result+=arr[i];
        return result;
    }) //())
    return res;
}// ()

// prueba automática para la función calcularCaracteres()
function probarCalcularCaracteres(palabras){
    const res = calcularCaracteres(palabras);
    //console.log(res);
    if(res != 41){
        console.log("Ejercicio 2 está mal")
    }
}// ()

//--------------------------------------------
// 3. calcule cuántas palabras tienen más de 5 letras
//--------------------------------------------
function filtrarMasLargas(palabras){
    const res = filtrar(palabras,function(array,e){
        if(array[e].length>5){
            return true;
        }
        return false;
    }) //()
    return res;
}

// prueba automática para la función filtrarMasLargas()
function probarFiltrarMasLargas(palabras){
    const res = filtrarMasLargas(palabras);
    //console.log(res);
    if(res.length!=2){
        console.log("Ejercicio 3 está mal");
    }
}

//--------------------------------------------
// 4. obtenta una palabra que sea la concatenación de aquéllas con 3 letras o menos.
//--------------------------------------------
function filtrarYConcatenar(palabras){
    const cortas = filtrar(palabras,function(array,e){
        if(array[e].length<=3){
            return true;
        }
        return false;
    }) //()
    const res = reducir(cortas,function(arr,result,i){
        if (i === 0) {
            result = arr[i];
        } else {
            result += arr[i];
        }
        return result;
    }) //()
    return res;
}// ()

function probarFiltrarYConcatenar(palabras){
    const res = filtrarYConcatenar(palabras);
    //console.log(res);
    if(res !== 'Estudía'){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

function main(){
    var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];
    probarInvertirPalabras(palabras);
    probarCalcularCaracteres(palabras);
    probarFiltrarMasLargas(palabras);
    probarFiltrarYConcatenar(palabras);
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------