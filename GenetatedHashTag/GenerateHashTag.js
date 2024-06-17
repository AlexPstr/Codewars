// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false




function generateHashtag (str) {
    if(str === '' || str === ' ') return false
    let a = '#'
    let flag = true
    
    for(let i = 0; i < str.length; i++){
      
      if(str[i] === ' ') {
        flag = true 
      } 
      else if(str[i] && flag === true){
        a+= str[i].toUpperCase()
        flag = false
      } else(
      a+= str[i]
      )
    }
    if(a === '#' || a.length > 140) return false
   return a
  }
  