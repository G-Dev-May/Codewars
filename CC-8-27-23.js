// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// easy pz solution 
function solution(str, ending){
 str.endsWith(ending)
}

//little more effort 
function solution(str, ending){
    let copy = str.slice(str.length - ending.length)
    console.log(copy, str, ending)
    return copy === ending 
  }