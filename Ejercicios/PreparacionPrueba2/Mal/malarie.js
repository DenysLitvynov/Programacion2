/*=================================================================
Ariel Bejaran
GTI
Examen 1
Problema 2
=================================================================*/
function mapear(elementos,funcion){

    let res=[];// Array vacio
    
    for (let index = 0; index < elementos.length; index++) {
    
        res.push(funcion(elementos[index]));//Aplica la funcion para cada elemento del array.
        
    }
    return res;
    }
///*=================================================================  

//Diseña una funcion que reciba una lista de xs numeros reales y un polinomio y devuelva el valor del 
//polinomio por cada numero de xs.

//Lista<R>,R---->polinomio()-->R
function polinomio_valor(coeficientes,x){
    let resultado = 0;
    for (let i = 0; i < coeficientes.length; i++) {
        let potencia = 1; // Inicializamos potencia dentro del bucle para que comience desde 1 en cada iteración
        for (let j = 0; j < i; j++) {
            potencia *= x; // Si tenemos 4^3, aquí potencia se actualizará como 4*4*4
        }
        resultado += coeficientes[i] * potencia;
    }
    return resultado;
}

//Lista<R>,Lista<R>---->polinomio()-->Lista<R>
function polinomio_valores_diferentes(listaX,polinomio){

  let resX= mapear(listaX,function(x){
    for (let index = 0; index < polinomio.length; index++) {
        return polinomio_valor(polinomio,x);
    }
  })
  return resX;
}
//=====================================
//MAIN
//=====================================

let lista_P=[-1, 2, 3]//-1+2x+3x^2
let lista_X=[0,1, 2, 3, 4];
let lista_correcta=[ -1, 4, 15, 32, 55 ];

let res= polinomio_valores_diferentes(lista_X,lista_P);

for (let i = 0; i < lista_correcta.length; i++) {
    if (res[i]!=lista_correcta[i]) {
        console.log("mal");
    }  
}