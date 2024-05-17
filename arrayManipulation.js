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

// Function to format an array of strings based on corresponding numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            // Capitalize the entire string
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase
            return str.toLowerCase();
        }
    });
}

// Example usage
let inputStrings = ["Sulemana", "Nii", "JavaScript", "React"];
let inputNumbers = [1, 2, 3, 4];
let formattedStrings = formatArrayStrings(inputStrings, processArray(inputNumbers));
console.log(formattedStrings);  // Output: ['hello', 'WORLD', 'javascript', 'NODE.JS']

