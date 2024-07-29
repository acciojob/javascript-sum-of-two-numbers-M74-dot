// let input1 = prompt("Enter the first number:");
// let input2 = prompt("Enter the second number:");

if (input1 === null || input2 === null || input1.trim() === "" || input2.trim() === "" || isNaN(parseFloat(input1)) || isNaN(parseFloat(input2))) {
    alert("Invalid input. Please enter a valid number.");
} else {
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);
    let sum = num1 + num2;
    let msg = `The sum of ${num1} and ${num2} is ${sum}.`;
    alert(msg);
}
