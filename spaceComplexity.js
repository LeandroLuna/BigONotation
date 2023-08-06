// Space Complexity: O(n)
// Explanation: The function is called recursively n times, so the space complexity is O(n)O(n)O(n)O, left parenthesis, n, right parenthesis.

function countDown(n){
    if (n == 0) return;

    console.log(n)
    return countDown(n-1);
}

countDown(10);