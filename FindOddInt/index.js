// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    if(A.length === 1) return A[0]
    const steak = [];
    let odd = 0
    const obj = {} 
    for(let i = 0; i< A.length; i++){
    if(A[i] in obj ){ 
     obj[A[i]] +=1
      }else { obj[A[i]] =1}
    } 
    for(key in obj){
      if(obj[key] === 1) return Number(key)
      if(obj[key] > 1 && obj[key] % 2 !== 0){
        return Number(key)
      }
    }
   
  }