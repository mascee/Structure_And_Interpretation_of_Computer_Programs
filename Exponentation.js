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