// week1.2 javascript basics 2hr long video

// console.log("Hello World")

let firstName1= "Sudharsan"
let lastName1 = "Babu"
let gender1 = "male"

let firstName2 = "Jeevitha";
let gender2 = "female";

function greet(firstName1, lastName1) {
    console.log("Hi!",firstName1,lastName1)
}

//greet(firstName1, lastName1)

function greetBasedOnGender(firstName, gender) {
    if(gender == "male"){
        console.log("Hi",firstName,"bro")
    } 
    else{
        console.log("Hi",firstName,"sis")
    }
}


//greetBasedOnGender(firstName1, gender1);
//greetBasedOnGender(firstName2, gender2);


function count(){
    for(let i = 0; i <= 1000; i ++){
        console.log(i)
    }
}

//count()


// learning Objects
const users = {
    firstName : "Sudharsan",
    age : 21,
    gender : "male"
}

//console.log(users.firstName)

function learnObjects(){
const allUsers = [{
    firstName:"Sudharsan",
    age: 21,
    gender: "male"
},{
        firstName:"Jeevitha",
    age: 23,
    gender: "female"
},{
        firstName:"Babu",
    age: 51,
    gender: "male"
}]

    for(let i = 0; i < allUsers.length; i++){
        if(allUsers[i].gender == "male"){
            console.log(allUsers[i].firstName)
        }
    }
}

//learnObjects()

function bounty(){
    let count = 0;
    for(let i = 0; i < 1000000000000; i ++){
        count = count + i
    }

    console.log(count)
}

//bounty()

function doSomethinglater(callback){
    console.log("Starting...")
    setTimeout(callback, 3000)
    console.log("This runs before callback")
}

// doSomethinglater(function(){
//         console.log("Im here after 3 seconds")
//     },)




//call backs more/easy understanding
function calculate(a, b, type){
    return type(a, b)
}

function sum(a, b){
    return a + b;
}

function sub(a, b){
     return a - b;
}

//console.log(calculate(10, 5, sub))


//async/await

function findSumTill100(){
    let count = 0
    for(let i =0; i < 100; i ++){
        count = count + 1;
    }
    return count;
}

function randomfns2(){
    const value = findSumTill100()
    console.log(value);
}

setTimeout(randomfns2, 1000)
console.log("Hello I'm in sync mode, your findingSumTill100 is in async mode, I'm the proof")

