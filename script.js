// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function range(start, end) {
  // Initialize an empty array to store the result
  let result = [];
  // Use a for loop to iterate from the start number to the end number (inclusive)
  for (let i = start; i <= end; i++) {
      // Add the current number to the result array
      result.push(i);
  }
  // Return the final array containing numbers from start to end
  return result;
}


// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

function sum(numbers) {
  // Initialize a variable to keep track of the total sum, starting at 0
  let total = 0;
  // Use a for-of loop to iterate over each number in the input array
  for (let number of numbers) {
      // Add the current number to the total
      total += number;
  }
  // Return the calculated sum of all numbers in the array
  return total;
}


// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

function reverseArray(array) {
  // Initialize an empty array to store the reversed elements
  let reversed = [];
  // Use a for loop to iterate through the array from the last element to the first
  for (let i = array.length - 1; i >= 0; i--) {
      // Add the current element to the reversed array
      reversed.push(array[i]);
  }
  // Return the new array with elements in reverse order
  return reversed;
}


  function reverseArrayInPlace(array) {
    // Initialize two pointers: one at the start and one at the end of the array
    let left = 0;
    let right = array.length - 1;

    // Use a while loop to swap elements until the pointers meet in the middle
    while (left < right) {
        // Temporarily store the value of the left element
        let temp = array[left];
        // Replace the left element with the value of the right element
        array[left] = array[right];
        // Replace the right element with the stored value of the left element
        array[right] = temp;

        // Move the left pointer one step to the right
        left++;
        // Move the right pointer one step to the left
        right--;
    }
  }