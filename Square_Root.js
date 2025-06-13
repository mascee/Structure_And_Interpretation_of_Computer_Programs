// function sqrt_iter(guess, x) {
//     return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
// }

// function improve(guess, x) {
//     return average(guess, x / guess);
// }

// function average(x, y) {
//     return (x + y) / 2;
// }

// function is_good_enough(guess, x) {
//     return Math.abs(square(guess) - x) < 0.001;
// }

// function square(x) {
//     return x * x;
// }

// function sqrt(x) {
//     return sqrt_iter(1, x);
// }

// console.log(sqrt(8));


function sqrt(x) {
    function square(y) {
        return y * y;
    }
    function average(a, b) {
        return (a + b) / 2;
    }
    function is_good_enough(guess) {
        return Math.abs(square(guess) - x) < 0.00000000001;
    }
    function improve(guess) {
        return average(guess, x/guess);
    }
    function sqrt_iter(guess) {
        return is_good_enough(guess) ? guess:sqrt_iter(improve(guess));
    }
    return sqrt_iter(1);
}

console.log(sqrt(256))