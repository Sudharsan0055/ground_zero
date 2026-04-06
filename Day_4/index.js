const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    //console.log(data);
})

//console.log("Hi there")
function longerWait(){
let a = 0; 
for(let i = 0; i < 10000000000; i ++){
    a++
}
return a++
}

//which order logs
//console.log(longerWait())




// Introducing Promise

// function sudharReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data)
//         })
//     })
// }

// function onDone(data){
//     console.log(data, "This is Promise after resolved")
    
// }

// sudharReadFile().then(onDone)


// Writing 2nd time for muscle memory
// function sudharReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data)
//         })
//     })
// }


// function onDone(data){
//     console.log(data, "This is from promise")
// }

// sudharReadFile().then(onDone)


//writing 3rd time for muscle memory 

function keerthiReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data)
        })
    })
}

function onResolvingPromiseCallMe(data){
    console.log(data, "This is from promise")
}

//keerthiReadFile().then(onResolvingPromiseCallMe)



// My own understanding of Promise


function sudharCooking(){
    return new Promise(function(resolve){
        console.log("I'm boiling Water")
        setTimeout(resolve, 7000)
        setTimeout(function(){
            console.log("Im now preparig for sambar")
        }, 2000)
  
    })

}

function delegateChopVegetables(){
    console.log("Hey bhaiya i chopped vegs while you boil rice")
    setTimeout(useChoppedVegetables, 500)
    
}

function useChoppedVegetables(){
    console.log("Im now using chopped vegetables for completing making sambar")
}

//sudharCooking().then(delegateChopVegetables)



//introducing async/await syntax here

function sudharAsyncFunction(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Im printed after 2 seconds")
        }, 2000)
    })
}



async function main(){
    let value = await sudharAsyncFunction()
    console.log(value);
    console.log("Hi there")
}

main()

console.log("after main but printed first")