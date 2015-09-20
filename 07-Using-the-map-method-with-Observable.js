// This was cool, but I didn't get as much from it
// I'm either tire, worn out or both




// Import RX.js
import Rx from 'rx'

// Make a button
var btn = document.createElement('button')
var btnText = document.createTextNode('Click Me')
btn.appendChild(btnText)
document.body.appendChild(btn)
document.body.style.backgroundColor = 'hsl(60, 100%, 50%)'


var Observable = Rx.Observable;

//var btn = document.getElementById('btn');
/*
var handler = function(e) {
	alert('clicked');
	btn.removeEventListener('click', handler);
};

btn.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(btn, 'click');

var points =
	clicks.map(function(e) {
		return {x: e.clientX, y: e.clientY};
	});

var subscription =
	points.forEach(
		function onNext(point) {
			alert('clicked:' + JSON.stringify(point));
			subscription.dispose();
		},
		function onError(error) {
			console.log('ERROR!');
		},
		function onCompleted() {
			console.log("done");
		});
