const promise = new Promise((resolve, reject) => { // Changed 'rejects' to 'reject'
    const res = true; 
    if (res) {
        resolve("Promise resolved successfully");
    } else {
        reject(new Error("Promise rejected!")); // Use 'new Error' and match parameter name
    }
});

promise.then(
    (value) => console.log(value), // Changed 'res' to 'value' to match the resolved string
    (err) => console.log(err)
);