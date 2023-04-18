function passCheck(data){
	var passClass = document.getElementsByClassName('password-check');
	const lowerCase =new RegExp('(?=.*[a-z])');
	const upperCase =new RegExp('(?=.*[A-Z])');
	const number = new RegExp('(?=.*[0-9])');
	const specialChar = new RegExp('(?=.*[!@#\$%\^&\*])');
	const eightChar = new RegExp('(?=.{8,})');    
 //checks lowercase
	if(lowerCase.test(data)){
		passClass[0].style.color = "green";
		}
	else{
		passClass[0].style.color = "red";
		}
//checks uppercase
	if(upperCase.test(data)){
		passClass[1].style.color = "green";
		}
	else{
		passClass[1].style.color = "red";
		}
//checks number
	if(number.test(data)){
			passClass[2].style.color = "red";
		}
	else{
			passClass[2].style.color = "red";
		}
//checks special character
	if(specialChar.test(data)){
			passClass[3].style.color = "red";
		}
	else{
			passClass[3].style.color = "red";
		}
//checks eight character
	if(eightChar.test(data)){
			passClass[4].style.color = "red";
		}
	else{
			passClass[4].style.color = "red";
		}
	}