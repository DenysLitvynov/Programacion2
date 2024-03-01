//
// función que recibe un numero y devuelve verdadero en el caso de que sea positivo
// R -> esPositivo() -> V/F
//
function esPositivo(num, condicion){
    if(condicion(num)){
      return true;
    }
    return false;
}//()

// prueba automática para la función esPositivo()
function probarEsPositivo(){
    var res = esPositivo(-5,function(num){
        return num>=0;
    });
    if(res!=false){
        console.log("Esta mal")
    }
}
  
//-----------------------------------------------
// main()
//-----------------------------------------------
  
probarEsPositivo();

//-------------------------------------
//-------------------------------------
//-------------------------------------