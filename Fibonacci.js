function fib(n){
    return n == 0 ? 0 : n == 1 ? 1 : fib(n -1 ) + fib(n - 2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));

// Linear iteration Fibonacci
function fib_linear(n) {
    return fib_iter(1, 0, n);
}
function fib_iter(a, b, count) {
    return count == 0 ? b : fib_iter(a + b, a, count - 1);
}

console.log(fib_linear(8))

