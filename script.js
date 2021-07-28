var destination = new Date("oct 10,2021 23:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var difference = destination - now;


var days = Math.floor(difference / (1000*60*60*24));
console.log(days);
var hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
console.log(hours);
var minutes = Math.floor((difference % (1000*60*60))/ (1000*60));
console.log(minutes);
var seconds = Math.floor((difference % (1000*60)) / 1000);
console.log(seconds);

document.getElementById('demo').innerHTML = days + " days, "+ hours + " hours, " + minutes + 
" minutes, " + seconds + " seconds ";

}, 1000);

