(function($) { 
$(document).ready(function(){
	var wHeight = $(window).height();

	$('main > section').height(wHeight);

	$('.backToTop').click(function(e) {  
		e.preventDefault();
    $('body,html').animate({scrollTop:0},700);  
    $('#menu').children('li:not(:first-child)').removeClass('active');
    $('#menu').children('li:first-child').addClass('active');
  });
  
  $(window).scroll(function(){
  	var $this = $(window),
  			posY = $this.scrollTop();
		if (posY <= 338) {
			$('.backToTop').hide();
		} else {
			$('.backToTop').show();
		}
  });

	$(".map").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 750);
	});

	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);

		if ($('a').hasClass('active')) {
			event.preventDefault();
		}
		else {
			$(this).parent().addClass('active').siblings().removeClass('active');
		}
	});

});
})(jQuery);