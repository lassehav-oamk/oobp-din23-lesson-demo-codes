const values = [533,235,223,56,88,2,6,88,664]; 

function minValue(targetArray) { 
  let min = null; 
  for(let i = 0; i < targetArray.length; i++) { 
    if((min != null) || (targetArray[i] < min)) { 
      min = targetArray[i]; 
    } 
  } 

  return min; 
} 

const minimum = minValue(values);  
console.log(minimum); // 2 