//
// función que calcula el area de un triangulo utilizando la formula de base por altura
// N N -> calcularAreaTriangulo() -> R
//
function calcularAreaTriangulo(base,altura){
    return base*altura;
} //()

//------------------------------
// main()
//------------------------------

var res = calcularAreaTriangulo(4,4);
// prueba automática
if(res!=16){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------