//Define the URL of the dummy API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Function to make the API call
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Use fetch API to make the request
    fetch(url)
      .then(response => {
        // Check if response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Resolve the promise with the data
        resolve(data);
      })
      .catch(error => {
        // Reject the promise with the error
        reject(error);
      });
  });
}

// Call the API using the fetchData function
fetchData(apiUrl)
  .then(data => {
    // Handle the data returned by the API
    console.log('API response:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the API call
    console.error('Error fetching data:', error);
  });