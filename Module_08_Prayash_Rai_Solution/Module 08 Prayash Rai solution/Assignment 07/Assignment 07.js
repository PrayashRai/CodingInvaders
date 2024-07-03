function checkPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    if (cleanedStr === reversedStr) {
      return "A palindrome";
    } else {
      return "Not A palindrome";
    }
  }
  
  let str1 = "Coding";
  console.log(checkPalindrome(str1)); // Not palindrome
  
  let str2 = "Anna";
  console.log(checkPalindrome(str2)); // A palindrome
  
  let str3 = "DESSERTS I DESIRE NOT SO LONG NO LOST ONE RISE DISTRESSED";
  console.log(checkPalindrome(str3)); // A palindrome
  