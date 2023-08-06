// Big O: O(n log n)
// Explanation: The outer loop is O(n) and the inner loop is O(log n) so we multiply them to get O(n log n).

function nLogNFunc(num){
   let y = num;

   while(num > 1){
       num = Math.floor(num / 2);
       console.log('Outer loop: ', num);

        for(let i = 0; i < y; i++){
                console.log('Inner loop: ', i);
        }
   }
}

// Merge Sort
function mergeSort(arr){
    if(arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

nLogNFunc(4);
console.log('-'.repeat(10));
console.log(mergeSort([1, 5, 3, 8, 2, 9, 4, 7, 6]));