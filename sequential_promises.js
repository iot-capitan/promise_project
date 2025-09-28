let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
    reject("Promise 1 rejected");
  }, 6000);
});

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
    reject("Promise 2 rejected");
  }, 3000);
});

//Console log before calling the promises
console.log("Before calling promises");

// Call first promise
myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage);
})

myPromise1.catch((errorMessage) => {
    console.log("From Catch " + errorMessage);
})

// Call second promise
myPromise2.then((successMessage) => {
    console.log("From Callback " + successMessage);
})

myPromise2.catch((errorMessage) => {
    console.log("From Catch " + errorMessage);
})

//Console log after calling the promises
console.log("After calling promises");