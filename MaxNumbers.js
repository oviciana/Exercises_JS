/* Define a function max() that takes two numbers as arguments and returns
 the largest of them. Use the if-then-else construct available in Javascript.*/
function fnMaxNumber(num1, num2){
  if (num1 === num2){
    return "Equals " + num1 
  } else if(num1 > num2){
    return "Max number is " + num1
  }
  else {
    return "Max number is " + num2
  }
}
fnMaxNumber(2,300)