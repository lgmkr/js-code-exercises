/* 
  nums =  [10, 2, -2, -20, 10]
  sum =    10  12  10  -10  0
  sum-k =  20  22  20  0    10
  counts = {0:1 10:1 }
  counts = {'0': 1, '10': 1, '12': 1 }
  counts = {'0': 1, '10': 2, '12': 1 }
  counts = {'0': 1, '10': 2, '12': 1, '-10': 1 }
  counts = {'0': 2, '10': 2, '12': 1, '-10': 1 }
*/

// k =  -10
// result = 3
const subarraySum = (nums, k) => {
  const counts = { 0: 1 };
  let sum = 0;
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum - k in counts) {
      count += counts[sum - k];
    }

    counts[sum] = (counts[sum] || 0) + 1;
  }
  return count;
};
module.exports = {
  subarraySum,
};
