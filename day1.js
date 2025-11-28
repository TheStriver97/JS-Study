<<<<<<< HEAD
/**
 PART A: BASIC LOGIC
 */

// Even or Odd Code
let a = 5
if(a%2==0){console.log("Number: " + a + " is even")}
else{console.log("Number: "+ a + " is odd")}

// age categorizer code
let age = 71;

if(age<=12 && age!=0){
    console.log("You are a child");
}
else if(age>=13 && age<18){
    console.log("You are a teenager");
}
else if(age>=18 && age<58){
    console.log("You are an adult");
}
else {
    console.log("You are a senior citizen.")
}

//largest of 2 numbers code

let x = 9; 
let t = 8;
if(x>t){console.log(x +" is the larger number")}
else{console.log(t + " is the larger number")}


//word checker code
let character = 'a';
let word = "apple";
if(word.includes(character)){
    console.log("This word: " + word +" includes character: "+ character )
}
else{
    console.log("This word: " + word +" does not include character: "+ character)
}

// celsius ↔ fahrenheit code
let celsius = 20;
let fahrenheit;
fahrenheit = (celsius *9/5)+32;
console.log("The conversion of C to F is "+fahrenheit);

celsius = (fahrenheit-32)/1.8
console.log("The conversion of F to C is "+ celsius)


/* PART B: ARRAYS + LOOPS */
//code to return MAX number in an array

function FindMax(arr){
let max =arr[0]
for(let i =1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max+ " is the largest of the numbers.");
}
let arr = [2,3,99]
FindMax(arr);


//function to find number in an array
function FindNum(array, target){
             let found =false;

    for(let i =0;i<array.length;i++){
        if(array[i] === target){
            found = true;
            break;
        }
    }
        if(found){
        console.log("Found: " + target);
    }
    else{console.log("not found")}
}
let q = 3;
FindNum(arr,q);

//function to reverse the array

function rev(array){
    for(let i=array.length-1;i>=0;i--){
        console.log(array[i]);
    }
}
rev(arr);


//function to get even numbers from 1 t0 100

function Even(hundred){
for(let i =1;i<=hundred;i++){
    if(i%2==0){
        console.log(i)
    }
}
}
let top = 100;
Even(top);


/*MAP,FILTER,REDUCE */

const newArr=[1,2,3,4,5];

const squared = newArr.map(function(number){
return number*number;
})

console.log(squared);

const evenn = newArr.filter(function(number){
    return number%2==0;
})
console.log(evenn);

const Sum = newArr.reduce(function(acc,n){
    return acc+n;
},0);
=======
/**
 PART A: BASIC LOGIC
 */

// Even or Odd Code
let a = 5
if(a%2==0){console.log("Number: " + a + " is even")}
else{console.log("Number: "+ a + " is odd")}

// age categorizer code
let age = 71;

if(age<=12 && age!=0){
    console.log("You are a child");
}
else if(age>=13 && age<18){
    console.log("You are a teenager");
}
else if(age>=18 && age<58){
    console.log("You are an adult");
}
else {
    console.log("You are a senior citizen.")
}

//largest of 2 numbers code

let x = 9; 
let t = 8;
if(x>t){console.log(x +" is the larger number")}
else{console.log(t + " is the larger number")}


//word checker code
let character = 'a';
let word = "apple";
if(word.includes(character)){
    console.log("This word: " + word +" includes character: "+ character )
}
else{
    console.log("This word: " + word +" does not include character: "+ character)
}

// celsius ↔ fahrenheit code
let celsius = 20;
let fahrenheit;
fahrenheit = (celsius *9/5)+32;
console.log("The conversion of C to F is "+fahrenheit);

celsius = (fahrenheit-32)/1.8
console.log("The conversion of F to C is "+ celsius)


/* PART B: ARRAYS + LOOPS */
//code to return MAX number in an array

function FindMax(arr){
let max =arr[0]
for(let i =1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max+ " is the largest of the numbers.");
}
let arr = [2,3,99]
FindMax(arr);


//function to find number in an array
function FindNum(array, target){
             let found =false;

    for(let i =0;i<array.length;i++){
        if(array[i] === target){
            found = true;
            break;
        }
    }
        if(found){
        console.log("Found: " + target);
    }
    else{console.log("not found")}
}
let q = 3;
FindNum(arr,q);

//function to reverse the array

function rev(array){
    for(let i=array.length-1;i>=0;i--){
        console.log(array[i]);
    }
}
rev(arr);


//function to get even numbers from 1 t0 100

function Even(hundred){
for(let i =1;i<=hundred;i++){
    if(i%2==0){
        console.log(i)
    }
}
}
let top = 100;
Even(top);


/*MAP,FILTER,REDUCE */

const newArr=[1,2,3,4,5];

const squared = newArr.map(function(number){
return number*number;
})

console.log(squared);

const evenn = newArr.filter(function(number){
    return number%2==0;
})
console.log(evenn);

const Sum = newArr.reduce(function(acc,n){
    return acc+n;
},0);
>>>>>>> 25acfe58bb7576756cf70113237f3b86032392e6
console.log(Sum);