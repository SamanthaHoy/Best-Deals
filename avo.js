// exports.conversion = function (prodString)
var prodString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
// console.log(prodString);

var newString1 = prodString.replace(/for R/g,''); // removed 'for R'
var newString2 = newString1.replace(/\.+$/,''); // remove the trailing .
// console.log(newString2);

var prodList = newString2.split(','); // split it by comma
// console.log(prodList);
// console.log("-----")

for (var i = 0 ; i < prodList.length ; i++) { // removes the leading and trailing whitespaces from each array element
  prodList[i] = prodList[i].trim();
}
// console.log(prodList);
// console.log("-----")

//
var quantityAndPrice = [];
var splitLine = [];
prodList.forEach(function(list){   // for each element of the array
  var splitLine = list.split(' '); // split by space
  // console.log(splitLine);
// creates a map within an array , creates 2 keys , assigns values , converts them to numbers with 2 decimal places
  quantityAndPrice.push({
    quantity: Number(splitLine[0]).toFixed(2) ,
    price :Number(splitLine[1]).toFixed(2) }); // create an object with 2 keys - quantity and price with values
  });
// console.log("-----")
// console.log(quantityAndPrice);
//
  var average = [];
  function findAverage (quantityAndPrice) {
    for (var i = 0 ; i < quantityAndPrice.length ; i++) {
      average[i] = quantityAndPrice[i].price / quantityAndPrice[i].quantity; // to get the average per array element
      average[i] = average[i].toFixed(2);
      console.log("deal:" + quantityAndPrice[i].quantity + " average:" + average[i]);
    }
  }

  findAverage(quantityAndPrice) ;
  console.log("averages array:" + average);

var cheapestAvo= average[0];
function findCheapest(average) {
  for (var i = 0 ; i < average.length ; i++) {
    if (average[i] < cheapestAvo) {
      cheapestAvo = average[i];
      console.log("cheapestAvo :" + "["+ i + "]"+ cheapestAvo);
    }
  } // end for
} //end function

findCheapest(average);
console.log("The cheapest avo is " + cheapestAvo);

var expensiveAvo = 0;
function findExpensive(average) {
  for (var i = 0 ; i < average.length ; i++) {
    if (average[i] > expensiveAvo) {
      console.log("This average [" + i + "] " + average[i] + "< expensiveAvo:" + expensiveAvo );
      expensiveAvo = average[i];
      }
    //  else {
    //      console.log("This average [" + i + "] " + average[i] + "< expensiveAvo:" + expensiveAvo );
    //     } // end else
  } // end for
} // end function

findExpensive(average);
console.log("The most expensive avo is " + expensiveAvo);

function findTotalAverage(quantityAndPrice){
  var totalQuantity = 0;
  var totalPrice = 0;
  for (var i=0 ; i < quantityAndPrice.length ; i++){
    totalQuantity = totalQuantity + Number(quantityAndPrice[i].quantity);
    totalPrice = totalPrice + ( Number(quantityAndPrice[i].price));
    console.log("i:" + i + " totalQuantity: " + totalQuantity + " totalPrice: " + totalPrice)
  }
  return totalPrice/totalQuantity;
}

var totalAvg = findTotalAverage(quantityAndPrice);
console.log("The total average price for all avo's is :" + totalAvg.toFixed(2));
