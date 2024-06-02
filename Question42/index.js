var names_array = ["Hadiqa", "Atif Aslam", "Britney Spears", "Enrique", "Shakira"];
function make_great(magicians_array) {
    for (var i = 0; i < magicians_array.length; i++) {
        magicians_array[i] = magicians_array[i] + " the Great";
    }
}
function show_magicians(names) {
    if (names !== undefined)
        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
}
make_great(names_array);
show_magicians(names_array);
