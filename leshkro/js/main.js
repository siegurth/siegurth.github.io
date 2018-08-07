(function($) { 
$(document).ready(function(){
	var wHeight = $(window).height();
	var wad = $('.box.address').width() + 36;
	var wcu = $('.box.contactUs').width() + 36;
	var ww = $(window).width();
	var navWidth = ww - (wad + wcu + 60);
	var wrow = $('header .row').width();
	var lrow = $('header .row').offset().left;

	$('.slidePage').height(wHeight);

	$('.backToTop').click(function(e) {  
		e.preventDefault();
    $('body,html').animate({scrollTop:0},700);  
    $('#menu').children('li:not(:first-child)').removeClass('active');
    $('#menu').children('li:first-child').addClass('active');
  });

  $(window).on('load', function(){
  	$('header .box').delay(300).animate({opacity: '1'}, 700);
  	$('header nav').delay(600).animate({opacity: '1'}, 700);
  	$('header nav .sub').width(wrow).css('left', lrow);
  });
  
  $(window).on('scroll', function(){
  	var $this = $(window),
  			posY = $this.scrollTop();

		if (posY <= 338) {
			$('.backToTop').hide();
		} else {
			$('.backToTop').show();
		}
  });

  $(window).on('scroll resize', function(){
  		
  	
  	if ($('header').hasClass('scrolled')) {
  		$('nav').width(navWidth);
  	}
  	else {
  		$('nav').width(wrow);
  	}
  });

  $('nav a').click(function(e) {
  	var li = $(this).parent();
  	if (li.hasClass('active')) {
  		e.preventDefault();
  	}
  	else {
  		li.addClass('active').siblings().removeClass('active');
  	}

  	return false;
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
		$('body,html').animate({scrollTop: top}, 750);

		if ($('a').hasClass('active')) {
			event.preventDefault();
		}
		else {
			$(this).parent().addClass('active').siblings().removeClass('active');
		}
	});

});
})(jQuery);