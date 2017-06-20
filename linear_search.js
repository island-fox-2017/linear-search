'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  //console.log(values);
  for (var i = 0; i < values.length; i++) {
    //console.log(`masuk for`);
    if (target == values[i]) {
      return i
    }
  }
  return -1
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(37, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
//console.log(`values ====> ${values}`);
  //write your code here
  var tamp = [];
  for (var i = 0; i < values.length; i++) {
    //console.log(`masuk for`);
    // console.log(target);
    // console.log(values[i]);
    if (target == values[i]) {
      // console.log(`masuk if`);
      tamp.push(i)
  }
  }
  return tamp
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
