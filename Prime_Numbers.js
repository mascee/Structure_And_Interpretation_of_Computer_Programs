// Find prime numbers by finding all divisors

function smallest_divisor(n){
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor){
    return square(test_divisor) > n ? n : divides(test_divisor, n) ? test_divisor : find_divisor(n, test_divisor + 1);
}
function divides(a, b){
    return b % a === 0;
}
function square(n){
    return n * n;
}
function is_prime(n){
    return n === smallest_divisor(n);
}

console.log('Prime numbers: ')
for (let i = 1; i <= 10000; i++) {
    if (is_prime(i)) {      
        console.log(i);
    }
}
