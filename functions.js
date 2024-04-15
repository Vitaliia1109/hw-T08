function findSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

let numbers = [25, 10, 2]

let sum = findSum(numbers);
console.log("Sum:", sum);

let difference = subtractNumbers(numbers[0], numbers[1]);
console.log("Difference:", difference);

let product = multiplyNumbers(numbers[2], numbers[0]);
console.log("Product:", product);

let devisionResult = divideNumbers(sum, numbers[2]);
console.log("Devision result:", devisionResult);