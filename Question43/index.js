var names_array = ["Hadiqa", "Atif Aslam", "Britney Spears", "Enrique", "Shakira"];
function make_great(my_array) {
    var greatmagicians = [];
    for (var i = 0; i < my_array.length; i++) {
        greatmagicians.push("".concat(my_array[i], " the Great"));
    }
    return greatmagicians;
}
function show_magicians(names) {
    if (names !== undefined)
        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
}
var greatmagician = make_great(names_array);
console.log("New modified array");
console.log(greatmagician);
console.log("Original Array");
show_magicians(names_array);
