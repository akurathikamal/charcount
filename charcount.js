function count(str) {
    const Count = {};
  
    for (let char of str) {
      if (Count[char]) {
        Count[char]++;
      } else {
        Count[char] = 1;
      }
    }
  
    return Count;
  }
  

  const result = count("hi hlooo india");
  console.log(result); 
 
  