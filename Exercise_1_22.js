// Exercise 1_22. Timed prime
function timed_prime_test(n) {
    return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
    if (is_prime(n)) {
        display(n);  // Only display primes
        return report_prime(get_time() - start_time);
    }
    return false;
}

function report_prime(elapsed_time){
    display(" *** ");
    display(elapsed_time);
}

function is_prime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function get_time() {
    return new Date().getTime();
}

function display(x) {
    console.log(x);
}


// Write search_for_primes function that checks the primality of consecutive odd integers
// in a specified range.
// Use the function to find the three smallest primes larger than 1000; larger than 10000; larger than 100000; 
// larger than 1000000.
// Note the time needed to test each prime.

function search_for_primes(n) {
    let count = 0;
    let candidate = n % 2 === 0 ? n + 1 : n + 2; // next odd number

    while (count < 3) {
        if (timed_prime_test(candidate)) {
            count += 1;
        }
        candidate += 2; // check next odd number
    }
}

console.log(search_for_primes(1000));
console.log(search_for_primes(10000));
console.log(search_for_primes(100000));
console.log(search_for_primes(1000000));