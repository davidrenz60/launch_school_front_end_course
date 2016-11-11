$(function() {
  (function fixHeader() {
    var $header = $('body > header');
    $header.prependTo('body');
    $('main > h1').prependTo($header);
  })();

  (function fixImages() {
    var $figures = $('figure');
    var firstImg = $figures.eq(0).find('img').remove();
    var secondImg = $figures.eq(-1).find('img').remove();

    $figures.appendTo('article');
    firstImg.insertBefore($figures.eq(-1).find('figcaption'));
    secondImg.insertBefore($figures.eq(0).find('figcaption'));
  })();

  // video solution

  // (function fixFigures() {
  //   var $figures = $("figure"),
  //       $img = $figures.eq(0).find("img").remove();
  //
  //   $figures.appendTo("article");
  //   $figures.find("img").insertBefore($figures.eq(0).find("figcaption"));
  //   $figures.eq(-1).find("figcaption").before($img);
  // })();
});
