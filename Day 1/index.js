// a function that reverses a string

let str = "Sudharsan"

function reverseStr(str){
   let res = "";
    for(let i = 0; i < str.length; i ++){
        res = res + str[(str.length - 1) - i];
    }
    console.log(res);
}

//reverseStr(str);

//a function that finds duplicates in array

let arr = [10, 20, 30, 30, 40, 50, 80];

function findDuplicate(arr){

    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length; j ++){
            if (i !== j && arr[i] == arr[j]){
                return arr[j];
            }
        }
    }

    return -1
}

console.log(findDuplicate(arr))

let arr2 = [
    [1, 2, 3, 4, 9, 10], [5, 6, 7, 8]
]

function flatterNestedArr(arr){

    let res = [];
    let index = 0;
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr[i].length; j++){
            res[index] = arr[i][j];
            index ++;
        }
    }
    return res;
}

console.log(flatterNestedArr(arr2))