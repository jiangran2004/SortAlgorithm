'use strict';

const utils = require('./util');
const nums = utils.getRandomNums();

console.log(nums);

function mergeSort(nums) {
  if (nums.length === 1) return nums;
  const middle = Math.floor(nums.length / 2);
  const arr1 = mergeSort(nums.slice(0, middle));
  const arr2 = mergeSort(nums.slice(middle));
  const result = [];
  let i=0;
  let j=0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  if (i === arr1.length) return result.concat(arr2.slice(j));
  else return result.concat(arr1.slice(i));
}

const result = mergeSort(nums);
console.log(result);
console.log(result.length);
