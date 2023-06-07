// Creating a promise
const fetchData = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        // Check if the operation was successful
        const success = Math.random() < 0.5; // 50% chance of success

        if (success) {
            // Resolve the promise with the data
            const data = { name: 'John', age: 25 };
            resolve(data);
        } else {
            // Reject the promise with an error
            const error = new Error('Failed to fetch data');
            reject(error);
        }
    }, 2000); // Simulating a 2-second delay
});

// Using the promise
fetchData
    .then((data) => {
        // Promise was fulfilled (resolved)
        console.log('Data:', data);
    })
    .catch((error) => {
        // Promise was rejected
        console.log('Error:', error.message);
    });
