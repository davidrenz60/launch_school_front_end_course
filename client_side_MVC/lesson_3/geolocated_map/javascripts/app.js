var map = {
  width: 600,
  height: 420,
  buildURL: function() {
    var base = 'https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=';
    var coords = this.position.coords.latitude + ',' + this.position.coords.longitude;
    base += this.width + 'x' + this.height;
    base += '&center=' + coords + '&markers=' + coords;

    return base;
  },

  latLong: function() {
    return 'lat=' + this.position.coords.latitude + '&lon=' + this.position.coords.longitude;
  },

  buildImage: function() {
    var $img = $('<img/>', {
      width: this.width,
      height: this.height,
      src: this.buildURL(),
    });

    $('#map').html($img);
  },

  build: function(position) {
    this.position = position;
    this.buildImage();
    weather.get();
  },
};

var weather = {
  $el: $('#weather'),
  template: Handlebars.compile($('#weather_card').html()),
  endpoint: 'http://api.openweathermap.org/data/2.5/weather',
  key: '837ae64d14506ae28f50e499bffffd1f',

  buildURL: function() {
    return this.endpoint + '?' + map.latLong() + '&APPID=' + this.key;
  },

  get: function() {
    var dfd = $.ajax({
      url: this.buildURL(),
      dataType: "json",
    });

    dfd.done(this.render.bind(this));
  },

  temp: function(kelvin) {
    return kelvinToFeren(kelvin).toFixed(1) + '&deg;F';
  },

  processData: function(json) {
    console.log(json);
    return {
      location: json.name,
      temp: this.temp(json.main.temp),
      description: json.weather[0].description,
      icon: json.cod,
    };
  },

  render: function(json) {
    this.$el.html(this.template(this.processData(json))).addClass('slide');
  },
};

function kelvinToFeren(k) {
  return 1.8 * (k -273.15) + 32;
}

navigator.geolocation.getCurrentPosition(map.build.bind(map));


// <i class="owf owf-803"></i>