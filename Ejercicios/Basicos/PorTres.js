//
// función que recibe un número y lo multiplica por 3
// N -> porTres() -> N
//
function porTres(num){
    return num * 3;
}// ()
  
//
// función que devuelve un resultado utilizanod un callback
//
function devolverResultado(callback){
    return callback(3);
}//()

//--------------------------------------------
// main()
//--------------------------------------------

var res = devolverResultado(porTres);
if(res!=9){
    console.log("Esta mal");
}
  
//-------------------------------------
//-------------------------------------
//-------------------------------------