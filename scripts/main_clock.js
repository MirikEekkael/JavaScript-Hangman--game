// WorldClock javascript example, JavaScript2020

function myDate(){
	// UTC Finland
	const myTime = new Date();
	// no need for dumdum
	let textTime = myTime.toTimeString();
	let textDate = Intl.DateTimeFormat('fi-FI').format(myTime);
	
	// New York
	const myTime2 = new Date();
	let dumdum2 = myTime2.getHours();
	myTime2.setHours(dumdum2 -7);
	let textTime2 = myTime2.toTimeString();
	let textDate2 = Intl.DateTimeFormat('en-US').format(myTime2);
	
	// Tokio
	const myTime3 = new Date();
	let dumdum3 = myTime3.getHours();
	myTime3.setHours(dumdum3 +9);
	let textTime3 = myTime3.toTimeString();
	let textDate3 = Intl.DateTimeFormat('jp-JP').format(myTime3);
	
	document.getElementById("time_fi_here").innerHTML ="Time in Helsinki is: "+textTime;
	document.getElementById("date_here").innerHTML ="Date in Helsinki is: "+textDate;
	
	document.getElementById("time_us_here").innerHTML ="Time in New York is: "+textTime2;
	document.getElementById("date_us").innerHTML ="Date in New York is: "+textDate2;
	
	document.getElementById("time_jp_here").innerHTML ="Time in Tokio is: "+textTime3;
	document.getElementById("date_japan").innerHTML ="Date in Tokio is: "+textDate3
}
