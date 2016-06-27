$(function(){
$('.main_slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 700,
  fade: true,
  cssEase: 'linear'
  });
});
$(document).ready(function($){
	$(".icon_menu").click(function(event) {
		$(".sidebar").toggleClass("active")
	});
});

