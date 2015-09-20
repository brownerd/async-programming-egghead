// Flattenig arrays

var exchanges = [
  [
      { symbol: "XFX", price: 240.22, volume: 23432 },
      { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
  [
      { symbol: "JXJ", price: 120.22, volume: 5323 },
      { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];


// ConcatALL - it actually doesn't exist in Array object
//
// We are replacing this pattern below

// exchanges.forEach(function(exchange) {
//   exchange.forEach(function(stock) {
//     console.log( JSON.stringify(stock) );
//   })
// })

Array.prototype.concatAll = function() {
  var results = []
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item)
    })
  })
  return results
}

var stocks = exchanges.concatAll()

stocks.forEach(function(stock) {
  //console.log( JSON.stringify(stock) );
})


/////////
// ES6 //
/////////


// Not really sure how to do more this this here
Array.prototype.concatAllES6 = function() {
  var results = []
  this.forEach((subArray) => {
    subArray.forEach((item) => {
      results.push(item)
    })
  })
  return results
}

var stocksES6 = exchanges.concatAllES6()

stocksES6.forEach((stock) =>
  console.log( JSON.stringify(stock) )
)
