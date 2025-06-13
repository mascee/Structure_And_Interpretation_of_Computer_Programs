function plus(a,b) {return a + b;}
function minus(a, b) {return a-b;}
function a_plus_abs_b(a,b){return (b>0?plus(a,b):minus(a,b));}

a = 5
b = -6

console.log(plus(a,b));
console.log(minus(a,b));
console.log(a_plus_abs_b(a,b));