
function ordenar(v,f){
  var i,j,aux
  for(i=0;i<v.length;i++){
    for(j=i+1;j<v.lenght;j++){
      if(f(v[i],v[j])==false){
        aux=v[i]
        v[i]=v[j]
        v[j]=aux
      }
    }
  }
}

function menor_mayor(a,b){
  if(a<b)
    return true
  else
    return false
}

function mayor_menor(a,b){
  if(a>b)
    return true
  else
    return false

}

function orden_loco(a,b){
  if(a%2==0){
    if(b%2==0){
      if(a<b){
        return true
      }
      else{
        return false
      }
    }
    else{
      return true
    }
  }
  else{
    if(b%2==0){
      return false
    }
    else{      
      if(a<b){
        return true
      }
      else{
        return false
      }
    }
  }
}

var vec = [3, 5, 6, 7, 1, 4]

ordena(vec,menor_mayor)
ordena(vec,mayor_menor)
ordena(vec,orden_loco)

console.log( v )