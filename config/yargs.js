const argv=require('yargs')



         .option('b',{

            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'muestra la base de la tabla de multiplicar'
         })
         .option('h',{

            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'muestra hasta donde quieres la tabla'
         })
         .option('l',{
            alias: 'listar ',
            type:  'boolean',
            demandOption:true,
            default : false,
             describe: 'muestra la tabla' })

         .check(( argv,Options)=>{
            if( isNaN( argv.b)){
                throw 'la base es un nummero'
            }
           return true;



            }

             


        )


.argv;

module.exports = argv;