// arrayManipulation.js

// Function to process an array of numbers
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            // Even number, square it
            return num * num;
        } else {
            // Odd number, triple it
            return num * 3;
        }
    });
}

// Example usage
let inputArray = [1, 2, 3, 4, 5];
let processedArray = processArray(inputArray);
console.log(processedArray);  // Output: [3, 4, 9, 16, 15]

