/*Write a function that takes a character (i.e. a string of
length 1) and returns true if it is a vowel, false otherwise. */
function IsVowel(sCaracter){
  var aVowels = ["a","e","i","o","u"]
  var bIsVowel = false
  for(var i in aVowels){
    if(aVowels[i] === sCaracter){
      bIsVowel = true
    }
  }
  return bIsVowel
}
IsVowel("t")