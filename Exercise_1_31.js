// pi/4 = (2*4*4*6*6*8*8...)/(3*3*5*5*7*7...)

function product(term, a, next, b){
    function iter(a, result){
        return a > b
        ? result
        : iter(next(a), result * term(a));
    }
    return iter(a, 1);
}

function pi_over_4(n){
    // Even numbers
    const even = x => 2 + x * 2;
    // Odd numbers
    const odd = x => 3 + x * 2;

    const numerator = product(k => even(k) * even(k), 0, k => k + 1, n);
    const denominator = product(k => odd(k) * odd(k), 0, k => k + 1, n);

    return numerator / denominator;
}

console.log(pi_over_4(10));
console.log(pi_over_4(20));
console.log(pi_over_4(30));
console.log(pi_over_4(40));
console.log(pi_over_4(50));


