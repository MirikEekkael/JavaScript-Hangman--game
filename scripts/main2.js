
// Main functionality for Hangman-html-game.
// main2.js has:
// 	- list of possible words to guess
//  - choosing one word (with Math.random())
//  - starting the game with startGame()
//  - getting the letter from input with waitForClick()
//  - updating game situation with updateGame()

const words = ["APPLE" , "ORANGE" , "CHAIR" , "AVOCADO" , "PIZZA" ,
			   "TABLE" , "HEAD" , "SOFT" , "GROUND" , "SPACE" ,
			   "BANANA" , "MANDARIN" , "COMPUTER" , "JAVA" , "JAVASCRIPT" ,
			   "PUNISHMENT" , "CAPITOL" , "TOWN" , "PHONE" , "HANGMAN" ,
			   "EPSTEINDIDNOTKILLHIMSELF"];
		 
// CHOOSE THE WORD
const randomWord = words[Math.floor(Math.random() * words.length)];

console.log("This is randomWord: "+randomWord);

const givenLetters = [];
givenLetters.length=0;
const livesLeft= 6;
 
 function startGame(){
	  
	 let dumDumDum = [];
	 for( iii=0; iii < randomWord.length ; iii++){			
			dumDumDum.push("_");
	 } 
	// Change the game textcontents to starting values
	document.querySelector(".the_word").innerHTML ="The word: "+dumDumDum+" ";
	document.querySelector(".guesses").innerHTML ="Guesses: ";
	document.querySelector(".guesses_left").innerHTML ="Wrong guesses left: "+livesLeft+" "; 
	 
 }
 
 

function waitForClick(){
	
	let myChar = document.getElementById('myletters').value;
 
    console.log("This is myLetter in waitForClick: "+myChar);
	
	givenLetters.push(...myChar);
	
	updateGame(myChar,randomWord,givenLetters);
	
};


	
function updateGame(letter, word, givenLettersArray){
	
	
	let myArray = [...givenLettersArray];
	
	let secretWord = [];
	let correctLetter = [];
	
	// fill correctLetter[] with 'false'
	for(iter=0; iter < word.length ; iter++){	
		secretWord.push("_");
		correctLetter.push(false);
	}
	
	//console.log("This is secretWord: "+secretWord[0]+secretWord[1]+secretWord[2]+secretWord[3]+" Length: "+secretWord.length);
	
	let counter=0;
	let falseCounter = word.length;
	let livesDummy = livesLeft;
	
	do {
		
	  falseCounter = word.length;
	  let dummy = myArray[counter];
	  console.log("This is myArray[counter] in while: "+myArray[counter]+" dummy: "+dummy);
	  
	  for( iiii=0; iiii < word.length ; iiii++){
		
		if(dummy === word[iiii].toLowerCase()){
			secretWord[iiii] = word[iiii].toLowerCase();
			correctLetter[iiii] = true;
			falseCounter = falseCounter - 1;
				
		} else { 	

			}
	/*console.log("This is correctLetter while: "+correctLetter+" ");	
	console.log("This is secretWord in if: "+secretWord+" iii: "+iiii+" if(): "+(dummy != secretWord[iiii]));
	//console.log("This is secretWord["+iii+"]: "+secretWord[iii].toLowerCase());
	 console.log("This is secretWord while: "+secretWord+" ");
	 console.log("This is dummy: "+dummy);
	*/  
	  }// for
	  
		
	  
		  if( falseCounter === word.length ){
			  
			livesDummy = livesDummy - 1;
			// Change the game imagecontent to game-situation  
			if(livesDummy===5){	
				let imgLose1 = document.querySelector('.puu');
				imgLose1.src = "../imgs/img_lose_1.png";
				document.body.appendChild(imgLose1);
			}
			if(livesDummy===4){	
				let imgLose2 = document.querySelector('.puu');
				imgLose2.src = "../imgs/img_lose_2.png";
				document.body.appendChild(imgLose2);
			}
			if(livesDummy===3){	
				let imgLose3 = document.querySelector('.puu');
				imgLose3.src = "/../imgs/img_lose_3.png";
				document.body.appendChild(imgLose3);
			}
			if(livesDummy===2){	
				let imgLose4 = document.querySelector('.puu');
				imgLose4.src = "../imgs/img_lose_4.png";
				document.body.appendChild(imgLose4);
			}
			if(livesDummy===1){	
				let imgLose5 = document.querySelector('.puu');
				imgLose5.src = "../imgs/img_lose_5.png";
				document.body.appendChild(imgLose5);
			}
			if(livesDummy===0){	
				let imgLose6 = document.querySelector('.puu');
				imgLose6.src = "../imgs/img_lose_6.png";
				document.body.appendChild(imgLose6);
			}
			
			
		  }
		// Change the game textcontents to game-situation  
		document.querySelector(".the_word").innerHTML ="The word: "+secretWord+" ";
		document.querySelector(".guesses").innerHTML ="Guesses: "+givenLetters+" ";
		document.querySelector(".guesses_left").innerHTML ="Wrong guesses left: "+livesDummy+" ";
	  counter++;
	  let winner = 0;
	  for(iter=0; iter < word.length ; iter++){	
		if(correctLetter[iter]===true){
			winner = winner + 1;  
		  } 
	   }
		
      if(winner === word.length){
		let imgWin = document.querySelector('.puu');
		imgWin.src = "../imgs/img_win.png";
		document.body.appendChild(imgWin);
		
		document.querySelector(".the_word").innerHTML ="The word: "+secretWord+" ";
		document.querySelector(".guesses").innerHTML ="Guesses: "+givenLetters+" ";
		document.querySelector(".guesses_left").innerHTML ="Wrong guesses left: "+livesDummy+" ";
		  
	  }		
	  
	  if(livesDummy < 0){
		
		let oldImage = document.querySelector('.puu');
		oldImage.src = "../imgs/img_lose.png";
		document.body.appendChild(oldImage);
		
		// Change the game textcontents to game-situation-lose  
		document.querySelector(".the_word").innerHTML ="YOU LOSE!!!";
		document.querySelector(".guesses").innerHTML ="YOU LOSE!!!";
		document.querySelector(".guesses_left").innerHTML ="YOU LOSE!!!";
		
		//let loseImage = document.createElement("IMAGE");	
		  
	  }
	  
	}  while( myArray.length - counter > 0 ) 

	
	
	
};	
	
	
function myNewGame(){
	
	console.log("you clicked: "+myChar);
	
};



	
	
	
	
	
	
	
function myDate(){
	// UTC Finland
	 myTime = new Date();
	// no need for dumdum
	 textTime = myTime.toTimeString();
	 textDate = Intl.DateTimeFormat('fi-FI').format(myTime);
	
	// New York
	 myTime2 = new Date();
	 dumdum2 = myTime2.getHours();
	myTime2.setHours(dumdum2 -7);
	 textTime2 = myTime2.toTimeString();
	 textDate2 = Intl.DateTimeFormat('en-US').format(myTime2);
	
	// Tokio
	 myTime3 = new Date();
	 dumdum3 = myTime3.getHours();
	myTime3.setHours(dumdum3 +9);
	 textTime3 = myTime3.toTimeString();
	 textDate3 = Intl.DateTimeFormat('jp-JP').format(myTime3);
	
	document.getElementById("time_fi_here").innerHTML ="Time in Helsinki is: "+textTime;
	document.getElementById("date_here").innerHTML ="Date in Helsinki is: "+textDate;
	
	document.getElementById("time_us_here").innerHTML ="Time in New York is: "+textTime2;
	document.getElementById("date_us").innerHTML ="Date in New York is: "+textDate2;
	
	document.getElementById("time_jp_here").innerHTML ="Time in Tokio is: "+textTime3;
	document.getElementById("date_japan").innerHTML ="Time in Tokio is: "+textDate3
}



