const { compose } = require('ramda');

const doubleNums = nums => nums.map(num => num * 2);
const getPositives = nums => nums.filter(num => num >= 0);

// const getPositivesAndDouble = nums => {
//   return doubleNums(getPositives(nums));
// };

const getPositivesAndDouble = nums => {
  return compose(
    getPositives,
    doubleNums
  )(nums);
};

const result = getPositivesAndDouble([10, -3, 5, 42, -1000]);
console.log(result);
