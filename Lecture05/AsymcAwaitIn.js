function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    // logic
    return 42;
}

async function run() {
    // logic
    console.log("Start!!");
    await promiseTimeout(5000);
    //try to take await out and see
    const response = await longRunningOperation();
    console.log("This answer is  :",response);

    console.log("Stop!!");
}

run();