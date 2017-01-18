/*Define a function called calculator that receives
 an operation and several numbers (can be 2 or 10 or whatever)
 returns the result of the operation applied to the values passed as parameters */
function fnCalculatorPlus(){
  var sOperation = arguments[0]
  var nNum = arguments[1]
  for(pos = 2; pos < arguments.length; pos++){
    switch(sOperation){
      case "suma":
        nNum += arguments[pos]
        break
      case "resta":
        nNum -= arguments[pos]
        break
      case "multiplicacion":
        nNum *= arguments[pos]
        break
      case "division":
        nNum /= arguments[pos]
        break
      default :
    }
  }
  return nNum
}