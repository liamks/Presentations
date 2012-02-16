var io  = require('socket.io').listen(5001),
    dl = require('delivery');

io.sockets.on('connection', function(socket){
  var delivery = dl.listen(socket);
  delivery.on('delivery.connect',function(delivery){

    setTimeout(function(){
      delivery.send({
        name: 'sample-image.jpg',
        path : './sample-image.jpg'
      });
    },3000);


  });
});