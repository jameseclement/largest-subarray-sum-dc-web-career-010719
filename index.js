function largestSubarraySum(arr) {
  let sub = [];
  let sum = 0;
  let maxsum = 0;
  debugger;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] + sum > 0) {
      sub = [...sub, arr[i]];
      sum += arr[i];
    } else {
      maxsum = sum;
      sum = 0;
      sub = [];
    }
  }
  if (sum > maxsum) {
    return sum;
  } else {
    return maxsum;
  }
}

// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4, 99];
