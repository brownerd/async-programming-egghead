// Import RX.js
import Rx from 'rx'

// Make a button
var btn = document.createElement('button')
var btnText = document.createTextNode('Click Me')
btn.appendChild(btnText)
document.body.appendChild(btn)
document.body.style.backgroundColor = 'hsl(80, 100%, 50%)'






var Observable = Rx.Observable;

// var handler = function(e) {
//   alert('clicked')
//   btn.removeEventListener('click', handler)
// }
//
// btn.addEventListener('click', handler)

var clicks = Observable.fromEvent(btn, 'click')
clicks.forEach(function(e) {
  alert('clicked Observable pattern')
});



// [1,2,3].forEach(function(i) { console.log( i ) })



// var handler = function(e) {
// 	alert('clicked');
// 	btn.removeEventListener('click', handler);
// };
//
// btn.addEventListener('click', handler);


// var clicks = Observable.fromEvent(btn, 'click');
//
// var subscription =
// 	clicks.forEach(
// 		function onNext(e) {
// 			alert('clicked');
// 			subscription.dispose();
// 		},
// 		function onError(error) {
// 			console.log('ERROR!');
// 		},
// 		function onCompleted() {
// 			console.log("done");
// 		});
