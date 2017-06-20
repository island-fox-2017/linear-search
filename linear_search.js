'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  for (var i = 0; i < values.length; i++) {
    if(values[i] == target) {
      return i

    }
  } return -1
  //write your code here
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(19, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
var index = [];
let globalLinearSearch = (target, values) => {
  for (var i = 0; i < values.length; i++) {
    if(values[i] == target) {
      index.push(i);
    }
  }
  return index
  //write your code here
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
