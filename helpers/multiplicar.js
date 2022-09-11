const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base, listar, hasta ) =>{
    try {
        

        let salida = ''
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${ base * i}\n`;
        }
        if(listar){
            console.log("=================")
            console.log("  Tabla del ".green, base)
            console.log("=================") 
            console.log(salida)
        }
       
        
        const escribir = await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        
        return `tabla-${base}.txt`
    } catch (err) {
        throw err
    }
    

    
}

module.exports = {
    crearArchivo
}