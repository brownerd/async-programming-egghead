function getStocksOver(stocks, minPrice) {

  // Long hand forEach approach
  //
  // var results = []
  //
  // stocks.forEach(function(stock) {
  //   if (stock.price >= minPrice) {
  //     results.push(stock)
  //   }
  // })
  // return results

  return stocks.filter(function(stock) {
    return stock.price >= minPrice
  })

}

// Here is the filter Method of Array
//
// Array.prototype.filter = function(predicate) {
//   var results = []
//
//   this.forEach(function(item) {
//     if (predicate(item)) {
//       results.push(item)
//     }
//   })
//   return results
// }

var data = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 }
]

var expensiveStocks = getStocksOver(data , 150.00)

console.log(JSON.stringify(expensiveStocks));



//////////////
// ES6 path //
//////////////
var stocker = (stocks) => stocks.map( (stock) => stock.price )

var getStocksOver2 = (stocks, minPrice) =>
  stocks.filter( (stock) =>
    stock.price >= minPrice )


var expensiveStocks2 = getStocksOver2(data , 250.00)

console.log(JSON.stringify(expensiveStocks2));
