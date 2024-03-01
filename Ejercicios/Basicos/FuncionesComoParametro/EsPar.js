//
// Función que recibe un numero y devuelve verdadero si es par
// N -> esPar() -> V/F
//
function esPar(num,condicion){
    if(condicion(num)){
        return true;
    }
    return false;
}//()

// prueba automática para la función esPar()
function probarEsPar(){
    var res = esPar(2,function(num){
        if(num%2===0){
            return true;
        }
        return false;
    });
    if(res!=true){
        console.log("Esta mal");
    }//()
}

//-------------------------------------
// main()
//-------------------------------------

probarEsPar();

//-------------------------------------
//-------------------------------------
//-------------------------------------