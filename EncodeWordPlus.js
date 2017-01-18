/* Define a function called ​encodeWord​ that receives a string
and return the codified version of that string replacing the
following characters:
7 instead of T
4 instead of A
5 instead of S
0 instead of O
Improve the previous function to add a random number between 0 and 1000 every 7 characters
*/
function fnEncodeWordPlus(sText){
  var aText = sText.split("")
  var nRanNum = 0
  sText = ""
  for(var pos = 0; pos < aText.length; pos++){
    if ((pos % 7) === 0 && pos > 0){
      nRanNum = (Math.random() * 1000).toFixed(0)
      sText += nRanNum
    }
    switch (aText[pos]) {
      case "7" :
        aText[pos] = "T"
        break
      case "4" :
        aText[pos] = "A"
        break
      case "5" :
        aText[pos] = "S"
        break
      case "0" :
        aText[pos] = "O"
        break
      default :
    }
    sText += aText[pos]
  }
  return sText
}