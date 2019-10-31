Array.prototype.square = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i] * this[i]);
  }
};


[1, 2, 3, 4].square(elem => {
  console.log(elem);
});
