  //initialize an empty set to storenumbers we've seen
  function hasTargetSum(array, target) {
    // Step 1: Initialize an empty set to store numbers we've seen so far
    const seenNumbers = new Set();
  
    // Step 2: Loop through each number in the array
    for (const number of array) {
      // Step 3: Calculate the complement
      const complement = target - number;
  
      // Step 4: Check if the complement exists in the set
      if (seenNumbers.has(complement)) {
        return true;
      }
  
      // Step 5: Add the current number to the set
      seenNumbers.add(number);
    }
  
    // Step 6: If no pair is found, return false
    return false;
  }




/* 
  Write the Big O time complexity of your function here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10)) should return true
  hasTargetSum([22, 19, 4, 6, 30], 25)) should return true
  hasTargetSum([1, 2, 5], 4)) should return false
  hasTargetSum ([-7, 10, 4, 8], 3) should return true
  hasTargetSum ([1, 2, 3, 4], 5) should return true
  hasTargetSum ([2, 2, 3, 3], 4) shoiuld reurn true
  hasTargetSum([4], 4) should reurn false

*/

/* 
  Add your pseudocode here
  Create a function hasTargetSum that takes two parameters: an array of integers and a target integer.
  Initialize an empty set to keep track of the numbers we've seen so far.
  Loop through each number in the array:
  Calculate the complement by subtracting the current number from the target.
  If the complement exists in the set, return true.
  Otherwise, add the current number to the set.
  If we finish the loop without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  Initialize a Set: 
  Loop through each number in the array using a for...of loop.
  Calculate the Complement:
  Add the Current Number to the Set:
  Return False if No Pair is Found:
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");//true

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log(""); //true

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("")//false

  console.log("Execting: true");
  console.log("=>", hasTargetSumhasTargetSum ([-7, 10, 4, 8], 3));

  console.log("")//true

  console.log("Execting: true");
  console.log("=>", hasTargetSumhasTargetSum ([1, 2, 3, 4], 5));

  console.log("")//true

  console.log("Execting: true");
  console.log("=>", hasTargetSumhasTargetSum ([2, 2, 3, 3], 4));

  console.log("")//true

  console.log("Execting: true");
  console.log("=>", hasTargetSumhasTargetSum ([4], 4));

  console.log("")//false
}


module.exports = hasTargetSum;
