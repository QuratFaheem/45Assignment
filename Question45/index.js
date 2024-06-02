function createCar(manufacturer, model) {
    var additionalProperties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalProperties[_i - 2] = arguments[_i];
    }
    // Initialize the car object with required properties
    var car = { manufacturer: manufacturer, model: model };
    // Add additional properties to the car object
    additionalProperties.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Example usage
var myCar1 = createCar('Toyota', 'Corolla', ['color', 'blue'], ['sunroof', true], ['Year', 2001]);
console.log(myCar1);
var myCar2 = createCar('Suzuki', 'Mehran', ['color', 'White'], ['Year', 2020]);
console.log(myCar2);
