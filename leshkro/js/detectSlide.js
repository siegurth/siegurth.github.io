$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.slidePage').each(function() {
      var cur = $(this).attr('id');
    if ($(this).isInViewport()) {
      $('.check-' + cur).addClass('active');

      $('#slide_8').children('figure').animate({opacity: '1'}, 300);
      $('#slide_8').children('.column:nth-child(1)').delay(300).animate({opacity: '1'}, 300);
      $('#slide_8').children('.column:nth-child(2)').delay(600).animate({opacity: '1'}, 300);
      $('#slide_8').children('.column:nth-child(3)').delay(900).animate({opacity: '1'}, 300);
      $('#slide_8').children('.column:nth-child(4)').delay(1200).animate({opacity: '1'}, 300);
    } else {
      $('.check-' + cur).removeClass('active');
    }
  });
});