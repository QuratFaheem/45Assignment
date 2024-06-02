console.log("Writing Conditional Tests");
// Tests with Strings
console.log("Is 'Typescript' string is equal to 'Typescript' string");
console.log("Typescript" == "Typescript");
//Test with lowercase funciton
console.log("Typescript".toLowerCase() == "Typescript");
//Numerical conditional tests
console.log("55 > 45", 55 > 45);
console.log("90 < 10", 90 < 10);
console.log("5 is <= 5", 5 <= 5);
console.log("1>=5 ", 1 >= 5);
console.log("3 < 6 and 3> 6 ", 3 < 6 && 3 > 6);
console.log("9 <=8 OR 9==9", 9 <= 8 || 9 == 9);
console.log(" test true and false results", true && false);
console.log(" test true and true results", true && true);
console.log(" test true OR false results", true || false);
console.log(" test true OR true results", true || true);
//Now tests element in array
var frnds = ["Sana", "Sara", "Sania", "Saima", "Saiqa"];
console.log("'Sara' is in array :", frnds.includes("Sara"));
console.log("'Sara' is not in array :", !frnds.includes("Sara"));
