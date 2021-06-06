/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case
  if (nums.length === 0) return 1;
  // normal case
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
  // base case
  if (idx === words.length) return longestWord;
  // normal case
  longestWord = Math.max(words[idx].length, longestWord);
  return longest(words, idx + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  // base case
  if (idx >= str.length) return newStr;
  // normal case
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0, revStr = "") {
  // base case
  if (idx == str.length) return str == revStr;
  // normal case
  revStr += str[str.length - 1 - idx];
  return isPalindrome(str, idx + 1, revStr);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0, foundIndex = -1) {
  // base case
  if (idx == arr.length || foundIndex >= 0) return foundIndex;
  // normal case
  if (arr[idx] == val) foundIndex = idx;
  return findIndex(arr, val, idx + 1, foundIndex);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, revStr = "") {
  // base case
  if (idx == str.length) return revStr;
  // normal case
  revStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arrOfStrings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arrOfStrings.push(obj[key]);
    // if this key is an object, recurse
    // and push to arr all of the strings inside
    if (typeof obj[key] === "object")
      arrOfStrings.push(...gatherStrings(obj[key]));
  }
  return arrOfStrings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIndex = 0, rightIndex = arr.length - 1) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  let middleVal = arr[middleIndex];
  // base case
  if (leftIndex == rightIndex && middleVal != val) return -1;
  // normal case
  if (middleVal < val) {
    leftIndex = middleIndex + 1;
    return binarySearch(arr, val, leftIndex, rightIndex);
  } else if (middleVal > val) {
    rightIndex = middleIndex - 1;
    return binarySearch(arr, val, leftIndex, rightIndex);
  } else if (middleVal == val) {
    return middleIndex;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
