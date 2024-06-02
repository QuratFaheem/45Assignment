// Animals names in array
var animals = ["Dog", "Cat", "Rabbit", "Goat"];
// Printing animals name using a for loop
console.log("Names of the animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// printing a statement about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Print a sentence about what these animals have in common
console.log("\nThese animals would make a great pet! The common thing between them is, they are cute");
