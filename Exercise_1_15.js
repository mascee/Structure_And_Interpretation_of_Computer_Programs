// Order of growth exercise
// The sine of an engle can be computed by making use of the approximation sin = x
// if x is sufficiently small, and the trigonometric identity sin x = 3*sin(x/3)

function cube(x){
    return x * x * x;
}

function p(x){
    return 3 * x - 4 * cube(x);
}

function sine(angle){
    return ! (Math.abs(angle) > 0.1)? angle:p(sine(angle/3));
}

// Compare with Math.sin results
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

const angles = [0.01, 10, 30, 50, 60, 90, 180];

angles.forEach(a => {
    let approx = sine(toRadians(a));
    let actual = Math.sin(toRadians(a));
    console.log(`Angle: ${a}°, sine ≈ ${approx.toFixed(5)}, Math.sin = ${actual.toFixed(5)}`);
});

console.log(sine(0.01))
console.log(sine(10))
console.log(sine(30))
console.log(sine(50))
console.log(sine(60))
console.log(sine(90))
console.log(sine(180))