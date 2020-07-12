// Register to member-section data checking javascript, Javascript2020


function checkRegisterData(){
	
let user_value = document.forms["Register"]["user_name"].value;
let pw_value = document.forms["Register"]["user_pw_1"].value;
let pw_value2 = document.forms["Register"]["user_pw_2"].value;
let my_date = document.forms["Register"]["date of birth"].value;

let year_value = Number(my_date[0]+my_date[1]+my_date[2]+my_date[3]);
let current_year = new Date();
let age_value = Number( Number(current_year.getYear()+1900) - year_value );

let logInfoValid = true;

console.log("Current year: "+current_year.getYear());
console.log("Birth year: "+year_value);
console.log("Age: "+age_value);
	  
	  if (age_value < 18){
		alert("You must be 18 or older to register");
		logInfoValid = false;
		return false;
	  }
	  if (user_value == ""){
		alert("You mus fill in username to to register");
		logInfoValid = false;
		return false;
	  }
	  if (pw_value == "" || pw_value.length < 6){
		alert("You must create password to register (at least six (6) characters)");
		logInfoValid = false;
		return false;
	  }
	  if (pw_value2 == "" || pw_value != pw_value2){
		alert("You must rewrite your password to register");
		logInfoValid = false;
		return false;
	  }
	  
	if(logInfoValid === true){
		
		makeDataBaseEntry(user_value, pw_value, age_value);
	}
	
}

function makeDataBaseEntry(user_value, pw_value, age_value){
	
	// TODO: db connect with root-user privileges
	
	// TODO: db actions
	
	// TODO: db kill connection
	
	alert("Simulation: Given data is valid, created new entry to member database");
		
}
