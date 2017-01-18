/*Define a function called calculator that receives an operation
 and two numbers and returns the result of the operation applied
 to the values passed as parameters */
 function fnCalculator(sOperation,nNum1,nNum2){
    switch(sOperation){
      case "suma":
        return nNum1 + nNum2
        break
      case "resta":
        return nNum1 - nNum2
        break
      case "multiplicacion":
        return nNum1 * nNum2
        break
      case "division":
        return nNum1 / nNum2
        break
      default :
        return ""
    }
 }