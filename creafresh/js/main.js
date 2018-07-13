$(document).ready(function(){
	var wHeight = $(window).height();


	$('.nav > a').click(function(){
		if ($(this).hasClass('open')) {
			$(this).removeClass('open').addClass('close');
			$(this).parents('.nav').addClass('opened');
		}
		else {
			$(this).removeClass('close').addClass('open');
			$(this).parents('.nav').removeClass('opened');
		}

		return false;
	});

	$('.language a').click(function(e){
		if ($(this).parent('li').hasClass('active')) {
			e.preventDefault;
		}
		else {
			$(this).parent('li').addClass('active').siblings().removeClass('active');
		}

		return false;
	});

	$('.menu a').click(function(e){
			if($(this).hasClass('home')) {
				e.preventDefault;
			}
			else if($(this).hasClass('active')) {
				e.preventDefault;
			}
			else {
				$(this).addClass('active').siblings().removeClass('active');
			}
	});

	$('.slogan').height(wHeight - 350);
	if ($(window).width() < 950) {
		$('.slogan').height(50+'vh');
	}
	if ($(window).width() < 620) {
		$('.slogan div img').attr('src','../img/big-logo_mobile.svg');
	} 

	$(window).on('resize', function(){
		$('.slogan').height(wHeight - 350);
		if ($(window).width() < 950) {
			$('.slogan').height(450);
		} else if ($(window).width() >= 951) {
			$('.slogan').height(wHeight - 350);
		} 

		if ($(window).width() < 620) {
			$('.slogan div img').attr('src','../img/big-logo_mobile.svg');
		} else {
			$('.slogan div img').attr('src','../img/big-logo.svg');
		}

	});

});