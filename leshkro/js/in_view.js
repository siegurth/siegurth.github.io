(function($) {
	$(window).scroll(function(){
		$('.slidePage').each(function(){
			if(isScrolledIntoView($(this))){
				
				$('#slide_8').children('figure').animate({opacity: '1'}, 300);
				$('#slide_8').children('.column:nth-child(1)').delay(300).animate({opacity: '1'}, 300);
				$('#slide_8').children('.column:nth-child(2)').delay(600).animate({opacity: '1'}, 300);
				$('#slide_8').children('.column:nth-child(3)').delay(900).animate({opacity: '1'}, 300);
				$('#slide_8').children('.column:nth-child(4)').delay(1200).animate({opacity: '1'}, 300);
			}
			
		});
	});

	function isScrolledIntoView(elem){
	var $elem = $(elem);
	var $window = $(window);

	var docViewTop = $window.scrollTop();
	var docViewBottom = docViewTop + $window.height();

	var elemTop = $elem.offset().top;
	var elemBottom = elemTop + $elem.height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
})(jQuery);