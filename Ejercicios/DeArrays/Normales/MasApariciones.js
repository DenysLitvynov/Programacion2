//
// Hacer una función que se le pase una lista de enteros 
// del 0 al 10 y nos diga que número aparece más veces
// Lista<N> -> masApariciones() -> N
//
function masApariciones(array){
    var masApar = 0, num = 0;
    for(var i=0;i<array.length;i++){
        var apar = 0;
        for(var j=0;j<array.length;j++){
            if(array[j]==array[i]){
                apar+=1;
            }
        }//for.interior()
        if(apar>masApar){
            masApar = apar;
            num = array[i];
        }
    }//for.exterior()
    return num;
}//()

// prueba automática para la función masApariciones()
function probarMasApariciones(array){
    var res = masApariciones(array);
    if(res!=7){
        console.log("Esta mal");
    }
}

//------------------------------
// main()
//------------------------------

var array = [1,2,2,2,3,4,4,5,5,6,7,7,7,7,8,9,10];
probarMasApariciones(array);

//------------------------------
//------------------------------
//------------------------------