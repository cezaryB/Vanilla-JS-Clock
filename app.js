
var secondsHand = document.querySelector(".second-hand");
var minutesHand = document.querySelector(".min-hand");
var hoursHand = document.querySelector(".hour-hand");


function triggerClock() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondsHand.style.transform = "rotate(" + secondsDegrees + "deg)";

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // get the current minutes degree and add maximum 6 degrees base on seconds hand
	minutesHand.style.transform = "rotate(" + minutesDegrees + "deg)";

	const hours = now.getHours();
	hoursDegrees = ((hours / 60) * 360) + ((minutes / 60) * 6) + 90; // get the current hours degree and add maximum 6 degrees base on minutes hand
	hoursHand.style.transform = "rotate(" + hoursDegrees + "deg)";
}

setInterval(triggerClock, 1000);
triggerClock(); // trigger function right away in order to set clock hands




