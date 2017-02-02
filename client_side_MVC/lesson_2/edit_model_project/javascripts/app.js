var ProductModel = Backbone.Model.extend({
  setDateTime: function() {
    var date = new Date(this.get('date'));
    this.set('datetime', formatDateTime(date));
  },

  setDateFormatted: function() {
    var date = new Date(this.get('date'));
    this.set('date_formatted', formatDate(date));
  },

  initialize: function() {
    this.setDateTime();
    this.setDateFormatted();
  },
});

var product = new ProductModel(product_json);

var templates = {};
$("script[type='text/x-handlebars']").each(function() {
  var $template = $(this).html();
  templates[this.id] = Handlebars.compile($template);
});

renderProduct();
renderForm();

$('form').on('submit', function(e) {
  e.preventDefault();
  var inputs = $(this).serializeArray();
  var date = new Date();
  var attrs = {};

  inputs.forEach(function(obj) {
    attrs[obj.name] = obj.value;
  });

  attrs.date = date.valueOf();
  attrs.datetime = formatDateTime(date);
  attrs.date_formatted = formatDate(date);
  product.set(attrs);
  renderProduct();
});

function renderProduct() {
  $('article').html(templates.product(product.toJSON()));
}

function renderForm() {
  $('fieldset').html(templates.form(product.toJSON()));
}

function formatDateTime(date) {
  return moment(date).format('MMMM Do, YYYY h:mm:ss');
}

function formatDate(date) {
  return moment(date).format('YYYY-MM-DDThh:mm:ss');
}





