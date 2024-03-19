//Hecho por Juan Diaz

// ––––––––––––––––––––––––––––-------------------------------------------------------------------------------
//   nombreFicheroTexto: Texto----> leerFicheroTextoAJSON()-----> objetoDevolver: JSON{numero:Z , rep: N}
// ––––––––––––––––––––––––––––-------------------------------------------------------------------------------

function leerFicheroTextoAJSON(nombreFicheroTexto,callback) {
    var fs = require("fs");

    fs.readFile(nombreFicheroTexto, "utf8" , function (err,contenido) {
        if (err) {
            callback( null, err)
        }
        else {
            callback(JSON.parse(contenido),null);
        }
    })
}

// ––––––––––––––––––––––––––––-------------------------------------------------------------------------------
//   categoriaIn: Texto, arrayObjetosIn: Lista<JSON{nombre: Texto ,ciudad: Texto, categoria: Texto}>----> fallasEnCategoria()-----> listaOutDatosCategoria: Lista<JSON{nombre: Texto ,ciudad: Texto, categoria: Texto}>
// ––––––––––––––––––––––––––––-------------------------------------------------------------------------------

function fallasEnCategoria(arrayObjetosIn,categoriaIn) {
    let listaOutDatosCategoria = arrayObjetosIn.filter(function (currentValue) {
        if (currentValue.categoria === categoriaIn) {
            return true;
        }
        return false
    })
    return listaOutDatosCategoria;
}

//main()

leerFicheroTextoAJSON("examen1/fallas.json", function (objetoInJSON,err) {
    if (err) {
        console.log("Ha habido un error"+err)
    }
    else {
        console.log(objetoInJSON)
        let listaOut = fallasEnCategoria(objetoInJSON, "segunda");
        console.log(listaOut)

        let listaPrueba = [{ falla: "Consertori", ciudad: "Gandia", categoria: "segunda" }];
        if (listaPrueba[0].falla ===listaOut[0].falla && listaPrueba[0].ciudad ===listaOut[0].ciudad && listaPrueba[0].categoria ===listaOut[0].categoria) {
            console.log("Esta bien")
        }
        else {
            console.log("Esta mal")
        }
            }
});