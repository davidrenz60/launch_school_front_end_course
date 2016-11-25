var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

var preloader = {
  path: 'images/',
  srcs: ['1.jpg', '2.jpg', '3.jpg'],
  createImage: function(src) {
    var $img = $('<img>', { src: this.path + src });
    $img.on('load', manipulator.process.bind(manipulator));
  },

  run: function() {
    this.srcs.forEach(this.createImage.bind(this));
  },
};

var manipulator = {
  drawImage: function(img) {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  },

  getData: function() {
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  },

  convertToGreyScale: function() {
    var imageData = this.getData();

    for (var i = 0; i < imageData.data.length; i += 4) {
      var greyScale = (imageData.data[i] * 0.3086 + imageData.data[i + 1] * 0.6094 + imageData.data[i + 2] * 0.0820);
      imageData.data[i] = greyScale;
      imageData.data[i + 1] =  greyScale;
      imageData.data[i + 2] = greyScale;
    }

    ctx.putImageData(imageData, 0, 0);
  },

  renderImage: function() {
    var $img = $('<img>');
    $img.attr('src', canvas.toDataURL());
    $('#manipulated').append($img);
  },

  renderOriginal: function(img) {
    $('#original').append(img);
  },

  process: function(e) {
    var img = e.target;
    this.drawImage(img);
    this.convertToGreyScale();
    this.renderImage();
    this.renderOriginal(img);
  },
};

$(preloader.run.bind(preloader));
