/*Define a function called ​isNumber​ that receives
 a value and return true if the value received is a number*/
function fnIsNumber(vValue){
  if(typeof(vValue) === "string"){
    return false
  }
  else {
    return true
  }
}