// Exercise 1.19
// Fibonacci algorithm in logarithmic number of steps.

function fib(n) {
    return fib_iter(1, 0, 0, 1, n);
}

function fib_iter(a, b, p, q, count) {
    if (count === 0) return b;
    if (is_even(count)) {
        // Square the transformation
        const new_p = p * p + q * q;
        const new_q = 2 * p * q + q * q;
        return fib_iter(a, b, new_p, new_q, Math.floor(count / 2));
    } else {
        // Apply the transformation
        const new_a = b * q + a * q + a * p;
        const new_b = b * p + a * q;
        return fib_iter(new_a, new_b, p, q, count - 1);
    }
}

function is_even(n) {
    return n % 2 === 0;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(5));
console.log(fib(10));
console.log(fib(50)); 