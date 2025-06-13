// Declare a function that takes 3 numbers as arguments and returns the sum of the squares
// of the 2 larger numbers.

function sum_of_squares(x, y, z){
    if (x > y && y > z)
    {
        return (x*x + y*y);
    }
    else if (x < y && y < z)
    {
        return (y*y + z*z);
    }
    else if (x > y && z > y)
    {
        return (x*x + z*z);
    }
}

console.log(sum_of_squares(2, 3, 4));