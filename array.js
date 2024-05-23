// Initialize an array named numbers with the given values
let numbers = [10, 5, 8, 3, 12, 6];

// Print the length of the array to the console
console.log("Length of the array:", numbers.length);

// Add number 7 to the end of the array
numbers.push(7);
console.log("Array after adding 7:", numbers);

// Remove the first element of the array
numbers.shift();
console.log("Array after removing the first element:", numbers);

// Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log("Array after sorting in ascending order:", numbers);

// Reverse the array
numbers.reverse();
console.log("Array after reversing:", numbers);

// Check if number 8 exists in the array
if (numbers.includes(8)) {
    console.log("Number 8 exists in the array.");
} else {
    console.log("Number 8 doesn't exist.");
}

// Find the index of the number 12 in the array and print it to the console
let index12 = numbers.indexOf(12);
if (index12 !== -1) {
    console.log("Index of number 12 in the array:", index12);
} else {
    console.log("Number 12 doesn't exist in the array.");
}

// Create a new array named doubledNumbers by doubling each number in the numbers array
let doubledNumbers = numbers.map(number => number * 2);
console.log("Array of doubled numbers:", doubledNumbers);