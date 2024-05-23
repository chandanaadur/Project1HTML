let names = ["john", "jane", "doe", "alice", "bob"];

// Print all the names in the array to the console, each on a new line
names.forEach(name => console.log(name));

// Add the name "eve" to the end of the array
names.push("eve");

// Remove the name "doe" from the array
names = names.filter(name => name !== "doe");

// Sort the array in alphabetical order
names.sort();

// Check if the name "alice" exists in the array
if (names.includes("alice")) {
    console.log("alice is present");
} else {
    console.log("alice is not present");
}

// Convert all the names to uppercase and store them in a new array named uppercaseNames
let uppercaseNames = names.map(name => name.toUpperCase());

// Print the uppercaseNames array to the console
console.log(uppercaseNames);