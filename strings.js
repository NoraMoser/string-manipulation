console.log("hi");

let input = document.getElementById("inputArea");
let output = document.getElementById("outputArea");
let button = document.getElementById("button");
var testString = "";


function inputAsString() {
	testString = input.value;
	
}


function reversal() {
  	testString = testString.split("").reverse("").join("");
  	return testString;
}

button.addEventListener("click", function() {
	
inputAsString();
reversal();

output.innerHTML = testString;

})








function alphabits() {

}





function palindrome() {

}



