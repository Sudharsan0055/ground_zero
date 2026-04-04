// function findsumTill100(){
//     let sum = 0;
//     for(let i = 1; i <= 100; i++){
//         sum += i;
//     }
//     return sum;
// }

// function logSum(){
//     console.log(findsumTill100());
// }

// setTimeout(logSum, 1000);

// console.log("Learning Async so this printed first");



const fs = require('fs');

fs.readFile('../../../Downloads/Nalvaazhvu Labels/logo.png', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }               
    console.log('File read successfully, size:', data.length);
}
);

console.log("This message is logged before the file read completes.");