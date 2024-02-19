function pureSplice(inputArray, startingIndex, deleteCount) {
  /*
  startingIndex 2
  deleteCount 2
  input [2,5,65,7,2,23,76,8]
  output [2,5,2,23,76,8 ] */

  let outputArray = [];
  for(let i = 0; i < inputArray.length; i++) {
    // if this element should be included in the output array   
    if(i < startingIndex || i >= (startingIndex + deleteCount)) {
      // add the element to output array
      outputArray.push(inputArray[i])
    } else {
      // skip the element
    }
  }

  return outputArray;
}

function pureSplice2(inputArray, startingIndex, deleteCount) {
  // copy the inputArray
  let outputArray = [...inputArray];

  // run the original splice on the copied array
  outputArray.splice(startingIndex, deleteCount);
  return outputArray;
}

const testArray = [2,5,65,7,2,23,76,8];
const result = pureSplice2(testArray, 2, 2);
console.log('Starting situation: ' + testArray);
console.log('End situation: ' + result);