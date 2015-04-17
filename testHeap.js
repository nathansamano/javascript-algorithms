require('./sort.js').foo;
var sort = require('./src/sorting/heapsort.js').heapSort;
console.log(sort([2,5,1,0,4]));

var arr = new CArray(50);
arr.setDate();
console.log(arr.toString());
console.log(sort(arr));
