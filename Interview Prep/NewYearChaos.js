// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if  and  bribes , the queue will look like this: .

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state. If anyone has bribed more than two people, the line is too chaotic to compute the answer.

// Function Description

// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):

// int q[n]: the positions of the people after all bribes
// Returns

// No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the next  pairs of lines are as follows:
// - The first line contains an integer , the number of people in the queue
// - The second line has  space-separated integers describing the final state of the queue.

function minimumBribes(q) {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    let diff = Math.abs(q[i] - (i + 1));
    if (q[i] < i + 1) {
      continue;
    }
    // console.log(diff)
    if (diff >= 0 && diff <= 2) {
      bribes += diff;
    } else {
      console.log("Too chaotic");
      return;
    }
  }
  console.log(bribes);
  return;
}