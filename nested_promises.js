const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 6000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 3000);
});

//Console log before calling the promises
console.log("Before calling promises");

// Call first promise
myPromise1.then((successMessage) => {
  console.log("From Callback " + successMessage);
  myPromise2.then((successMessage) => {
    console.log("From Callback " + successMessage);
  });
});

//Console log after calling the promises
console.log("After calling promises");  

