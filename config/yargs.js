const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    desc: 'Marca como compleatado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Muestra un listado detallado de las tareas')
    .command('borrar', 'Borra una tarea de lista', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}