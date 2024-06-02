console.log("These are few places that i like to see soon")
let myFavplaces = ["Niagra Water Fall","Paris","Switzerland","K-2","Thailand","Whole World"];
let placesorder = [...myFavplaces];
console.log(myFavplaces);

 console.log("This is the alphabetical order with without modifying the actual value in list");
placesorder.sort();
console.log(placesorder)


 console.log("This is original Array");
 console.log(myFavplaces)

 console.log("This is the reverse order of array element");
 placesorder.reverse();
 console.log(placesorder)

 console.log("The array is in original order");
 console.log(myFavplaces)

 console.log("Reverse original Array elements");
placesorder.reverse();
console.log(placesorder)

 console.log("After reversing the array its now back to its original array order");
console.log(myFavplaces)

 console.log("Changed the original array order to alphabetical order");
myFavplaces.sort()
console.log(myFavplaces)

 console.log("Changed the original array order to reverse alphabetical order");
myFavplaces.reverse()
console.log(myFavplaces)