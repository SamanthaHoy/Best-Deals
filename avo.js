
var prodString = " 1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
// console.log(prodString);
var newString = prodString.replace(/R/g,''); // removed the R
console.log(newString);

var prodList = newString.split(','); // split it by new character
// console.log(prodList);

var quantityAndPrice = [];
prodList.forEach(function(list){   // for each element of the array
  var splitLine = list.split(' '); // split by comma
  // console.log(splitLine);
  // creates an object within an array , creates 2 keys , assigns values , converts them to numbers with 2 decimal places
  quantityAndPrice.push({quantity: Number(splitLine[1]).toFixed(2) , price :Number(splitLine[3]).toFixed(2) }); // create an object with 2 keys - quantity and price with values
  console.log(quantityAndPrice);
  // var vPrice = splitLine[3];
  // console.log(vPrice);

});

  var average = [];
  function findAverage (quantityAndPrice) {
    for (var i = 0 , i < quantityAndPrice.length ; i++) {
      average[i] = quantityAndPrice.price[i] / quantityAndPrice.quantity; // to get the average per array element

    }
  }

  var cheapestAvo = [];
  function findCheapest(average) {
    for (var i = 0 ; i < average.length ; i++) {
      for (var j =  1 ; j < average.length ; j++) {
        if (average[i] < average[j]) {
          cheapestAvo = average[i];
        }
      }
  }
}

var expensiveAvo = [];
function findExpensive(average) {
  for (var i = 0 ; i < average.length ; i++) {
    for (var j =  1 ; j < average.length ; j++) {
      if (average[i] > average[j]) {
        expensiveAvo = average[i];
      }
    }
 }
}
