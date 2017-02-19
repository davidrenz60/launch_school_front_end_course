var express = require('express');
var router = express.Router();
var _ = require('underscore');

module.exports = function(app) {
  function setActiveNavTo(title) {
    var activeItem = _(app.locals.links).findWhere({ active: true });
    if (activeItem) {
      activeItem.active = false;
    }

    _(app.locals.links).findWhere({ title: title }).active = true;
  }

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Web Store',
    });
  });

   router.get('/about', function(req, res, next) {
    var title = "About";

    setActiveNavTo(title);

    res.render('about', {
      title: title,
    });
  });

  return router;
}
