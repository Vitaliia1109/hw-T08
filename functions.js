// Function to find the sum of an array of numbers
function findSum(arr) {
    let sum = 0; // Initialize sum variable
    for (let num of arr) { // Loop through each number in the array
        sum += num; // Add each number to the sum
    }
    return sum; // Return the total sum
}

// Function to subtract two numbers
function subtractNumbers(a, b) {
    return a - b; // Return the difference between a and b
}

// Function to multiply two numbers
function multiplyNumbers(a, b) {
    return a * b; // Return the product of a and b
}

// Function to divide two numbers, handling division by zero
function divideNumbers(a, b) {
    if (b === 0) { // Check if the divisor is zero
        return "Cannot divide by zero"; // Return error message if division by zero
    }
    return a / b; // Return the result of division
}

let numbers = [25, 10, 2]; // Array of numbers

let sum = findSum(numbers); // Calculate the sum of the numbers
console.log("Sum:", sum); // Output the sum

let difference = subtractNumbers(numbers[0], numbers[1]); // Calculate the difference between the first and second number
console.log("Difference:", difference); // Output the difference

let product = multiplyNumbers(numbers[2], numbers[0]); // Calculate the product of the third and first number
console.log("Product:", product); // Output the product

let divisionResult = divideNumbers(sum, numbers[2]); // Calculate the division result of the sum and the third number
console.log("Division result:", divisionResult); // Output the division result