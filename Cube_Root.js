// (x/y2 + 2y)/3

function cubeRoot(x) {
    let y = x / 3; // Initial guess
    const epsilon = 0.000001; // Desired precision

    while (Math.abs(y * y * y - x) > epsilon) {
        y = (x / (y * y) + 2 * y) / 3;
    }

    return y;
}

let number = 4000000;
console.log(`Cube root of ${number} is approximately ${cubeRoot(number)}`);