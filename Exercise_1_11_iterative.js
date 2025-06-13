// A function f is defined by the rules f(n) = n if n < 3 
// and f(n) = f(n -1) + 2f(n-2) + 3f(n - 3) if n >= 3.
// Write a JavaScript function that computes f by means of a recursive process.
// Write a function that computes f by means of an iterative process.

function f_iterative(n){
    if (n < 3){
        return n;
    }
    let f0 = 0;
    let f1 = 1;
    let f2 = 2;
    let current;
    for (let i = 3; i <= n; i++){
        current = f2 + 2*f1 + 3*f0;
        f0 = f1;
        f1 = f2;
        f2 = current;
    }
    return current
}

console.log(f_iterative(4));