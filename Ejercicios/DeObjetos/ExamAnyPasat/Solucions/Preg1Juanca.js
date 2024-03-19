//Hecho por Juan Diaz

// ––––––––––––––––––––––––––––-------------------------------------------------------------------------------
//  listaEntero: [Z] ----> cualNumeroslistaSeRepiteMas()-----> objetoDevolver: JSON{numero:Z , rep: N}
// ––––––––––––––––––––––––––––-------------------------------------------------------------------------------
function cualNumeroslistaSeRepitemas(listaEnteros) {
    //1 parte
    let listaEnteros10casillas = listaEnteros.reduce(function (acum, currentValue) {
        acum[currentValue] +=1 //En el acumulador, en la casilla del numero que se corresponde se guarda la repeticion
        return acum;
    }, [0,0,0,0,0,0,0,0,0,0])//Se cierra el reduce primero
    console.log(listaEnteros10casillas)
    //2 parte
    let objetoDevolver = listaEnteros10casillas.reduce(function (acum, currentValue, currentIndex) {
        if (acum.rep<currentValue) {//Comparando el objeto acumulado, las repeticiones, con las repeticiones del primer array devuelto
            acum.rep = currentValue;//Se guarda como mayores repeticones, si la condicion es cierta
            acum.numero = currentIndex;//Se guarda el numero mas repetido por ahora , si lac condicion es cierta
        }
        return acum;//Acumular cada vez
    }, { numero: 0, rep: 0 }); //Se cierra el segundo reduce

    return objetoDevolver; //Devolver objeto con numero mas repetido y sus repeticiones
}


// main()

let listaOutPrueba = [2, 5, 3, 2, 7, 8, 9, 2, 4, 2, 3, 5]; //Lista 1 para hacer la prueba
let listaOutPrueba2 = [1,9,3,2,4,5,9,9,1]// Lista 2 para hacer la prueba

let numeroCorrectoPrueba = 2;
let numeroCorrectoPrueba2 = 9;

let objetoOut = cualNumeroslistaSeRepitemas(listaOutPrueba);
let objetoOut2 = cualNumeroslistaSeRepitemas(listaOutPrueba2);


if (objetoOut.numero === 2 && objetoOut2.numero === 9) {
    console.log("Esta bien")
}
else {
    console.log("Esta mal")
}