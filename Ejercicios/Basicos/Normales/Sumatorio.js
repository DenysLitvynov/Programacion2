//
// Función que recibe un número y calcula el sumatorio hasta ese numero (sin bucle)
// N -> sumatorioSinBucle() -> N
//
function sumatorioSinBucle(num){
    return num*(num+1)/2;
}//()

// prueba automática para sumatorioSinBucle()
function probarSumatorioSinBucle(){
    if(sumatorioSinBucle(3)!=6){
        console.log("Esta mal sin bucle");
    }
}//()

//-------------------------------------------------------------
//-------------------------------------------------------------

//
// Función que recibe un número y calcula el sumatorio hasta ese numero (con bucle)
// N -> sumatorioConBucle() -> N
//
function sumatorioConBucle(num){
    var res=0;
    for(let i=1; i<=num; i++){
        res+=i;
    }// for
    return res;
}//()

// prueba automática para sumatorioConBucle()
function probarSumatorioConBucle(){
    if(sumatorioConBucle(3)!=6){
        console.log("Esta mal con bucle");
    }
}//()

//-------------------------------------------------------------
//-------------------------------------------------------------

//
// Función que recibe un número y calcula el sumatorio solo de numeros pares hasta ese numero
// N -> sumatorioPares() -> N
//
function sumatorioPares(num){
    var res=0;
    for(let i=0;i<=num; i+=2){
        res+=i;
    }// for
    return res;
}//()

// prueba automática para sumatorioPares()
function probarSumatorioPares(){
    if(sumatorioPares(6)!=12){
        console.log("Esta mal con bucle");
    }
}//()

//-------------------------------------------------------------
// main ()
//-------------------------------------------------------------

probarSumatorioSinBucle();
probarSumatorioConBucle();
probarSumatorioPares();

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------