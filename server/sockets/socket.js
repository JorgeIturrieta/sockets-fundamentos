const { io } = require('../server');
io.on('connection',(client)=> {

    console.log('Usuario conectado');

    // Emitir desde el servidor
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    client.on('disconnect',()=> {
        console.log('Usuario desconectado ');
    });

    // Escuchar el cliente

    client.on('enviarMensaje',(data,callback) => {

        console.log(data);
        // Enviar mensaje a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje',data);

        /*
        if(mensaje.usuario){

            callback({
                respuesta: 'TODO SALIO BIEN!!'
            });
        } else {
            callback({
                respuestas: 'TODO SALIO MAL!!'
            });
        } 
        */

    
    });


});