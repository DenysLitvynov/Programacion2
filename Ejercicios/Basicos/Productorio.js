//
// función que recibe un numero y calcula el productorio desde ese numero hasta 1 
// R -> productorio() -> R
//
function productorio(num,callback){
    if (num < 0) {return 0;} 
    else if (num === 0) {return 1;} 
    else {
        var res = callback(num,res);
        return res;
    }
} //()

//------------------------------
// main()
//------------------------------

var result = productorio(4,function(num,e){
    e = 1;
    for (var i = 1; i <= num; i++) {
        e *= i;
    }
    return e;
})
// prueba automática
if(result!=24){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------