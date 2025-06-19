// Ferma's Little Theorem: If 'n' is a prime number and 'a' is any positive integer less then 'n',
// then 'a' raised to the n-th power is congruent to 'a' modulo n.
// Two numbers are said to be congruent modulo n if they both have the same remainder when divided by n.
// The remainder of 'a/n' is also referred as the remainder of a modulo n, or as 'a modulo n'.

// function that computes exponent
function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
        ? square(expmod(base, exp / 2, m)) % m
        : (base * expmod(base, exp - 1, m)) % m;
}

function is_even(n) {
    return n % 2 === 0;
}

function square(n) {
    return n * n;
}

function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n - 1, n) === 1;
    }

    const a = 1 + Math.floor(Math.random() * (n - 2)); // ensures 1 < a < n
    return try_it(a);
}

function fast_is_prime(n, times) {
    if (n <= 1) return false;
    if (n === 2) return true;

    return times === 0
        ? true
        : fermat_test(n)
        ? fast_is_prime(n, times - 1)
        : false;
}

// test cases
console.log("Is 7 prime?", fast_is_prime(7, 5)); 
console.log("Is 15 prime?", fast_is_prime(15, 5));
console.log("Is 561 prime?", fast_is_prime(561, 5));
console.log("Is 17 prime?", fast_is_prime(17, 5))

