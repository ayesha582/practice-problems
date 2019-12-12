// 'hello'.streamify(3); -> hellohellohello
// sum(2, 3) = 5
// sum(2)(3) = 5
// Array.prototype.filter = function () {}
// Train-Platform Question - Algo
// SQL queries
// KMP


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
 * http2
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
 * setTimeout and setInterval
 * process.nextTick and setImmediate
 * Indexes - how are they helpful and what are they - structure?
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


/**
 *
 * Wikipedia - 7GB read it and save it to csv file and save that in DB
 * Design your own JWT TOKEN Service
 * Increase throughput, request per seconds
 * socket.io, rabbitMQ, databases
 * daily routine or work like ??
 *
 * **** */


 /****
  * Why do you use react ??
  * Redux Middlewares - write your own ??
  * FlexBox, Make a Donut
  * How rendering works ??
  * Actions / Reducer
  * Improve the performance of frontend app.
  * Secondary Index / Primary Index ??
  * B+ tree working ??
  * NodeJS - Event Loop - working ??
  * div -> div - arrange inner most div to be in aligned vertically and horizontally center
  * Memoized module - which takes a function
  */

  // https://leetcode.com/discuss/interview-question/313216/

  /****
   * Grofers Glassdoor -
   * Primary Index/ Secondary Index etc.
   * Write code to get all possible permutations of a given string in lexicographical order
   * Binary Search Tree
   * Binary Tree
   * B+ Tree
   * Insert a node in sorted circular linked list
   */


   /**** Questions to ask any Head - CEO / CTO etc.
    * There are many products - for collections, disbursals. What are the other products in pipeline ?
    * What is next for Cashfree ?
    * How is the culture at Cashfree ?
    * What will be my learning trajectory ?? ( Not sure about this )
    */
