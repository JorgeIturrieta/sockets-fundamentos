var  socket = io() ;
// Escuchar sucesos  
socket.on('connect',function(){
    console.log('Conectado al servidor');
});
socket.on('disconnect',function() {
    console.log('Perdimos conexión con el servidor');  
});
//Enviar información
socket.emit('enviarMensaje',{
    usuario: 'Jorge' ,
    message: 'Holaa mundo!!'
},function(resp){
    console.log(resp);
});

// Escuchar informacion del servidor

socket.on('enviarMensaje',function(resp) {
    console.log('Servidor:',resp);
});
