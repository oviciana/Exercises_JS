/*Write a program that writes in the console all the multiples of 23
 less than 500 and at the end writes the sum of all of them
*/
function mult23(){
	var sMulti = 'Elements : '
	var nSum = 0
	for(var num = 0; num < 500; num +=23){
		sMulti += num + ' '
		nSum += num
	}
	return sMulti += "\n" + "Sum : " + nSum
}
mult23()
