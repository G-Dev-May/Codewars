/* DESCRIPTION:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
 let digits = n.toString().split('').map(Number)// Takes the number and splits to an array
 let end = digits.sort((a,b)=>b-a) //Sort to descending order
 let work = end.join('') //Here I take the array and join it together to a single line, note the '' they join w/o ,
 return parseInt(work) //Changed work to number since its still a str
  
  //...
}