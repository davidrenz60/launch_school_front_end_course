onmessage = function(message) {
  var data = message.data.imgData.data;

  for (var i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }

  postMessage(message.data);
};