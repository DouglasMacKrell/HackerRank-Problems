
let input1 = 8
let input2 = "UDDDUDUU"

function countingValleys(steps, path) {
  // Write your code here
  let aboveSeaLevel = true;
  let currHeight = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (aboveSeaLevel) {
      if (path[i] === "D") {
        if (currHeight > 0) {
          currHeight -= 1;
        } else {
          aboveSeaLevel = false;
          currHeight -= 1;
        }
      } else {
        currHeight += 1;
      }
    } else {
      if (path[i] === "U") {
        if (currHeight < -1) {
          currHeight += 1;
        } else {
          aboveSeaLevel = true;
          valleys += 1;
          currHeight += 1;
        }
      } else {
        currHeight -= 1;
      }
    }
  }
  return valleys;
}


console.log(countingValleys(input1, input2))