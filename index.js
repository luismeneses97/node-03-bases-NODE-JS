const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe:'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias: 'limite',
            type: 'number',
            demandOption: false,
            default: 10,
            describe:'Es el limite de la multiplicar'
        })
        .option('v',{
            alias: 'visualizar',
            type: 'boolean',
            demandOption: false,
            
            describe:'Es la opcion para visualizar la tabla'
        })
        
        .check((argv, options) =>{
            if (isNaN(argv.b)){
                throw new Error("La base tiene que ser un numero.")
            }
            return true
        })
        .check((argv, options) =>{
            if (isNaN(argv.l)){
                throw new Error("La limite tiene que ser un numero.")
            }
            return true
        })
        .help()
        .version()
        .argv;

const { option } = require('yargs');
const {multiplicar} = require("./multiplicador");


multiplicar(argv.b, argv.l, argv.v);