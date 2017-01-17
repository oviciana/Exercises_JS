/*Write a function that writes in the console the multiplication
 table (in one column) of any number passed as parameter*/
  function multTableNumber(nTable){
 	var sTable = "";
	for(var numTable = 0; numTable <= 10; numTable++){
 		sTable += nTable * numTable + "\n";
 	}
  	return sTable;
 }
 multTableNumber(8);