//
// Hacer una función que reciba una lista de números y los ordena de menor a mayor
// Lista<R> -> quickSort() -> Lista<R>
//
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

//------------------------------
//------------------------------

// Prueba automática para la función
function probarQuickSort(){
    var array = new Array(4,5,2,1,3);
    var arrPrueba = new Array(1,2,3,4,5);
    var res = quickSort(array);// Llamada a la función
    for(var i=0;i<res.length;i++){
        //console.log(res[i]);
        if(res[i]!=arrPrueba[i]){
            console.log("Esta mal");
            break;
        }
    }//for()
}

//------------------------------
// main()
//------------------------------

probarQuickSort();

//------------------------------
//------------------------------
//------------------------------