function createCar(manufacturer: string, 
                    model: string,
                     ...additionalProperties: [string, any][]): object
                      {
    // Initialize the car object with required properties
                        let car = { manufacturer, model };

    // Add additional properties to the car object
    additionalProperties.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Example usage
let myCar1 = createCar('Toyota', 'Corolla', ['color', 'blue'], ['sunroof', true],['Year', 2001]);
console.log(myCar1);

let myCar2 = createCar('Suzuki', 'Mehran', ['color', 'White'], ['Year', 2020]);
console.log(myCar2);



