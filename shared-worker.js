'use strict';

var ports = [];

self.onconnect = function(event) {
  var port = event.ports[0];
  ports.push(port);
  port.onmessage = function(event) {
    // Forward each message to all ports
    ports.forEach(function(port) {
      port.postMessage(event.data);
    });
  };
};
