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

//
// función que deduce si un número es mayor o menor que 0
// R -> esMayorQueCero() -> V/F
//
function esMayorQueCero(num){
    return num>=0;
}//()
  
//-----------------------------------------------
// main()
//-----------------------------------------------
  
var res = esPositivo(-5,esMayorQueCero);
// prueba automática
if(res!=false){
    console.log("Esta mal")
}

//-------------------------------------
//-------------------------------------
//-------------------------------------