/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
*/

// PREP

//p: str has to be a string, and letter has to be a string, str can be NaN -- if so we get 0, letter will only be 1 length
//r: return an integer, if str is empty return 0



function strCount(str, letter){  
    // turn the string into array and use foreach to see if letter == str 
      str = str.split('')
      console.log(str, letter)
      let i = 0
      str.forEach(ele=>{
          if (letter == ele){
          i++
            }
      }
    )
      return i
      //code here
    }

// other's solutions 

function strCount(str, letter){  
    return str.split(letter).length-1
  }

/* my thoughts

wow, this really made me think for just a moment in disbelief that you could really write a one line solution to this.
and its so simple im laughing at it. I didnt even think of splitting the str you get by the letter, then you just subtract 1 from its length! */