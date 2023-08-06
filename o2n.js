// Big O: O(2ˆn)
// Description: This function calculates the nth number in the Fibonacci sequence.

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

