// // scroll anim
$(document).ready(function () {
 	ScrollReveal().reveal('.anim1', {
 		distance: '300px',
 		interval: 200,
 		origin: "top",
 		duration: 1500,

 	});
 	ScrollReveal().reveal('.anim2', {
		distance: '300px',
		
 		interval: 200,
 		origin: "left",
 		duration: 1000,

 	});
 	ScrollReveal().reveal('.anim3', {
 		distance: '300px',
		
 		interval: 200,
 		origin: "right",
 		duration: 2000,

	});
 	ScrollReveal().reveal('.anim4', {
		distance: '300px',
		
		interval: 200,
		origin: "bottom",
		duration: 2000,

	});
	
	ScrollReveal().reveal('.fade_anim', { delay: 250,interval:200});

 });
// scroll anim
// hamburger
$('.hamburger').click(function(){
	$('.main_hamburger').toggleClass('active');
	$('#menus').toggleClass('active');
});
// isotope 

$('.p_log').click(function(){
	window.location = '../login.html';
});
$('.s_log').click(function(){
	window.location = 'login.html';
});
$('#nav_search_btn').click(function(){
	$('#myOverlay').show();
});
$('#clode_overlay').click(function(){
	$('#myOverlay').hide();
});

$('a[rel=popover]').popover({
	html: true,
	trigger: 'hover',
	placement: 'left',
	content: function(){return '<img src="'+$(this).data('img') + '" />';}
  });
