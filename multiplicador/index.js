const color = require('color');
const fs = require('fs');
const {logica} = require('./logica')

const multiplicar = (base, limite, visualizar) => {
    let  resultado = '';

    resultado = logica(base, limite);
    if(visualizar){
        console.log(`====================`);
        console.log(`Tabla del ${base}`);
        console.log(`====================`);
        console.log(resultado);
    }
    

    
    const nombreArchivo = `tabla-del-${base}.txt`
    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado !`.rainbow);
    });
}
module.exports = {
    multiplicar
}
