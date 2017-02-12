onmessage = function(message) {
  var imgData = message.data.imgData;
  var percentage = +message.data.param * -.01;
  var max;
  var saturate = function(val) {
    return val === max ? 0 : (max - val) * percentage;
  };

  for (var i = 0; i < imgData.data.length; i += 4) {
    max = Math.max(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]);
    imgData.data[i] += saturate(imgData.data[i]);
    imgData.data[i + 1] += saturate(imgData.data[i + 1]);
    imgData.data[i + 2] += saturate(imgData.data[i + 2]);
  }

  postMessage(message.data);
};