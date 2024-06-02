
// make_shirt function with default values
function make_shirt(size: string = 'L', message: string = 'I love TypeScript')
 {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}

// Calling function with default message
make_shirt();

// Calling function to create a medium shirt with default message
make_shirt('M');

// Calling function to create a shirt of any size with a different message
make_shirt('XL', 'Keep coding!');
make_shirt('XXL','I Love Pakistan');
