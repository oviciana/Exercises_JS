/*
Write a function translate() that will translate a text into "rövarspråket".
That is, double every consonant and place an occurrence of "o" in between.
For example, translate("this is fun") should return the string  "tothohisos isos fofunon".
*/
function fnTranslate(sText){
  var sNewText = ""
  var sConst = "o"
  for (var pos = 0; pos < sText.length; pos++){
    if(fnIsString(sText[pos])){
      if(fnIsVowel(sText[pos]) || sText[pos] === " "){
        sNewText += sText[pos]
      }
      else {
        sNewText += sText[pos] + sConst + sText[pos]
      }
    }
    else{
      sNewText += sText[pos]
    }
  }
  return sNewText
}
function fnIsstring (vValue){
  if(typeof(vValue) === "string "){
    return true
  }
  else {
    return false
  }
}
function fnIsVowel(sCaracter){
  var aVowels = ["a","e","i","o","u"]
  var bIsVowel = false
  for(var i in aVowels){
    if(aVowels[i] === sCaracter){
      bIsVowel = true
    }
  }
  return bIsVowel
}