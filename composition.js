const { compose } = require('ramda');

// const getPositivesAndDouble = nums => {
//   return nums.filter(num => num > 0).map(num => num * 2);
// };

const getPositives = nums => nums.filter(num => num > 0);
const doubleNums = nums => nums.map(num => num * 2);

const getPositivesAndDouble = nums => {
  return compose(
    getPositives,
    doubleNums
  )(nums);
};

console.log(getPositivesAndDouble([10, -3, -1000, 6, 21, 7, 9, -11, 5]));
