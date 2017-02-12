onmessage = function(message) {
  var imgData = message.data.imgData;
  var resultData = [];
  var width = imgData.width;
  var rowWidth = width * 4;

  for (var i = imgData.data.length - rowWidth; i >= 0; i-= rowWidth) {
    for (var j = i; j < i + rowWidth; j++) {
      resultData.push(imgData.data[j]);
    }
  }

  for (var k = 0; k < imgData.data.length; k+= 4) {
    imgData.data[k] = resultData[k];
    imgData.data[k + 1] = resultData[k + 1];
    imgData.data[k + 2] = resultData[k + 2];
    imgData.data[k + 3] = resultData[k + 3];
  }

  postMessage(message.data);
};
