// juanba dixa de follarte a gossos

var juanba = {
    nomComplet : [
        {nom: "juan", nom2: "bautista", cognom: "peris", cognom2: "fonestad"}
    ],
    aficcions : [
        {uno: "els homens", dos: "els pius", tres: "gastar diners publics"}
    ]
}

// nem a escriure aiso en un archiu 
function escribirObjetoComoJSONenArchivo(nombreFicheroTexto, objeto, callback){
    const objetoJSON = JSON.stringify(objeto);
    var fs = require("fs");
    fs.writeFile(nombreFicheroTexto, objetoJSON, function(err){
        if(err){
            callback(err);
        }else{
            callback(null);
        }
    })
}// ()

escribirObjetoComoJSONenArchivo("juanba.json", juanba, function(err){
    if(err){
        console.log("ha habut error" + err);
    }else{
        console.log("el objecte sascrit sense problemes");
    }
})