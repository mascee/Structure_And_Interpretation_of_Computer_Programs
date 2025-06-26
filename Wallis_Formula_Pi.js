// Wallis formula for pi.

function wallis_pi(n) {
    return 2 * product(
        k => (4 * k * k) / (4 * k * k - 1),
        1, k => k + 1, n
    );
}

function product(term, a, next, b) {
    function iter(x, result) {
        return x > b
            ? result
            : iter(next(x), result * term(x));
    }
    return iter(a, 1);
}

console.log(wallis_pi(10));
console.log(wallis_pi(100));
console.log(wallis_pi(1000));
console.log("Math.PI =", Math.PI);