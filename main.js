const readline = require('readline');
const pi = 3.14159;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter radius in cm: ", (radius) => {
  const area = pi * radius * radius;
  console.log("Area of a circle:", area);
  rl.close();
});

const a = 10;
console.log(a)

console.log(5+3+4);
console.log(6/2);

const a = 3;
const b = a + 1;
console.log(a+b+a+b)

function test(a, b) {
    return b >a && b < a*b ?b:a;

}
console.log(test(10, 5))