// JavaScript Document


$(document).ready(function(){
	/*** scroll-link ****/
	$('.icon-scroll-link').click(function () {
		$('html, body').animate({
			scrollTop: $('#section').offset().top
		});
		return false;
	});
	/*** tabs ****/
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('current');
		$(this).addClass('active');
		$("#"+tab_id).addClass('current');
	})
});


$(function(){
	$(window).resize(function(){
		// Menu mobile
		var ww = $(window).width();
		$(".navbar-button button.click").on('click', function(e){
			e.stopPropagation();
			$(".gNav").css("left", "0");
			$(".close_me").css("display", "block");
			$("body").css("overflow", "hidden");
		});
		$(".gNav button.close_me").on('click', function(){
			$(".gNav").css("left", -100 + '%');
			$(".close_me").css("display", "none");
			$("body").css("overflow", "auto");
		});
	}).trigger("resize");

	/*** back top *****/
	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
					$('#bttop').fadeIn();
			} else {
					$('#bttop').fadeOut();
			}
	});
	$(document).on('click','#bttop', function(){
			$('body,html').animate({scrollTop: 0}, 800);
	});
});



