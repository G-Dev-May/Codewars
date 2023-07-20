/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
 */

// PREP
// P - two parameters going into the func greet, param are unknown
// R - return a string 



function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest' ;
   }