/* 

function tarpeeton(){
	
function myA(){	
	const myChar="A";	
	console.log("you clicked: "+myChar);
	}
function myE(){	
	 const myChar="E";	
	console.log("you clicked: "+myChar);}
function myI(){	
	 const myChar="I";	
	console.log("you clicked: "+myChar);}
function myO(){	
	 const myChar="O";	
	console.log("you clicked: "+myChar);}
function myU(){	
	 const myChar="U";	
	console.log("you clicked: "+myChar);}
function myY(){	
	 const myChar="Y";	
	console.log("you clicked: "+myChar);}
	
function myB(){	
	 const myChar="B";	
	console.log("you clicked: "+myChar);}
function myC(){	
	 const myChar="C";	
	console.log("you clicked: "+myChar);}	
function myD(){	
	 const myChar="D";	
	console.log("you clicked: "+myChar);}
function myF(){	
	 const myChar="F";	
	console.log("you clicked: "+myChar);}
function myG(){	
	 const myChar="G";	
	console.log("you clicked: "+myChar);}
function myH(){	
	 const myChar="H";	
	console.log("you clicked: "+myChar);}	
function myJ(){	
	 const myChar="J";	
	console.log("you clicked: "+myChar);}	
function myK(){	
	 const myChar="K";	
	console.log("you clicked: "+myChar);}	
function myL(){	
	 const myChar="L";	
	console.log("you clicked: "+myChar);}	
function myM(){	
	 const myChar="M";	
	console.log("you clicked: "+myChar);}	
function myN(){	
	 const myChar="N";	
	console.log("you clicked: "+myChar);}	
function myP(){	
	 const myChar="P";	
	console.log("you clicked: "+myChar);}
function myQ(){	
	 const myChar="Q";	
	console.log("you clicked: "+myChar);}
function myR(){	
	 const myChar="R";	
	console.log("you clicked: "+myChar);}
function myS(){	
	 const myChar="S";	
	console.log("you clicked: "+myChar);}
function myT(){	
	 const myChar="T";	
	console.log("you clicked: "+myChar);}
function myV(){	
	 const myChar="V";	
	console.log("you clicked: "+myChar);}
function myW(){	
	 const myChar="W";	
	console.log("you clicked: "+myChar);}		
function myX(){	
	 const myChar="X";	
	console.log("you clicked: "+myChar);}
function myZ(){	
	 const myChar="Z";	
	console.log("you clicked: "+myChar);}
	
}

*/


