// 'hello'.streamify(3); -> hellohellohello
// sum(2, 3) = 5
// sum(2)(3) = 5
// Array.prototype.filter = function () {}
// Train-Platform Question - Algo
// SQL queries


/***
 *
 * Find supercells for the given matrix
 *
 * 0 0 0
 * 1 0 0
 * 0 0 0
 * 1 0 1
 *
 * Output - 2 - (0,1) (2,1)
 *
 * cors, cookie vs session, CDNs, JSON, HashMaps and how conflicts are resolved
 *
 * function timeoutPromise(promise, timeout)
 *
 * if timeout expires first then reject with error
 * else resolve with the result from promise
 *
 * regex for validating the mobile number
 *
 *
 * ** */


/**
 *
 * difference b/w - promises callbacks
 * difference b/w - promises async/await
 * unique index, primary index
 * composite index
 * migrate a table with billion records, app must not crash, no of request is uniform i.e. peak
 * - add a new column and set default value to it
 * my solution - alter the table first, then update them in batches
 *
 * ** */


const request = require('request');


function timeoutPromise(promise, timeout) {
  return new Promise(async(resolve, reject) => {
    setTimeout(() => {
      return reject('timeout exceeded');
    }, timeout);

    const res = await promise;
    return resolve(res);
  });
}

const promise = new Promise((resolve, reject) => {
  request.get('https://www.google.com', (err, res, body) => {
    if (err) return reject(err);
    return resolve(body);
  });
});

const timeout = 2000;


timeoutPromise(promise, timeout).then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});
