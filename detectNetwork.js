// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // intial Test
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardName = "";

  
  if((cardNumber.startsWith("38") 
  	|| cardNumber.startsWith("39")) 

  	&& cardNumber.length === 14){

  	return cardName = 'Diner\'s Club';

  }  

  if((cardNumber.startsWith("34") 
  		|| cardNumber.startsWith("37")) 

  		&& cardNumber.length === 15){

  	return cardName = "American Express";

  }  

  if(cardNumber.startsWith("4") 

	&& (cardNumber.length === 13 
	|| cardNumber.length === 16 
	|| cardNumber.length === 19)){

  	return cardName = "Visa";

  }  

  if((cardNumber.startsWith("51") 
	|| cardNumber.startsWith("52")
	|| cardNumber.startsWith("53")
	|| cardNumber.startsWith("54")
	|| cardNumber.startsWith("55")) 

  	&& cardNumber.length === 16){

  	return cardName = "MasterCard";

  }  

  if((cardNumber.startsWith("6011") 
	|| cardNumber.startsWith("644")
	|| cardNumber.startsWith("645")
	|| cardNumber.startsWith("646")
	|| cardNumber.startsWith("647")
	|| cardNumber.startsWith("648")
	|| cardNumber.startsWith("649")
	|| cardNumber.startsWith("65")) 

	&& (cardNumber.length === 16
	|| cardNumber.length === 19)){

  	return cardName = "Discover";

  }  
  if((cardNumber.startsWith("5018") 
	|| cardNumber.startsWith("5020")
	|| cardNumber.startsWith("5038")
	|| cardNumber.startsWith("6304")) 

	&& (cardNumber.length >= 12 
	&& cardNumber.length <= 19)){

  	return cardName = "Maestro";
  } 

  var prefix6 = parseInt(cardNumber.slice(0,6));
  var prefix4 = parseInt(cardNumber.slice(0,4)); //62886564646464
  var prefix3 = parseInt(cardNumber.slice(0,3));



  var chinaUnion6 = [];
  var chinaUnion4 = [];
  var chinaunion3 =[624,625,626]

  for(var i = 622126; i <= 622925; i++){
  	chinaUnion6.push(i);
  }

  for(var i = 6282; i <= 6288; i++){
  	chinaUnion4.push(i);
  }

  if(( validPrefix(prefix3, chinaunion3)
  	|| validPrefix(prefix4, chinaUnion4)
  	|| validPrefix(prefix6, chinaUnion6))

  	&& validLength(cardNumber.length,[16,17,18,19])){

  	return cardName = "China UnionPay";
  }

  var switchDigits = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759 ];

  if((validPrefix(prefix4, switchDigits)
  	||validPrefix(prefix6, switchDigits))

  	&&validLength(cardNumber.length,[16,18,19])){

  	return cardName = "Switch";
  }

  function validPrefix(digits, possibleDigits){
  	for(var i = 0; i < possibleDigits.length; i++){
  		if(possibleDigits[i] === digits){
  			return true;
  		}
  	}
  	return false;
  }

  function validLength(length, possibleLength){
  	for(var i = 0; i < possibleLength.length; i++){
  		if(possibleLength[i] === length){
  			return true;
  		}
  	}
  	return false;
  }
  

return cardName;
};