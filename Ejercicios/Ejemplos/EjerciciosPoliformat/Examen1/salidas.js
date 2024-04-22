
function simple(resultado) {
  console.log (resultado);
}

function mayormenor(resultado) {
  console.log ("<" + resultado + ">");
}

function mayormenordoble(resultado) {
  console.log ("<<" + resultado + ">>");
}


function comillasdobles(resultado) {
  console.log ("\"" + resultado + "\"");
}

function comillassimples(resultado) {
  console.log ("\'" + resultado + "\'");
}




function suma(a,b,f){
  f(a+b);
}

var r;

suma(1,1,simple);
suma(1,1,mayormenor);
suma(1,1,mayormenordoble);
suma(1,1,comillasdobles);
suma(1,1,comillassimples);
suma(1,1,function(r){
   console.log ("@" + r + "@");
})

