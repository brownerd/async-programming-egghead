
var getCo = (sk8Array) => {
  var coArray = []

  // Killing this FOR loop because it doesn't run async
  // var coArray = [],
  //     counter,
  //     name;
  // for (counter = 0; counter < sk8Array.length; counter++) {
  //   name = sk8Array[counter];
  //   coArray.push(name.co)
  // }

  // ES5 forEach
  // sk8Array.forEach(function(name) {
  //  coArray.push(name.co)
  // )}

  // This is all I need for the same loop
  sk8Array.forEach( name => coArray.push(name.co))

  return coArray
}

var cos = getCo([
  { co: "ojII", rad: "very", owned: 4  },
  { co: "h-street", rad: "hell yeah", owned: 3  },
  { co: "girl", rad: "super", owned: 1  }
])

console.log( JSON.stringify(cos) )



// Notes
// ------------------------------------------------------------
// I'm going to try to do these the ES5 and ES6 way from now on
