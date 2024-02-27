//
// Función que recibe un número y calcula el sumatorio hasta ese numero (sin bucle)
// N -> sumatorioSinBucle() -> N
//
function sumatorioSinBucle(num){
    return num*(num+1)/2;
}//()

//-------------------------------------------------------------
//-------------------------------------------------------------

//
// Función que recibe un número y calcula el sumatorio hasta ese numero (con bucle)
// N -> sumatorioConBucle() -> N
//
function sumatorioConBucle(num){
    var res=0;
    for(var i=1; i<=num; num){
        res+=i;
    }
    return res;
}//()

//-------------------------------------------------------------
//-------------------------------------------------------------

//
// Función que recibe un número y calcula el sumatorio solo de numeros pares hasta ese numero
// N -> sumatorioPares() -> N
//
function sumatorioPares(num){
    var res=0;
    for(var i=0;i<=num; i+2){
        res+=i;
    }
    return res;
}//()

//-------------------------------------------------------------
// main ()
//-------------------------------------------------------------

// prueba automática para sumatorioSinBucle()
if(sumatorioSinBucle(3)!=6){
    console.log("Esta mal sin bucle");
}

// prueba automática para sumatorioConBucle()
if(sumatorioConBucle(3)!=6){
    console.log("Esta mal con bucle");
}

// prueba automática para sumatorioPares()
if(sumatorioPares(6)!=12){
    console.log("Esta mal con bucle");
}

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------