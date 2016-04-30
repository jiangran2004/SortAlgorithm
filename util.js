'use strict';

exports.getRandomNums =  function() {
  const result = [];
  for (let i=0; i<100; i++) {
    result.push(Math.round(Math.random() * 100));
  }
  return result;
};
