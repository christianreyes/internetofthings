var dgram = require("dgram");
var socket = dgram.createSocket('udp4');

var multicast_port = 1234;
var multicast_address = '239.1.1.1';

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var message = process.stdin.read();
  
  if (message !== null) {
	  var buffer = new Buffer(message);
	  
	  socket.send(buffer, 0, buffer.length, multicast_port, multicast_address);
  }
});

console.log("Ready to send messages via udp to " + multicast_address + ":" + multicast_port)