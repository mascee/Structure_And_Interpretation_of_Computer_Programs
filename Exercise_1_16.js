// Design a function that evolves an iterative exponentation process that uses
// successive squaring and uses a logarithmic nuber of steps,
// as does fast_expt.

function fast_expt_iter(b, n) {
    let result = 1;
    let base = b;
    let exponent = n;

    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result *= base; // multiply result by base if exponent is odd
        }
        base *= base;         // square the base
        exponent = Math.floor(exponent / 2); // halve the exponent
    }

    return result;
}

console.log(fast_expt_iter(2, 10))
console.log(fast_expt_iter(3, 11))
console.log(fast_expt_iter(2, 2))
console.log(fast_expt_iter(4, 33))
console.log(fast_expt_iter(1, 10))