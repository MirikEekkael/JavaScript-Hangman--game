
// Main functionality for Hangman-js-game.
// main2.js has:
//  - list of possible words to guess
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
// How many "lives" do you want the player to have
const livesLeft= 6;

 // Clicking the Gallows-image runs this function
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
}

	
function updateGame(letter, word, givenLettersArray){
	
	let myArray = [...givenLettersArray];
	
	let secretWord = [];
	let correctLetter = [];
	
	// fill correctLetter[] with 'false'
	for(iter=0; iter < word.length ; iter++){	
		secretWord.push("_");
		correctLetter.push(false);
	}
	
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
		} 

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
		// Change the game textcontents to game-situation-WIN  
		document.querySelector(".the_word").innerHTML ="YOU WIN!!! Word is: "+word+" ";
		document.querySelector(".guesses").innerHTML ="Your Guesses: "+givenLetters+" ";
		document.querySelector(".guesses_left").innerHTML ="Wrong guesses left: "+livesDummy+" ";
		  
	  }		
	  
	  if(livesDummy < 0){	
		let oldImage = document.querySelector('.puu');
		oldImage.src = "../imgs/img_lose.png";
		document.body.appendChild(oldImage);
		
		// Change the game textcontents to game-situation-LOSE  
		document.querySelector(".the_word").innerHTML ="YOU LOSE!!!";
		document.querySelector(".guesses").innerHTML ="YOU LOSE!!!";
		document.querySelector(".guesses_left").innerHTML ="YOU LOSE!!!";	  
	  }
	  
	}  while( myArray.length - counter > 0 ) 
	
} // function updateGame()	
	
