// Exercise 1.2.4
// Computes the exponentioal of a given number.

//Linear recursive process
function exp(b, n){
    return n == 0 ? 1 : b * exp(b, n-1);
}

console.log('Linear recursion, Exponents of 2: ')
console.log(exp(2, 0))
console.log(exp(2, 1))
console.log(exp(2, 2))
console.log(exp(2, 3))

// Linear iteration
function expt(b, n){
    return expt_iter(b, n, 1);
}
function expt_iter(b, counter, product){
    return counter == 0 ? product : expt_iter(b, counter - 1, b * product);
}

console.log('Linear iteration, Exponents of 3: ')
console.log(expt(3, 0))
console.log(expt(3, 1))
console.log(expt(3, 2))
console.log(expt(3, 3))
console.log(expt(3, 4))

// Optimizing for odd and even numbers
function fast_expt(b, n){
    return n == 0 ? 1 : is_even(n) ? square(fast_expt(b, n/2)):b * fast_expt(b, n-1);
}
function is_even(n){
    return n % 2 == 0;
}
function square(x){
    return x * x;
}

console.log('Testing odd and even numbers: ')
console.log(fast_expt(3, 0))
console.log(fast_expt(3, 1))
console.log(fast_expt(3, 2))
console.log(fast_expt(3, 3))
console.log(fast_expt(3, 4))

console.log(fast_expt(2, 0))
console.log(fast_expt(2, 1))
console.log(fast_expt(2, 2))
console.log(fast_expt(2, 3))
console.log(fast_expt(2, 4))

// Adding negative exponents
function all_fast_expt(b,n){
    if (n=== 0) return 1;
    if (n < 0) return 1 / all_fast_expt(b, -n);
    if (n % 2 === 0){
        let half = all_fast_expt(b, n/2);
        return half * half;
    }
    else{
        return b * all_fast_expt(b, n-1);
    }
}

console.log('Testing negaive exponents')
console.log(all_fast_expt(-2, 2))
console.log(all_fast_expt(2, -2))
console.log(all_fast_expt(0.5, 2))