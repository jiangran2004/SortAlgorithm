'use strict';

const utils = require('./util');
const nums = utils.getRandomNums();

console.log(nums);

function swapNum(nums, index1, index2) {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

function quickSort(nums, begin, end) {
  if (end <= begin) return;
  const flag = nums[begin];
  let i = begin;
  let j = end;
  while (i < j) {
    while (i < j && nums[j] >= flag) {
      j--;
    }
    swapNum(nums, i, j);
    while (i < j && nums[i] <= flag) {
      i++;
    }
    swapNum(nums, i, j);
  }
  quickSort(nums, begin, i);
  quickSort(nums, i + 1, end);
}

quickSort(nums, 0, nums.length - 1);
console.log(nums);
console.log(nums.length);