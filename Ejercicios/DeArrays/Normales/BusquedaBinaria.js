//
// Hacer una función que dada una lista de números y
// un número, encuentre la posición en la que está
// Lista<N> N -> buscar() -> N
//
function buscar(array,num){
    var menor = 0, mayor = array.length;
    while(menor<=mayor){
        var medio = (menor+mayor)/2;
        var estimado = array[medio];
        if(estimado==num){
            return medio;
        }
        if(estimado>num){
            mayor=medio+1;
        }else{
            menor=medio+1;
        }
    }//while()
    return;
}//()

// prueba automática para la función buscar
function probarBuscar(array){
    var res = buscar(array,6);
    if(res!=5){
        console.log("Esta mal");
    }
}

//------------------------------
// main()
//------------------------------

var array = new Array(1,2,3,4,5,6,7,8,9,10);
probarBuscar(array);

//------------------------------
//------------------------------
//------------------------------