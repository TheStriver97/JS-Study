<<<<<<< HEAD
function SumOfDigits(num){
    const nums=String(num).split('').map(Number);
    let total=0;
    for(let i=0;i<nums.length;i++){
        total+=nums[i]
    }
    return total;
}

let res = SumOfDigits(8888);
console.log(res);

function reverseString(str){
    let reverse=str.split('');
    let newStr='';
    for(let i=reverse.length-1;i>=0;i--){
        newStr+=reverse[i];
    }
    return newStr;
}

let word = "racecar"
let r = reverseString(word);
console.log(r);



function palindrome(str){

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const len = cleanStr.length;
    for(let i =0;i<len/2;i++){
        if(cleanStr[i]!==cleanStr[len-1-i]){
            return false;
        }
    }
    return true;
}

let p = palindrome(word);
console.log(p);


function largeWord(sentence){
    let strArray = sentence.split(" ");
    let len = strArray.length;
    let max =strArray[0];
    for(let i=0;i<len;i++){
        if(max.length<strArray[i].length){
            max=strArray[i];
        }
    }
    console.log(max);

}

let s = "Hello I am";
largeWord(s);


function Unique(arr){
    let unique=[];
    for(let i =0;i<arr.length;i++){
            const currentNumber=arr[i];

            if(!unique.includes(currentNumber)){
                unique.push(currentNumber);
            }
    }
    return unique;
}
let axr = [1,1,3,3,2,4,4,5,5,6,7,3,2,6]
console.log(Unique(axr));


//Part B 

const users = [
  { name: "A", age: 21 },
  { name: "B", age: 25 },
  { name: "C", age: 19 },
  { name: "D", age: 30 }
];


function getNames(users){
    return users.map(user=>user.name)
}

console.log(getNames(users));

function getAdults(users, minimumAge){
    return users.filter(user=>user.age>=minimumAge);
}

console.log(getAdults(users,21));

function getAvgAge(users){
    return users.reduce(users=>users.length);
=======
function SumOfDigits(num){
    const nums=String(num).split('').map(Number);
    let total=0;
    for(let i=0;i<nums.length;i++){
        total+=nums[i]
    }
    return total;
}

let res = SumOfDigits(8888);
console.log(res);

function reverseString(str){
    let reverse=str.split('');
    let newStr='';
    for(let i=reverse.length-1;i>=0;i--){
        newStr+=reverse[i];
    }
    return newStr;
}

let word = "racecar"
let r = reverseString(word);
console.log(r);



function palindrome(str){

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const len = cleanStr.length;
    for(let i =0;i<len/2;i++){
        if(cleanStr[i]!==cleanStr[len-1-i]){
            return false;
        }
    }
    return true;
}

let p = palindrome(word);
console.log(p);


function largeWord(sentence){
    let strArray = sentence.split(" ");
    let len = strArray.length;
    let max =strArray[0];
    for(let i=0;i<len;i++){
        if(max.length<strArray[i].length){
            max=strArray[i];
        }
    }
    console.log(max);

}

let s = "Hello I am";
largeWord(s);


function Unique(arr){
    let unique=[];
    for(let i =0;i<arr.length;i++){
            const currentNumber=arr[i];

            if(!unique.includes(currentNumber)){
                unique.push(currentNumber);
            }
    }
    return unique;
}
let axr = [1,1,3,3,2,4,4,5,5,6,7,3,2,6]
console.log(Unique(axr));


//Part B 

const users = [
  { name: "A", age: 21 },
  { name: "B", age: 25 },
  { name: "C", age: 19 },
  { name: "D", age: 30 }
];


function getNames(users){
    return users.map(user=>user.name)
}

console.log(getNames(users));

function getAdults(users, minimumAge){
    return users.filter(user=>user.age>=minimumAge);
}

console.log(getAdults(users,21));

function getAvgAge(users){
    return users.reduce(users=>users.length);
>>>>>>> 25acfe58bb7576756cf70113237f3b86032392e6
}