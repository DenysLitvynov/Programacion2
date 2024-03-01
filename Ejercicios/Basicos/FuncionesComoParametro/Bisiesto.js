//
// función que devuelve verdadero si un año es bisiesto
// N -> esBisiesto() -> V/F
//
function esBisiesto(anyo,condicion1,condicion2){
    var bisiesto=true;
    bisiesto=condicion1(anyo,bisiesto);
    bisiesto=condicion2(anyo,bisiesto);
    return bisiesto;
}//()

// prueba automática para la función
function probarEsBisiesto(){
    var res = esBisiesto(2024,function(e,b){
        if(e%4!=0){
            b=false;
        }
        return b;
    },function(o,b){
        if(o%100==0 && o%400!=0){
            b=false;
        }
        return b;
    })
    
    if(res!=true){
        console.log("Esta mal");
    }
}

//-------------------------------------------
// main()
//-------------------------------------------

probarEsBisiesto();

//-------------------------------------------
//-------------------------------------------
//-------------------------------------------