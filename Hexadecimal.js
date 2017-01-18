/* Writes a function that convert a hexadecimal color, "blue"
 for example "#0000FF" in its RGB representation rgb(0,0,255)".
 Give the function the name getRGB() and test it with this code*/
function fnConvertHex(sColor){
  var aColor = sColor.split("")
  var aNum = []
  var nCont = 0
  for(pos = 1; pos < aColor.length; pos += 2){
    var x1 = parseInt(aColor[pos],16)
    var x2 = parseInt(aColor[pos + 1],16)
    aNum[nCont] = (x1 * x2)
    nCont += 1
  }
  return aNum
}
fnConvertHex("#0000FF")