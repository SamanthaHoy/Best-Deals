// exports.conversion = function (prodString)
var prodString = " 1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
// console.log();
var newString = prodString.replace(/R/g,''); // removed the R
// console.log(newString);

var prodList = newString.split(','); // split it by comma
console.log(prodList);
console.log("-----")

var quantityAndPrice = [];
var splitLine = [];
prodList.forEach(function(list){   // for each element of the array
  var splitLine = list.split(' '); // split by space
  console.log(splitLine);
// creates a map within an array , creates 2 keys , assigns values , converts them to numbers with 2 decimal places
  quantityAndPrice.push({
    deal : Number(splitLine[1]),
    quantity: Number(splitLine[1]).toFixed(2) ,
    price :Number(splitLine[3]).toFixed(2) }); // create an object with 2 keys - quantity and price with values
  });
console.log("-----")
console.log(quantityAndPrice);

  var average = [];
  function findAverage (quantityAndPrice) {
    for (var i = 0 ; i < quantityAndPrice.length ; i++) {
      average[i] = quantityAndPrice[i].price / quantityAndPrice[i].quantity; // to get the average per array element
      average[i] = average[i].toFixed(2);
      console.log("deal:" + quantityAndPrice[i].deal + " average:" + average[i]);
    }
  }

  findAverage(quantityAndPrice) ;
  console.log("averages array:" + average);

  // for (i in average) {
  //   console.log("deal:" + quantityAndPrice[i].deal + " average:" + average[i]);
  // }

  var cheapestAvo ;
  function findCheapest(average) {
    for (var i = 0 ; i < average.length ; i++) {
      for (var j =  1 ; j < average.length ; j++) {
        if (average[i] < average[j]) {
          // console.log("the 1st element is < the 2nd element");
          // console.log("average[" + i + "] " + average[i] + "average[" + j + "]" + average[j]);
          cheapestAvo = average[i];
          // console.log("cheapest Avo = " + cheapestAvo )
        }
        else {
          // console.log("the 2nd element is < the 1st element");
          // console.log("average[" + i + "] " + average[i] + "average[" + j + "]" + average[j]);
          cheapestAvo = average[i];
          // console.log("cheapest Avo = " + cheapestAvo )
        }
      }
    }
  }
findCheapest(average);
console.log("The cheapest avo is " + cheapestAvo);

//
// var expensiveAvo = [];
// function findExpensive(average) {
//   for (var i = 0 ; i < average.length ; i++) {
//     for (var j =  1 ; j < average.length ; j++) {
//       if (average[i] > average[j]) {
//         expensiveAvo = average[i];
//       }
//     }
//  }
// }
