function analyzeString(inputString) {
    // Calculate and return the length of the string
    const length = inputString.length;

    // Convert the string to lowercase
    const lowercaseString = inputString.toLowerCase();

    // Convert the string to uppercase
    const uppercaseString = inputString.toUpperCase();

    // Check if the string contains the word "javascript"
    const containsJavascript = inputString.toLowerCase().includes('javascript');

    // Count the occurrences of each letter in the string
    const letterCount = {};
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i].toLowerCase();
        if (/[a-z]/.test(char)) {
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    }

    // Return an object containing the results
    return {
        length: length,
        lowercaseString: lowercaseString,
        uppercaseString: uppercaseString,
        containsJavascript: containsJavascript,
        letterCount: letterCount
    };
}

// Example usage:
const input = "JavaScript is a programming language";
const analysisResult = analyzeString(input);
console.log(analysisResult);