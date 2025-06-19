// Exercise 1.2.5 Greates Common Divisors
function gcd(a, b){
    return b == 0 ? a : gcd(b, a % b);
}

console.log(gcd(206, 40))
console.log(gcd(1515, 15))
console.log(gcd(19, 17))
console.log(gcd(198, 4))
console.log(gcd(2000, 40))
console.log(gcd(541, 13))