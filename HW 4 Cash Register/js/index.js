// Create a global variable for the total
var total = 0; 

// Create a function you can run when you submit the field Hint: .submit() in jQuery
$('#entry').submit(enter); 

// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

	function enter() {
	  var entry = $('#newEntry').val();
	  var entry = parseFloat(entry);
	  
	  currency = currencyFormat(entry);
	  
	  $('#entries').append('<tr><td></td><td>'+currency+'</td></tr>');//is there an easier way to do this? 

	  	total += entry;
	  
	 $('#total').html (currencyFormat(total));
	  
	 $('#newEntry').val('');

	 	return false
	}
// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format 
//(HINT: create an additional function to format your number into a "currency friendly" format)
	function currencyFormat(number) {
	  
	  var currency = parseFloat(number);
	  
	  currency = currency.toFixed(2);
	  
	  currency = '$'+currency;
	  
	  return currency;
	}

// I tried to add a conditional that would send an alert/error message if a non-number was entered but it wasn't working. :()