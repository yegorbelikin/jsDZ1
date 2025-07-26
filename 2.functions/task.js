function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
}
  let min = arr[0]; 
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for(let i=0; i < arr.length; i++){
  if (arr[i] <= min) {
    min = arr[i];
  } 
  
  if(arr[i] >= max) {
    max = arr[i];
  } 

  sum = sum + arr[i];
  avg = sum / arr.length;
  
}
  
return { min: min, max: max, avg: +(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
}
  let sum = 0;
  
  for(let i=0; i < arr.length; i++){
  sum = sum + arr[i];
}
  
return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
      return 0;
  }
let min = arr[0]; 
let max = arr[0];
let diff = 0;

for(let i=0; i < arr.length; i++){
if (arr[i] <= min) {
  min = arr[i];
} 

if(arr[i] >= max) {
  max = arr[i];
} 

}
diff = max - min;

return diff;

}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
      return 0;
  }
let sumEvenElement = 0; 
let sumOddElement = 0;
let diff = 0;

for(let i=0; i < arr.length; i++){
if (arr[i] % 2 === 0) {
  sumEvenElement += arr[i];
}else {
  sumOddElement += arr[i];
} 

}
diff = sumEvenElement - sumOddElement;

return diff;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
      return 0;
  }
let sumEvenElement = 0; 
let countEvenElement = 0;
let avg = 0;

for(let i=0; i < arr.length; i++){
if (arr[i] % 2 === 0) {
  sumEvenElement += arr[i];
  countEvenElement ++
}

}
avg = sumEvenElement / countEvenElement;

return avg;

}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (maxWorkerResult < funcResult) {
        maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}
