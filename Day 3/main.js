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

doSomethinglater(function(){
        console.log("Im here after 3 seconds")
    },)