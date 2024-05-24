// Using Async/Await
async function fetchPostUsingAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Post fetched using Async/Await:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchPostUsingAsyncAwait();