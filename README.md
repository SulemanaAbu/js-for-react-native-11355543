# 11355543
## Task 1 explanation
### Description
This project contains a JavaScript function that processes an array of numbers. Each even number is squared, and each odd number is tripled.

## Function Definition

### `processArray(arr)`
- **Input:** An array of numbers (`arr`).
- **Output:** A new array where each even number is squared and each odd number is tripled.

Inside the function, we use the `map` method to create a new array by transforming each element in the input array.

### Conditional Logic
- For each number in the array, we check if it's even or odd using the modulo operator (`%`).
- If the number is even (`num % 2 === 0`), we square it (`num * num`).
- If the number is odd, we triple it (`num * 3`).


## Task 2

### Description

This project contains JavaScript functions for manipulating arrays of numbers and strings.

### Function Definition

#### `processArray(arr)`

- This function takes an array of numbers (`arr`) as an argument.
- It returns a new array where each even number is squared, and each odd number is tripled.

#### `formatArrayStrings(strings, numbers)`

- This function takes two arrays as arguments: an array of strings (`strings`) and an array of numbers processed by `processArray` (`numbers`).
- It modifies each string based on its corresponding number: capitalizing the entire string if the number is even, and converting the string to lowercase if the number is odd.

## Task 3

This project contains a JavaScript function for creating user profiles based on original names and modified names.

### Function Details

#### `createUserProfiles(names, modifiedNames)`

- This function takes two arrays as arguments: an array of original names (`names`) and an array of modified names (`modifiedNames`).
- It creates an array of user profiles, where each profile contains the original name, modified name, and an auto-incremented ID starting from 1.




