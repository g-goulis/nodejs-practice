fs = require('fs');


// Below is a Synchronous code solution
//
// data = fs.readdirSync('c:/');
// console.log("Data: ", data);
//
// console.log("This comes after");

function read(err, data){
    console.log('Data: ', data);
}

fs.readdir('c:/', read);

console.log("This comes after");


