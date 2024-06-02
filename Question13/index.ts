//  Q13: Your Own array: Think of your favorite mode of transportation,and make a sentence.
const favtransportation: string[] = [
    "Honda motorcycle",
    "Suzuki 125",
    "Ford Mustang",
    "PIA RailwayTrain",
    "Toyota Prius"
];

// Iterate over the list and print statements about each item
favtransportation.forEach(transportation => {
    console.log(`I would like to own a ${transportation}.`);
});