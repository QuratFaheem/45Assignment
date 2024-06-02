var names_array = ["Hadiqa", "Atif Aslam", "Britney Spears", "Enrique", "Shakira"];
function show_magicians(names) {
    if (names !== undefined)
        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
}
show_magicians(names_array);
