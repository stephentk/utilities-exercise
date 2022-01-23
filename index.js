const arrayOne = require('./utilities/array1');
const arrayTwo = require('./utilities/array2');

const largestNumber =  arrayOne.largeNumber([3,5,1,4,10])
const cutting = arrayOne.cut3([3,5,6,7,4])
const sum = arrayTwo.sum([3,5,4,4])
const concat = arrayTwo.concat(["good"],["bye"])


console.log(cutting);
console.log(largestNumber);
console.log(sum);
console.log(concat);