function calculate(num1, num2, operation, callback) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return callback(new Error("Division by zero is not allowed"), null);
            }
            result = num1 / num2;
            break;
        default:
            return callback(new Error("Invalid operation"), null);
    }

    callback(null, result);
}

// Example usage:
calculate(10, 5, 'add', function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log("Result:", result); // Output: Result: 15
    }
});