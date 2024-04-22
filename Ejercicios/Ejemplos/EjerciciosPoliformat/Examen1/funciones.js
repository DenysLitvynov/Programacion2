
function suma(a,b){
  return a+b;
}

function resta(a,b){
  return a-b;
}

function multiplica(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

function potencia(a,b){
  var r=1;
  for(var i=0;i<b;i++){
    r=r*a;
  }
  return r;
}

function operacion(a,b,f){
  return f(a,b);
}


var r=operacion(5,7,suma);
console.log (r);
r=operacion(5,7,resta);
console.log (r);
r=operacion(5,7,multiplica);
console.log (r);
r=operacion(5,7,divide);
console.log (r);

r=operacion(5,7,function(a,b){
  return resta(suma(a,b),multiplica(b,a));
});
console.log (r);

r=operacion(2,10,potencia);
console.log (r);
