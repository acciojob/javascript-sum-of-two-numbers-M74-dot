let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

if(isNaN(input1) || isNaN(input2)){
	alert("Invalid input. Please enter a valid number.");
}else{
	let ans = parseFloat(input1)+parseFloat(input2)
	let msg = `The sum of ${input1} and ${input2} is ${ans}.`
	alert(msg);
}
// Write your code here and print the output using alert function
