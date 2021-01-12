// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// There is a new mobile game that starts with consecutively numbered clouds. 
// Some of the clouds are thunderheads and others are cumulus. 
// The player can jump on any cumulus cloud having a number that is equal to 
// the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. 
// Determine the minimum number of jumps it will take to jump from the starting postion 
// to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

// Example

// Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .

// Function Description

// Complete the jumpingOnClouds function in the editor below.

// jumpingOnClouds has the following parameter(s):

// int c[n]: an array of binary integers

function jumpingOnClouds(c) {
    let counter = 0;
    if (c.length === 0) {
        return counter;
    }
    for (let i = 0; i < c.length; i++) {
        if (c[i] === 0) {
            if (c[i + 1] === 0) {
                if (c[i + 2] === 0) {
                    console.log("jump 2")
                    counter += 1;
                    console.log("increment")
                    i += 1;
                } else {
                    console.log("+2 is Thunder jump 1")
                    counter += 1;
                    console.log("increment")
                }
            } else {
                console.log("+1 is Thunder no jump")
                counter += 1;
                console.log("increment")
            }
        } else {
            console.log("THUNDER")
            continue;
        }
    }
    return counter - 1;

}
