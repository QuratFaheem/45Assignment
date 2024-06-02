var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("These are few places that i like to see soon");
var myFavplaces = ["Niagra Water Fall", "Paris", "Switzerland", "K-2", "Thailand", "Whole World"];
var placesorder = __spreadArray([], myFavplaces, true);
console.log(myFavplaces);
console.log("This is the alphabetical order with without modifying the actual value in list");
placesorder.sort();
console.log(placesorder);
console.log("This is original Array");
console.log(myFavplaces);
console.log("This is the reverse order of array element");
placesorder.reverse();
console.log(placesorder);
console.log("The array is in original order");
console.log(myFavplaces);
console.log("Reverse original Array elements");
placesorder.reverse();
console.log(placesorder);
console.log("After reversing the array its now back to its original array order");
console.log(myFavplaces);
console.log("Changed the original array order to alphabetical order");
myFavplaces.sort();
console.log(myFavplaces);
console.log("Changed the original array order to reverse alphabetical order");
myFavplaces.reverse();
console.log(myFavplaces);
