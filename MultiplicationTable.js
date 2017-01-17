/* Write a function that writes in the
 console the multiplication table (from 1 to 10)*/
 function multTable(){
 	var sTable = "";
 	for(var num = 1; num <= 10; num++){
 		for(var numTable = 1; numTable <= 10; numTable++){
 			sTable += num * numTable + " "
 		}
 		sTable += "\n"
 	}
 	return sTable
 }
 multTable()