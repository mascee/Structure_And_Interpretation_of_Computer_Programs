// Goldbach Conjecture is an unsolved math problem
// that states: Any even number can be represented as a sum of two prime numbers.

function square(n) {
    return n * n;
}

function divides(a, b) {
    return b % a === 0;
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
        ? test_divisor
        : find_divisor(n, test_divisor + 1);
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function is_prime(n) {
    return n > 1 && n === smallest_divisor(n);
}

// Goldbach checker for a single even number
function goldbach(n) {
    if (n <= 2 || n % 2 !== 0) {
        console.log("Please enter an even number greater than 2.");
        return;
    }

    console.log(`Goldbach pairs for ${n}:`);

    for (let i = 2; i <= n / 2; i++) {
        let j = n - i;
        if (is_prime(i) && is_prime(j)) {
            console.log(`${i} + ${j} = ${n}`);
        }
    }
}

// Try with a few even numbers:
for (let n = 4; n <= 2000; n += 2) {
    goldbach(n);
    console.log("--------------");
}