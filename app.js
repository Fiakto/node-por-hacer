const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('CREAR TAREAS POR HACER');
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('MOSTRAR TODAS LAS TAREAS');
        let listado = getListado();

        for (let tarea of listado) {
            console.log('=========POR HACER========='.green);
            console.log(tarea.desc);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;
    case 'actualizar':
        console.log('ACTUALIZAR UNA TAREA');
        let actualizado = actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);
        break;

    case 'borrar':
        console.log('BORRAR UN TAREA');
        let borrado = borrar(argv.descripcion);

        console.log(borrado);
        break;

    default:
        console.log(`No existe el comando ${ comando }`);
        break;
}