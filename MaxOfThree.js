/*Define a function maxOfThree() that takes three numbers
 as arguments and returns the largest of them.*/
function fnMaxOfThree(num1, num2, num3){
  var aNumbers = [num1,num2,num3]
  aNumbers.sort()
  return aNumbers[aNumbers.length - 1]
}
fnMaxOfThree(4, 6, 1)