/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/


//PREP
//P - Will only take in an array of numbers, numbers can be in any order
//R - The sum of two lowest int in array

function sumTwoSmallestNumbers(numbers) {  
    console.log(numbers)
    let arr = numbers.sort((a,b) => a-b)
    console.log(arr)
  return ( arr[0] + arr[1])
    // I simply sorted the array to ascending order and adday the first 2 elements :) 
  }