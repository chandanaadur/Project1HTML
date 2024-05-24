// Example of if statement
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

// Example of if-else statement
let isMember = true;

if (isMember) {
  console.log("Welcome, member!");
} else {
  console.log("Please sign up to become a member.");
}

// Example of if-else if-else statement
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Example of switch statement
let day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown day";
}

console.log("Today is " + dayName);