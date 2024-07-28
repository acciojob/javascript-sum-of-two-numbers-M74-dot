let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

if(isNaN(input1) || isNaN(input2)){
	alert("Invalid input. Please enter a valid number.");
}else{
	let ans = Number(input1)+Number(input2)
	alert(ans);
}
// Write your code here and print the output using alert function
