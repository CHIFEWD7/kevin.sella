$(document).ready(function(){


// Section 2: Photo carousel below -----------------------------------------


// GLOBAL VARIABLES -------

// Store an array of image paths in a variable
var images=['img/blank.jpg', 'img/lines.jpg', 'img/space.jpg', 'img/topimage.jpg', 'img/blank.jpg', 'img/lines.jpg'];
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


// GLOBAL VARIABLES -------

// Store an array of image paths in a variable
var quotes=['img/blank.jpg', 'img/lines.jpg', 'img/space.jpg', 'img/topimage.jpg', 'img/blank.jpg', 'img/lines.jpg'];

// Set a variable for the current position(index) and give it an ititial value of 0
var currentPosition = 0;

// EVENTS ---------

// Listen for click events on the next and previous buttons
$('.next').on('click', nextQuote);
$('.prev').on('click', previousQuote);


// FUNCTIONS ---------

function nextQuote(){
	// Update the current position
	currentPosition += 1;

	//Make sure the previous button is enabled
	$('.prev').prop('disabled', false);

	// Update source, clear out select menu
	changeQuote();

	// If the currentPosition is at the last image
 	if (currentPosition === quotes.length - 1) {
 		// Disable the next button
		$('.next').prop('disabled', true);
		// Calculate votes
	}
}

function previousQuote(){
	// Update the current position
	currentPosition -= 1;

	// Make sure the next button is enabled
	$('.next').prop('disabled', false);

	// Update the source and empty out the #your-vote select menu
	changeQuote();

	// If the currentPosition is at the first item (the zero index), disable the previous button
	if (currentPosition === 0 ) {
		$('.prev').prop('disabled', true);
	}
}

function changeQuote(){
	// Update the src attribute to the urls that's stored at the currentPosition in the array
	$('.notes').attr('src', quotes[currentPosition]);
}



});



