// A function f is defined by the rules f(n) = n if n < 3 
// and f(n) = f(n -1) + 2f(n-2) + 3f(n - 3) if n >= 3.
// Write a JavaScript function that computes f by means of a recursive process.
// Write a function that computes f by means of an iterative process.

function f_recursive(n){
    if (n < 3) {
        return n;
    }
    else {
        return f_recursive(n - 1) + 2*f_recursive(n - 2) + 3*f_recursive(n - 3);
    }
}

console.log(f_recursive(1))
console.log(f_recursive(2))
console.log(f_recursive(3))
console.log(f_recursive(4))
console.log(f_recursive(5))