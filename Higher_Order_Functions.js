// Examples of higher order functions

function sum_of_integers(a, b){
    return a > b 
    ? 0
    : a + sum_of_integers(a + 1, b);
}
console.log(sum_of_integers(1, 100))

function sum_of_cubes(a, b){
    return a > b
    ? 0
    : cube(a) + sum_of_cubes(a + 1, b)
}
function cube(a){
    return a * a * a;
}
console.log(sum_of_cubes(3, 10))

// pi/8
function pi_sum(a, b){
    return a > b
    ? 0
    : 1 / (a *(a + 2)) + pi_sum(a + 4, b);
}
console.log(pi_sum(1, 100))

// using sum for sum of cubes
function sum(term, a, next, b){
    return a > b
    ? 0
    : term(a) + sum(term, next(a), next, b);
}

function inc(n){
    return n + 1;
}
function sum_cubes(a,b){
    return sum(cube, a, inc, b);
}
console.log(sum_cubes(1, 10))

function identity(x){
    return x;
}
function sum_integers(a, b){
    return sum(identity, a, inc, b);
}
console.log(sum_integers(1, 10))

function pi_sum_again(a, b){
    function pi_term(x){
        return 1/(x * (x + 2));
    }
    function pi_next(x){
        return x + 4;
    }
    return sum(pi_term, a, pi_next, b);
}
console.log(pi_sum_again(1, 100))

function integral(f, a, b, dx){
    function add_dx(x){
        return x + dx;
    }
    return sum(f, a + dx/2, add_dx, b) * dx;
}
console.log('Integral: ')
console.log(integral(cube, 0, 1, 0.01));
console.log(integral(cube, 0, 1, 0.001));