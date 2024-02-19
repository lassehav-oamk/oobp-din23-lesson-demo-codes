function pureSplice(inputArray, startingIndex, deleteCount) {
  /*
  startingIndex 2
  deleteCount 2
  input [2,5,65,7,2,23,76,8]
  output [2,5,2,23,76,8 ] */

  let outputArray = [];
  for(let i = 0; i < inputArray.length; i++) {
    // if this element should be included in the output array   
    if(i < startingIndex) {
      // add the element to output array
      outputArray.push(inputArray[i])
    } else {
      // skip the element
    }
  }

  return outputArray;
}

const testArray = [2,5,65,7,2,23,76,8];
const result = pureSplice(testArray, 2, 2);
console.log('Starting situation: ' + testArray);
console.log('End situation: ' + result);