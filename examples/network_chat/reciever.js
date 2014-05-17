var dgram = require("dgram");
var server = dgram.createSocket('udp4');

var multicast_port = 1234;
var multicast_address = '239.1.1.1';

server.bind(multicast_port, function() {
  server.addMembership(multicast_address);
  
  console.log("Listening for udp traffic on " + multicast_address + ":" + multicast_port);
  
  server.on("message", function (msg, rinfo) {
	  process.stdout.write(msg.toString());
  });
});