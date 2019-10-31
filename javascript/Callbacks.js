// @link https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

// Example

function fn(task, cb) {
  console.log(`Starting to do ${task}`);
  cb(task);
}


function callback(task) {
  console.log(`Finished ${task}`);
}

fn('cooking', callback);

// Custom map function

const myMap = function (cb) {
  this.forEach(elem => {
    cb(elem * 2);
  });
}

Array.prototype.myMap = myMap;


const ab = [1, 2, 3, 4].myMap((elem) => {
  console.log(elem);
});
