

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



/*

// main2.js
let today = new Date();

// Date.now() gives UTC now

console.log(today);

let bDay = new Date('December 17, 1994 02:54:00Z');
console.log(bDay);

let today2 = new Date();
console.log("Time now:");
console.log(today2.toUTCString());
console.log(today2.toLocaleString());
console.log(today2.getTimezoneOffset());


let dummy = today.getHours();
today.setHours(dummy -7); 
console.log("Time in New York:");
// to String
console.log(today.toTimeString()); 
// change by hand!!! 

console.log(Intl.DateTimeFormat('en-US').format(today));

// unofficial libs
// moment
let myDateToo = moment();




*/






/*
import {myIndexFunc33 as renamed, myVakio} from './main3.js';

function myIndexFunc2(){
	
	alert("myIndexFunc2");
	alert("myVakio");
	//myIndexFunc33();
	renamed();
};

function myIndexFunc22(){
	
	alert("myIndexFunc22");
};

*/


/*

The JavaScript Date API is cumbersome to use. Hence, it’s best to rely on a library for anything related to dates. Popular libraries include:

    Moment.js
    Day.js
    Luxon
    js-joda
    date-fns



*/

/*




*/










































/*
function lottoloop(){
	// syötteen käsittely alkaa	
	let numerot = document.getElementById("sana").value;
	let lisanumerot = document.getElementById("sana2").value;
	//console.log("Numerot oli: "+numerot);
	//console.log("Lisanumerot oli: "+lisanumerot);
	let dum = [numerot.split(",")];
	let dum2 = [lisanumerot.split(",")];
	
	let rivi = new Set(dum);
	let num = Number(dum[0]);
	//console.log("Num on: "+num);
	//rivi.add(Number(num));
	//console.log(rivi);
	// syötteen käsittely loppuu	
	
	// Luodaan lottonumerotaulukko ja muita taulukoita ja settejä
	let lottoarvontaArray = [];
	let lottoarvontaLisaArray = [];
	let omatnumerotArray = [];
	let omatnumerotLisaArray = [];
	let dummySet = new Set();
	let dummySet2 = new Set();
	let dummySet3 = new Set();
	let dummySet4 = new Set();
	//let iii=0;
	
	// arvotaan oma rivi ja virallinen rivi
	 let flag=false;
	do{
		//console.log(iii+"  Length on: "+lottoarvontaArray.length);
		dummySet3.length=0;
		dummySet4.length=0;
		lottoarvontaArray.push(Math.floor(Math.random() * 40) + 1);
		omatnumerotArray.push(Math.floor(Math.random() * 40) + 1);
		// duplikaattien poisto array->set->array
		 dummySet3 = new Set(lottoarvontaArray);
		 dummySet4 = new Set(omatnumerotArray);
		lottoarvontaArray = [...dummySet3];
		omatnumerotArray = [...dummySet4];
		
		if(lottoarvontaArray.length >= 7 && omatnumerotArray.length >= 7 ){ 
			flag = true;	
		}
		//iii++;
	} while( !flag );
	// jos tuli liikaa numeroita
	while(lottoarvontaArray.length > 7 || omatnumerotArray.length > 7){
	if(lottoarvontaArray.length > 7){ lottoarvontaArray.pop(); }
	if(omatnumerotArray.length > 7){ omatnumerotArray.pop(); }
	}
	
	// arvotaan lisänumerot
	flag=false;
	do{
		dummySet.length=0;
		dummySet2.length=0;
		lottoarvontaLisaArray.push(Math.floor(Math.random() * 40) + 1);
		omatnumerotLisaArray.push(Math.floor(Math.random() * 40) + 1);
		// duplikaattien poisto array->set->array
		 dummySet = new Set(lottoarvontaLisaArray);
		 dummySet2 = new Set(omatnumerotLisaArray);
		lottoarvontaLisaArray = [...dummySet];
		omatnumerotLisaArray = [...dummySet2];
		
		if(lottoarvontaLisaArray.length >= 2 && omatnumerotLisaArray.length >= 2 ){ 
			flag = true;
		}
	
	} while( !flag );
	// jos tuli liikaa numeroita
	while(lottoarvontaLisaArray.length > 7 || omatnumerotLisaArray.length > 7){
	if(lottoarvontaArray.length > 7){ lottoarvontaLisaArray.pop(); }
	if(omatnumerotArray.length > 7){ omatnumerotLisaArray.pop(); }
	}
	
	console.log("Viralliset numerot: "+lottoarvontaArray.sort((a,b) => a - b)+
						"  Lisanumerot: "+lottoarvontaLisaArray.sort((a,b) => a - b));
						
	console.log("Omat numerot: "+omatnumerotArray.sort((a,b) => a - b)+
					"  Lisanumerot: "+omatnumerotLisaArray.sort((a,b) => a - b));
	
	const lottoNumerot = new Set(lottoarvontaArray);
	const omatNumerot = new Set(omatnumerotArray);
	// intersection päänumeroille:
	let osui = new Set(
				[...omatNumerot].filter(x => lottoNumerot.has(x)));
				
	let osumat = [...osui];
	console.log("PaaNumeroista osui numero(t): "+osumat);
	
	const lottoNumerotLisa = new Set(lottoarvontaLisaArray);
	const omatNumerotLisa = new Set(omatnumerotLisaArray);
	// intersection lisänumeroille:
	let osuiLisa = new Set(
				[...omatNumerotLisa].filter(x => lottoNumerotLisa.has(x)));
				
	let osumatLisa = [...osuiLisa];
	
	// tulostetaan näytölle mitä saatiin
	document.getElementById("vastaus").innerHTML ="Sinun numerosi: "+omatnumerotArray
													+"  ja lisanumerot:"+omatnumerotLisaArray;													
	document.getElementById("vastaus2").innerHTML ="Arvottu rivi: "+lottoarvontaArray
													+"  ja lisanumerot:"+lottoarvontaLisaArray;													
	document.getElementById("vastaus3").innerHTML ="Nama numerot osuivat: "+osumat
													+"  ja nama lisanumerot: "+osumatLisa;	
	
};


*/


/*
// Palindromitestaus javascript-tiedosto sanoille.
// Huom.: ei toimi oikein lauseilla eikä numeroilla
function gameloop(){
	
	let annettuSana = document.getElementById('sana').value.toLowerCase();	
	let reverse = annettuSana.split("").reverse().join("");
	
	let onkoPali = "";
	if(annettuSana===reverse){	
		onkoPali = "on";	
	} else {  onkoPali = "ei ole"; }
	
	document.getElementById("vastaus").innerHTML ="\""+annettuSana+"\" "+onkoPali+" Palindromi!";
	
};
// js loppu

*/







