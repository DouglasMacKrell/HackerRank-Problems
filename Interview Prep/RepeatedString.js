// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

// There is a string, s, of lowercase English letters that is repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first
// letters of the infinite string.

// Example
// s = "abcac"
// n = 10

// The substring we consider is "abcacabcac", the first 10 characters of the infinite string.
// There are 4 occurrences of "a" in the substring.

function repeatedString(s, n) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      counter += 1;
    }
  }
  if (n % s.length === 0) {
    let multiplier = n / s.length;
    return counter * multiplier;
  } else {
    let remainder = n % s.length;
    let multiplier = Math.floor(n / s.length);
    let extra = 0;
    for (let j = 0; j < remainder; j++) {
      if (s[j] === "a") {
        extra += 1;
      }
    }
    return counter * multiplier + extra;
  }
}
