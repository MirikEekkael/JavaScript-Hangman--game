


function checkNameAndPW() {
	
let user_value = document.forms["myMemberLog"]["user_name"].value;
let pw_value = document.forms["myMemberLog"]["user_pw"].value;

let logInfoValid = true;

	  if (user_value == ""){
		alert("You must fill in name to log in");
		return false;
	  }
	  if (pw_value == ""){
		alert("You must fill in name to log in");
		return false;
	  }
  
	if(logInfoValid === true){
		
		makeDataBaseValidation(user_value, pw_value);
	}	
}




function makeDataBaseValidation(user, pw){
	
	// db connect with visitor privileges
	// if not member:
		if(user != "Steve"){
			alert("Simulation: You are not a member!!!");	
		} else {
			
			alert("Simulation: Nice to meet you again Steve!");	
		}
	
	// db actions: get user info
	
	// db kill connection
	
	
	//alert("Simulation: Given data is valid, created new entry to member database");
	
	
	
}