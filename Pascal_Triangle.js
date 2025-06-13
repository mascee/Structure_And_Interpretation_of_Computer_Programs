function pascal(row, column){
    if (row == 1 || column == 1){
        return 1;
    }
    else {
        return pascal(row - 1, column - 1) + pascal(row - 1, column);
    }
}

console.log(pascal(1, 1));
console.log(pascal(1, 2));
console.log(pascal(2, 1));
console.log(pascal(2, 2));
console.log(pascal(3, 1));
console.log(pascal(1, 3));
