onmessage = function(message) {
  var imgData = message.data.imgData;
  var percentage = +message.data.param;
  var brightness = Math.floor(percentage * 255 / 100);

  for (var i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] += brightness;
    imgData.data[i + 1] += brightness;
    imgData.data[i + 2] += brightness;
  }

  postMessage(message.data);
};