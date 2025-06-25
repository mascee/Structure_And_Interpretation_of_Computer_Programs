// Exercise 1.29
// h/3[y0 + 4y1 + 2y2 + 4y3 + 2y4 + ... +(yn-2)+(4yn-1) + yn]
// h=(b - a)/n
// yk = f(a+kh). Increasing n increses accuracy of the approximation.
// Declare a function that takes as argument f, a, b and n and returns the value of the integral, computed using Simpson's rule.
// Use this function to integrate cube between 0 and 1 with n = 100 and n = 1000, and compare the results to those
// of the integral function shown above.
function cube(n){
    return n * n * n;
}

// Simpson's Rule function
function Simpson_Rule(f, a, b, n) {
    if (n % 2 !== 0) {
        throw new Error("n must be even for Simpson's Rule.");
    }

    let h = (b - a) / n;
    let sum = f(a) + f(b); // y0 + yn

    for (let k = 1; k < n; k++) {
        let x = a + k * h;
        if (k % 2 === 0) {
            sum += 2 * f(x); // even index
        } else {
            sum += 4 * f(x); // odd index
        }
    }

    return (h / 3) * sum;
}

// Use Simpson's Rule to integrate cube(x) from 0 to 1
function integrate_cube(n) {
    return Simpson_Rule(cube, 0, 1, n);
}

// Try it with n = 100 and n = 1000
console.log("Integral of x^3 from 0 to 1 with n = 100:", integrate_cube(100));
console.log("Integral of x^3 from 0 to 1 with n = 1000:", integrate_cube(1000));