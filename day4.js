<<<<<<< HEAD
array = [1,2,3,4,5]
getSecondLargest(array);


function findSecondLargestSinglePass(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum > largest) {
      secondLargest = largest;
      largest = currentNum;
    } else if (currentNum > secondLargest && currentNum !== largest) {
      secondLargest = currentNum;
    }
  }

  if (secondLargest === -Infinity) {
    return "No distinct second largest element found.";
  }

  return secondLargest;
}

const numbers3 = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(findSecondLargestSinglePass(numbers3)); // Output: 6

const numbers4 = [5, 5, 5];
=======
array = [1,2,3,4,5]
getSecondLargest(array);


function findSecondLargestSinglePass(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum > largest) {
      secondLargest = largest;
      largest = currentNum;
    } else if (currentNum > secondLargest && currentNum !== largest) {
      secondLargest = currentNum;
    }
  }

  if (secondLargest === -Infinity) {
    return "No distinct second largest element found.";
  }

  return secondLargest;
}

const numbers3 = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(findSecondLargestSinglePass(numbers3)); // Output: 6

const numbers4 = [5, 5, 5];
>>>>>>> 25acfe58bb7576756cf70113237f3b86032392e6
console.log(findSecondLargestSinglePass(numbers4)); // Output: No distinct second largest element found.