
function mayor(f1,f2,x){
  var y1,y2

  y1=f1(x)
  y2=f2(x)

  if(y1>y2){
    return y1
  }
  else{
    return y2
  }
}

function xcuadrado(x){
  return x*x
}

function polinomio(x){
  return 3*x*x*x-5*x*x+2*x-4
}

var result=mayor(xcuadrado,polinomio,1)

console.log(result)