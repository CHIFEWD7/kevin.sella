$(document).ready(function(){


// PHOTO CAROUSEL -----------------------------------------
var images=['img/blank.jpg', 'img/lines.jpg', 'img/stache.jpg', 'img/AwShucks.jpg', 'img/DuckHunt.jpg', 'img/HappyPooch.jpg', 'img/DestroyedToy.jpg', 'img/space.jpg', 'img/warmart.jpg', 'img/goofygrin.jpg'];
var currentPosition = 0;

$('.nextpic').on('click', nextImage);
$('.previous').on('click', previousImage);

function nextImage(){
	currentPosition += 1;
	$('.previous').prop('disabled', false);
	changeImage();
 	if (currentPosition === images.length - 1) {
		$('.nextpic').prop('disabled', true);
	}
}

function previousImage(){
	currentPosition -= 1;
	$('.nextpic').prop('disabled', false);
	changeImage();
	if (currentPosition === 0 ) {
		$('.previous').prop('disabled', true);
	}
}

function changeImage(){
	$('.pics').attr('src', images[currentPosition]);
}

// Quote Carousel below -----------------------------------------



var currentPosition = 0;

$('.next').on('click', nextQuote);
$('.prev').on('click', previousQuote);


// FUNCTIONS ---------

function nextQuote(){
	currentPosition += 1;
	$('.prev').prop('disabled', false);
	changeQuote();
 	if (currentPosition === quotes.length - 1) {
		$('.next').prop('disabled', true);
	}
}

function previousQuote(){
	currentPosition -= 1;
	$('.next').prop('disabled', false);
	changeQuote();
	if (currentPosition === 0 ) {
		$('.prev').prop('disabled', true);
	}
}

function changeQuote(){
	$('.notes').attr('src', quotes[currentPosition]);
}


// QUOTE CAROUSEL

$(function(){
  var $txtcarousel = $('.quote-list');
  var txtcount = $txtcarousel.children().length;
  var wrapwidth = (txtcount * 415) + 415; // 400px width for each testimonial item
  $txtcarousel.css('width',wrapwidth);
  var animtime = 750;
 
  // prev & next btns for testimonials
  $('#prv-testimonial').on('click', function(){
    var $last = $('.quote-list li:last');
    $last.remove().css({ 'margin-left': '-415px' });
    $('.quote-list li:first').before($last);
    $last.animate({ 'margin-left': '0px' }, animtime); 
  });
  
  $('#nxt-testimonial').on('click', function(){
    var $first = $('.quote-list li:first');
    $first.animate({ 'margin-left': '-415px' }, animtime, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('.quote-list li:last').after($first);
    });  
  });
});

});

// Scroll to section //

// Back to top button //

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 700); // speed of transition //
	return false;
});

$('.nav navbar-nav a').on('click', function(e) {
	e.preventDefault();
    var href = $(this).attr('href');
    var anchor = $(href).offset();
    $('body').animate({ scrollTop: anchor.top }, 700);
    return false;
}); 

// Scroll to top of page @ refresh //

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// Back to top button //

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 700); // speed of transition //
	return false;
});

// Scroll to section //

$('.navbar a').on('click', function(e) {
	e.preventDefault();
    var href = $(this).attr('href');
    var anchor = $(href).offset();
    $('body').animate({ scrollTop: anchor.top }, 700);
    return false;
}); 

// Fixed Scroll Menu //

var navTop = $('.topnavigation').offset().top;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > navTop) {
        $('.topnavigation').addClass('fixed');
    } else {
        $('.topnavigation').removeClass('fixed');
    }
});

// Mobile Nav //

// $('.hamburger').on('click', function () {
//     if ($('.mobile-nav').hasClass('open')) {
//         $('.mobile-nav').animate({
//             right: -200
//         }, function() {
//             $(this).removeClass('open');
//         });
//     } else {
//         $('.mobile-nav').animate({
//             right: 0
//         }, function() {
//             $(this).addClass('open');
//         });
//     }    
// });


