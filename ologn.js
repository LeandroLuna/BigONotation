// Big O: O(log n)
// Explanation: The loop is O(log n) because it is dividing the number in half each time.

// Recursive function that divides the number by 2 until it reaches 1
function logRecursiveFunc(num, i = 0){
    if(num !== 1){
        console.log(num);
        i++;
        return logRecursiveFunc(Math.floor(num / 2), i);
    }

    return 'Number of operations: ' + i;
}

// Iterative function that divides the number by 2 until it reaches 1
function logInterativeFunc(num){
    i = 0;
    while(num !== 1){
        console.log(num);
        i++;
        num = Math.floor(num / 2);
    }

    return 'Number of operations: ' + i;
}

// Binary Search function that divides the array in half until it finds the value
function binarySearch(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let middleIdx = Math.floor((start + end) / 2);
    let i = 1;

    while(arr[middleIdx] !== val && start <= end){
        i++;
        if(val < arr[middleIdx]) end = middleIdx - 1;
        else start = middleIdx + 1;
        middleIdx = Math.floor((start + end) / 2);
    }


    return arr[middleIdx] === val ? 'Number of operations: ' + i + '\nFound at index: ' + middleIdx : -1;
}

console.log(logRecursiveFunc(10));
console.log('------------------');
console.log(logInterativeFunc(10));
console.log('------------------');
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 6));