function plus(a, b) {
    return a == 0 ? b : inc(plus(dec(a), b));
}
function inc(x) {
    return x + 1;
}

function dec(x) {
    return x - 1;
}

console.log(plus(4, 5));

function another_plus(a, b) {
    return a == 0 ? b : plus(dec(a), inc(b));
}

console.log(another_plus(4, 5));