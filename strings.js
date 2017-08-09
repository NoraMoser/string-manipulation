console.log("hi");

let input = document.getElementById("inputArea").value;
let output = document.getElementById("outputArea");
let button = document.getElementById("button");
var testString = "";
let newArray = [];


button.addEventListener("click", function() {
	
reversal(testString);

console.log(testString);
// alphabits(testString);
// palindrome(testString);
})
output.innerHTML = testString;




function reversal() {
  return input.split("").reverse().join("");
}



function alphabits() {

}





function palindrome() {

}



