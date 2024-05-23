function calculateAge(birthYear, currentYear) {
    // Calculate age
    const age = currentYear - birthYear;
  
    // Return the result string
    return `You are ${age} years old`;
  }
  
  // Test cases
  console.log(calculateAge(1990, 2024)); 
  console.log(calculateAge(2000, 2024)); 
  console.log(calculateAge(1985, 2024)); 
  console.log(calculateAge(1970, 2024));
  console.log(calculateAge(2020, 2024));