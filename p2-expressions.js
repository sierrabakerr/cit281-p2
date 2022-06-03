/*
    CIT 281 Project 2
    Name: Sierra Baker
*/

// Returns a random number of letters between min (inclusive) and max (exclusive)
const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  let result = "";
  
  let lengthOfOutputString = getRandomInteger(5, 26);
  
  for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getRandomInteger(0, alphabet.length)];
  }
    // Returns a single random number between min (inclusive) and max (exclusive)
    const getRandomLetter = function () {
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      return alphabet[getRandomInteger(0, alphabet.length)];
    }
    
    console.log(getRandomLetter());
    
    // Returns 10 to 20 random letters between the minLength and maxLength
    const getRandomString = function (minLength, maxLength) {
      let result = "";
      let lengthOfOutputString = getRandomInteger(minLength, maxLength);
    
      for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
      }
      return result;
    }
    
    console.log(getRandomString(10, 20));

    // Returns a sorted string of letters in ascending order
    const getSortedString = function (string) {string = "this is the backwards alphabet zyxwutsrqponmlkjihgfedcba".split(""); return string.sort().join("").trim();} 
  console.log(getSortedString());
