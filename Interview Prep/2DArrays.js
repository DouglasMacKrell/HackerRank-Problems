// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

// Example


// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// The  hourglass sums are:

// -63, -34, -9, 12, 
// -10,   0, 28, 23, 
// -27, -11, -2, 10, 
//   9,  17, 25, 18
// The highest hourglass sum is  from the hourglass beginning at row , column :

// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Function Description

// Complete the function hourglassSum in the editor below.

// hourglassSum has the following parameter(s):

// int arr[6][6]: an array of integers
// Returns

// int: the maximum hourglass sum

function hourglassSum(arr) {
  let sums = [];
  const findSum = (hourglass) => {
    let sum = 0;
    for (let i = 0; i < hourglass.length; i++) {
      sum += hourglass[i];
    }
    return sum;
  };
  for (let j = 0; j < arr.length; j++) {
    if (j + 2 <= arr.length - 1) {
      for (let k = 0; k < arr[j].length; k++) {
        if (k + 2 <= arr[j].length - 1) {
          let hGlass = [
            arr[j][k],
            arr[j][k + 1],
            arr[j][k + 2],
            arr[j + 1][k + 1],
            arr[j + 2][k],
            arr[j + 2][k + 1],
            arr[j + 2][k + 2],
          ];
          console.log(hGlass);
          sums.push(findSum(hGlass));
        }
      }
    }
  }
  let sortedSums = sums.sort((a, b) => a - b);
  return sortedSums[sortedSums.length - 1];
}