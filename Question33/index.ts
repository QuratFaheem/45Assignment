// Store numbers 1 through 9 in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// USing Loop in Array
for (let number of numbers) {
    // Use if-else chain to determine the proper ordinal ending
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}
