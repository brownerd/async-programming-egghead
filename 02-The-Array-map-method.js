function getStockSymbols(stocks) {
  // Old forEach method
  //
  // var symbols = []
  // stocks.forEach(function(stock) {
  //   symbols.push(stock.symbol)
  // })
  // return symbols

  return stocks.map(function(stock) {
    return stock.symbol
  })
}

// We can coment this out too, because it's just showing the
// default behavior anyway
//
// Array.prototype.map = function(projection) {
//   var results = []
//
//   this.forEach(function(item) {
//     results.push(projection(item))
//   })
//   return results
// }

var symbols = getStockSymbols([
  { symbol: "XFX", price: "240.22", volume: 23432  },
  { symbol: "TNZ", price: "335.19", volume: 333  },
  { symbol: "JXJ", price: "120.22", volume: 3224  }
])

console.log( JSON.stringify(symbols) );


//////////////////////
// ES6 way to do it //
//////////////////////


// Holy shit! These all do the same thing!
// I can get it down to one line. Crazy.

var stocker = (stocks) => stocks.map( (stock) => stock.price )
var stocker = (stocks) => {
  return stocks.map( (stock) => stock.price )
}
var stocker = (stocks) => {
  return stocks.map(function(stock) {
    return stock.price
  })
}


var symbols2 = stocker([
  { symbol: "XXX", price: "240.22", volume: 23432  },
  { symbol: "YYY", price: "335.19", volume: 333  },
  { symbol: "ZZZ", price: "120.22", volume: 3224  }
])

console.log( JSON.stringify(symbols2) );






////////////////////
// Resources used //
////////////////////

// https://github.com/addyosmani/es6-equivalents-in-es5#iterators-and-for-of
// http://codepen.io/bradleyboy/posts/getting-to-know-es6-arrow-functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// http://toddmotto.com/es6-arrow-functions-syntaxes-and-lexical-scoping/
