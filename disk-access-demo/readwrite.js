const fs = require('fs');
const dataJson = require('./data.json');
//read stuff
fs.readFile('./data.json','utf-8', (err, data) => {
    console.log("Data: ", JSON.parse(data));
});

console.log(dataJson);

//write stuff
const data1 = {
    name: 'bobby'
};
fs.writeFile('write.json', JSON.stringify(data1), (err) => {
    if(err){
        console.error(err);
    }
})