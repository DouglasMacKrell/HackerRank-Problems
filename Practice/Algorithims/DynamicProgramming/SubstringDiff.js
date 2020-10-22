// Substring Diff
// https://www.hackerrank.com/challenges/substring-diff/problem

// In this problem, we'll use the term "longest common substring"
// loosely. It refers to substrings differing at some number or
// fewer characters when compared index by index. For example,
// 'abc' and 'adc' differ in one position, 'aab' and 'aba' differ in two.

// Given two strings and an integer k, determine the length of the
// longest common substrings of the two strings that differ in no
// more than k positions.

// For example, k = 1. Strings s1 = "abcd" and s2 = "bbca".
// Check to see if the whole string (the longest substrings) matches.
// Given that neither the first nor last characters match and 2 > k,
// we need to try shorter substrings.
// The next longest substrings are s1 = [abc, bcd] and s2 = [bbc, bca].
// Two pairs of these substrings only differ in 1 position: [abc, bbc] and [bcd, bca].
// They are of length 3.

// Function Description

// Complete the substringDiff function in the editor below.
// It should return an integer that represents the length
// of the longest common substring as defined.

// substringDiff has the following parameter(s):

// k: an integer that represents the maximum number of
// differing characters in a matching pair
// s1: the first string
// s2: the second string

// Input Format

// The first line of input contains a single integer, , the number of test cases follow.
// Each of the next  lines contains three space-separated values: an integer  and two strings,  and .

// Constraints

// All characters in  and .
// Output Format

// For each test case, output a single integer which is the length of the maximum length common substrings differing at  or fewer positions.

// Sample Input

// 3
// 2 tabriz torino
// 0 abacba abcaba
// 3 helloworld yellomarin
// Sample Output

// 4
// 3
// 8
// Explanation

// First test case: If we take "briz" from the first string, 
// and "orin" from the second string, then the number of mismatches 
// between these two substrings is equal to 2 and their lengths are .

// Second test case: Since , we should find the longest common substring, standard definition, for the given input strings. We choose "aba" as the result.

// Third test case: We can choose "hellowor" from first string and "yellomar" from the second string.

function substringDiff(k, s1, s2) {
  let arrA = [];
  let arrB = [];

  const substringCheck = (target, str1, str2) => {
    let counter = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        counter += 1;
      }
    }
    if (counter <= target) {
      return true;
    } else {
      return false;
    }
  };

  const arrCheck = (limit, arr1, arr2) => {
    for (let j = 0; j < arr1.length; j++) {
      for (let m = 0; m < arr2.length; m++) {
        if (substringCheck(limit, arr1[j], arr2[m])) {
          return true;
        }
      }
    }
    return false;
  };

  for (let h = 0; h < s1.length; h++) {
    if (h === 0) {
      if (substringCheck(k, s1, s2)) {
        return s1.length;
      }
    } else if (h !== 0) {
      if (arrCheck(k, arrA, arrB)) {
        return arrA[0].length;
      } else {
        arrA = [];
        arrB = [];
        for (let l = 0; l <= h; l++) {
          console.log(h);
          arrA.push(s1.slice(l, s1.length - h + l));
          console.log("ArrA:", arrA);
          arrB.push(s2.slice(l, s2.length - h + l));
          console.log("ArrB:", arrB);
        }
      }
    }
  }
}

console.log(substringDiff(2, "tabriz", "torino"));
