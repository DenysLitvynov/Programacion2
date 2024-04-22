//
// Archivo: pregunta1.js
// Descripción: ----
// Fecha: 22/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<R>, x:R -> instertar() -> Resultado<R>
//--------------------------------------------
function insertar(lista,x){
    let menoresMayores = lista.reduce(function(acum,elem){
        if(elem <= x){
            acum.menores.push(elem);
        } else {
            acum.mayores.push(elem);
        }
        return acum;
    },{menores: [], mayores: []})
    menoresMayores.menores.push(x);
    let resultado = (menoresMayores.menores.concat(menoresMayores.mayores));
    return resultado;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarInsertar(lista, x, esperada){
    const resultado = insertar(lista, x);
    for(let i = 0; i<resultado.length; i++){
        if(resultado[i] !== esperada[i]){
            console.log("Esta mal")
            break;
        }
    }// for
}//()

//--------------------------------------------
// main()
//--------------------------------------------

const lista = [1,2,3,4,6,7,8,9,10];
const esperada = [1,2,3,4,5,6,7,8,9,10];
probarInsertar(lista, 5, esperada);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------