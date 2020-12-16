const testArea = document.querySelector("#text-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer=[0,0,0,0];
var interval;
var timerRunning=false;
// Add leading zero to numbers 9 or below (purely for aesthetics):
function addLeadingZero(time) {
	if (time<=9) {
		time="0"+time;
	}
	return time;
}

// Run a standard minute/second/hundredths timer:
function runTimmer() {
	let currentTime=addLeadingZero(timer[0])+":"+addLeadingZero(timer[1])+":"+addLeadingZero(timer[2]);
	theTimer.innerHTML=currentTime;
	timer[3]++;

	timer[0]=Math.floor(timer[3]/100/60);
	timer[1]=Math.floor(timer[3]/100-(timer[0]*60));
	timer[2]=Math.floor(timer[3]- (timer[1]*100)-(timer[0]*6000));
}

// Match the text entered with the provided text on the page:
function spelCheck() {
	let originText = document.querySelector("#texts").innerHTML;
	let enteredText=testArea.value;
	let mathText=originText.substring(0,enteredText.length);
	if (enteredText===originText) {
		clearInterval(interval);
		testArea.style.borderColor="#009900";
	}
	else{
		if (enteredText===mathText) {
			testArea.style.borderColor="#0066ff";
		}
		else{
			testArea.style.borderColor="#b30000";
		}
	}
}

// Start the timer:
function start() {
	let textEnteredLength=testArea.value.length;
	if (textEnteredLength===0 && timerRunning==false) {
		interval=setInterval(runTimmer,10);
		timerRunning=true;
	}
}

// Reset everything:
function reset() {
	clearInterval(interval);
	interval=null;
	timerRunning=false;
	timer = [0,0,0,0];
	testArea.value="";
	testArea.style.borderColor="grey";
	theTimer.innerHTML="00:00:00";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spelCheck,false);
resetButton.addEventListener("click",reset,false);





$(document).ready(function() 
{
	$("#baconButton").click(function()
	{
		$("#texts").html("");
	clearInterval(interval);
	interval=null;
	timerRunning=false;
	timer = [0,0,0,0];
	testArea.value="";
	testArea.style.borderColor="grey";
	theTimer.innerHTML="00:00:00";
		$.getJSON('https://baconipsum.com/api/?callback=?', 
			{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'1' }, 
			function(baconGoodness)
		{
			if (baconGoodness && baconGoodness.length > 0)
			{
				$("#texts").html(baconGoodness[0]);
			}
		});
	});
});


