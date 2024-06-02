// make_shirt function with default values
function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Calling function with default message
make_shirt();
// Calling function to create a medium shirt with default message
make_shirt('M');
// Calling function to create a shirt of any size with a different message
make_shirt('XL', 'Keep coding!');
make_shirt('XXL', 'I Love Pakistan');
