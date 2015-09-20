var stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

// Print the SYMBOL of the STOCKS that are larger and or equal to 150
//
// filter
// map
// forEach

var filteredStockSymbols =
  stocks.
    filter(function(stock) {
      return stock.price >= 150.00
    }).
    map(function(stock) {
      return stock.symbol;
    })

filteredStockSymbols.forEach(function(symbol) {
  console.log( symbol );
})



//////////
// ES6  //
//////////


var es6 = stocks
  .filter(
    (stock) => stock.price >= 250.00
  )
  .map(
    (stock) => stock.symbol
  )

es6.forEach(
  (symbol) =>  console.log( symbol )
)
