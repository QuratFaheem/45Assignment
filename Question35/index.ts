

// Animals names in array
let animals: string[] = ["Dog", "Cat", "Rabbit","Goat"];

// Printing animals name using a for loop
console.log("Names of the animals:");
for (let animal of animals) {
    console.log(animal);
}

// printing a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print a sentence about what these animals have in common
console.log("\nThese animals would make a great pet! The common thing between them is, they are cute");
