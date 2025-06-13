function count_change(amount) {
    return cc(amount, 5);
}

function cc(amount, kinds_of_coins) {
    if (amount === 0) {
        return 1;
    } else if (amount < 0 || kinds_of_coins === 0) {
        return 0;
    } else {
        return cc(amount, kinds_of_coins - 1) +    // skip current coin
               cc(amount - first_denomination(kinds_of_coins), kinds_of_coins); // use current coin
    }
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 1
         : kinds_of_coins === 2 ? 5
         : kinds_of_coins === 3 ? 10
         : kinds_of_coins === 4 ? 25
         : kinds_of_coins === 5 ? 50
         : 0;
}

console.log(count_change(100));
