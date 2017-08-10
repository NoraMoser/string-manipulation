console.log("hi");

let input = document.getElementById("inputArea");
let output = document.getElementById("outputArea");
let output2 = document.getElementById("outputArea2");
let output3 = document.getElementById("outputArea3");
// let input2 = input.value;
let button = document.getElementById("button");
var testString = "";
let sentence = "";

var charsToRemove = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];


// for (var i = 0; i < charsToRemove.length; i++) {
// 	var removeCharacters = charsToRemove[i];
// 	input = input.replace(removeCharacters, "");
// }



function inputAsString() {
	testString = input.value;
	
}


function reversal() {
  	testString1 = testString.split("").reverse("").join("");
  	return testString1;
}

function alphabits() {
	testString2 = testString.split("").sort().join("");
	return testString2;
}

function palindrome() {
	if (input.value === testString1) {
		sentence = "Your word is a palindrome!";
	} else {
		sentence = "I'm sorry, your word is not a palindrome.";
	}
	return sentence;
}

button.addEventListener("click", function() {

for (var i = 0; i < charsToRemove.length; i++) {
	console.log(charsToRemove[i]);
	// var removeCharacters = charsToRemove[i];
	input.value = input.value.replace(charsToRemove[i], "");
console.log(charsToRemove[i]);
}
	
	inputAsString();
	reversal();
	alphabits();
	palindrome();

	output.innerHTML = testString1;
	output2.innerHTML = testString2;
	output3.innerHTML = sentence;
	});


input.addEventListener("keyup", function(event) {

	if (event.keyCode === 13) {

	for (var i = 0; i < charsToRemove.length; i++) {
	// let removeCharacters = charsToRemove[i];
	input.value = input.value.replace(charsToRemove[i], "");
	}

	inputAsString();
	reversal();
	alphabits();
	palindrome();

	output.innerHTML = testString1;
	output2.innerHTML = testString2;
	output3.innerHTML = sentence;
}

});













