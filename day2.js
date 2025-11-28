/*Part A */

const array =[1,2,3,3,3,4,5,90]

function sumArray(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("Total of numbers: "+sum);
}

sumArray(array);

function maxInArray(arr){
    let max=arr[0];
    for(let i =0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log("Max number in array: "+max);
}

maxInArray(array);

function countOfOccurences(arr,target){
    let count=0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]===target){
            count++
        }
    }
    console.log("The number " + target +" occured " + count + " times in the array");
}
let target = 3;
countOfOccurences(array,target)


function mergeArrays(arr1,arr2){
    const arr3 = arr1.concat(arr2);
    console.log(arr3);
}

const arrz = [13,13,12,14,15];

mergeArrays(array,arrz);

function uniqueValues(arr){
    const uniqueArray = [];
    for(const element of array){
        if(!uniqueArray.includes(element)){
            uniqueArray.push(element);
        }
    }
    console.log(uniqueArray);
}

uniqueValues(array);


/*Part B */
function prime(n){
    if (n<=1){return false}
    for(let i =2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }

    return true;
}
let num=5;
console.log(prime(num));

function fibonnaci(n){
    let fib=[0,1];
    if(n===1) return[0];
    if(n===2) return fib;

    for(let i=2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonnaci(num));

function factorial(n){
    let f=1;
    for(let i =2;i<=n;i++){
        f*=i;
    }
    console.log(f)
}

let x = 5
factorial(x);