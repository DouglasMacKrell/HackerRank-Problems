// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. 
// For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would 
// become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. 
// This is called a circular array.

// Given an array n of a integers and a number, d, perform d left rotations on the array. 
// Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns

// int a'[n]: the rotated array
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations.
// The second line contains  space-separated integers, each an .

function rotLeft(a, d) {
  let rotated = a.slice(0, d);
  let remainder = a.slice(d);
  for (let i = 0; i < rotated.length; i++) {
    remainder.push(rotated[i]);
  }
  return remainder;
}