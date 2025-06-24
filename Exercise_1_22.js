// Exercise 1.22
// Use the smallest_divisor function to find the smallest divisor of each of the
// following numbers: 199, 1999, 19999


function smallest_divisor(n){
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor){
    return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
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

console.log('Testing 25, 17, 16, 199, 1999, 19999: ')
console.log(smallest_divisor(25))
console.log(smallest_divisor(17))
console.log(smallest_divisor(16))
console.log(smallest_divisor(199))
console.log(smallest_divisor(1999))
console.log(smallest_divisor(19999))

console.log('Testing prime function: ')
console.log(is_prime(17))
console.log(is_prime(25))