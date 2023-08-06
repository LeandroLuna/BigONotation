// Big O: O(n!)
// Explanation: The function is called recursively n times, so the time complexity is O(n!)

function factorialFunc(n) {
    if(n === 0){
        return 1;
    }

    for(let i = 0; i < n; i++){
        factorialFunc(n - 1)
    }
}

console.log(factorialFunc(3));