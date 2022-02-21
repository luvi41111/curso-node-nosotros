const fs = require('fs');
//const { resolve } = require('path/posix');
const crearArchivo = async(base=5, listar= false, hasta = 10)=>{
   const colors = require ('colors');




    try{




const require=('colors');

    


let salida='';
let consola= ' ';

for ( let i = 1; i<=hasta; i++) {
 salida += ` ${base}  x  ${i}  =  ${base*i}\n`;
consola+= ` ${base}  ${'x'.yellow}  ${i}  ${'='. red}  ${base*i}\n`;
 
} if ( listar){

    console.log('=========================='.yellow);
console.log(' tabla del'. rainbow, base );
console.log('=========================='.yellow);

 
console.log(consola);}

fs.writeFileSync (`./salida/tabla-${base}.txt  `, salida);
return ` tabla-${base}.txt `;


} catch (error) {
throw err; }
}

module.exports = {
    crearArchivo 
}


