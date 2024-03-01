//
// función que recibe un número y lo multiplica por 3
// N -> porTres() -> N
//
function porTres(num,cb){
    var res = num * 3;
    cb(res);
}// ()
  
// prueba automática para la función porTres()
function probarPorTres(){
    var res = porTres(3,function(res){ 
        if(res!=9){
            console.log("Esta mal")
        }
    });
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarPorTres();
  
//-------------------------------------
//-------------------------------------
//-------------------------------------