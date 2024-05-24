function reverseString(str) {
    // Use split() to split the string into an array of characters, reverse() to reverse the array, and join() to join the characters back into a string
    return str.split('').reverse().join('');
}

// Testing the function
console.log(reverseString("hello")); 
console.log(reverseString("12345")); 
console.log(reverseString("aabbcc")); 
