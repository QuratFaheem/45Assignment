function sandwiches() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Your Oredered Sandwich contain: ");
    for (var i = 0; i < ingredients.length; i++) {
        console.log("".concat(ingredients[i], " "));
    }
}
sandwiches("Cheese");
sandwiches("Cheese", "Lettuce", "Tomatoes");
sandwiches("Cheese", "Lettuce", "Origano", "Peproni");
sandwiches("Cheese", "Lettuce", "Chicken", "Onion", "Bell Pepper");
