/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/


//PREP
//p- array is int, init val is 0, if no val = 0, output is str
//r- return a string "even" or "odd" for sum of array


// array.reduce to get the sum and modulus % 2 to check odd or even

function oddOrEven(array) {
    return array.reduce((a,c) => a+c, 0)%2===0?'even':'odd'
    
     //enter code here
  }
