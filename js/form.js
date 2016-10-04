function validateForm() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var comment = document.getElementById("Comment").value;
	var email = document.getElementById("Email").value;
	
	if( fname == "" )
	{
		alert("You must input a first name");
	}
	else if( lname == "" )
	{
		alert("You must input a last name");
	}
	else if( comment == "" )
	{
		alert("You must leave a comment");
	}
	else if ( email == "" )
	{
		alert("You must put an email");
	}
	else
	{
		submitted();
	}
	event.preventDefault();
}

function submitted() {
	var element = document.getElementById("contentContainer");
	
	element.style.display = "none";
	
	var message = document.getElementById("donePage");
	
	message.style.display = "block";
	
	setTimeout(function() { justKidding(); }, 1500 );
}

function justKidding() {
	var element = document.getElementById("donePage");
	
	element.style.display = "none";
	
	var message = document.getElementById("gotcha");
	
	message.style.display = "block";
	
	setTimeout(function() { happy(); }, 5000 );
}

function happy() {
	var element = document.getElementById("gotcha");
	
	element.style.display = "none";
	
	var message = document.getElementById("happy");
	
	message.style.display = "block";
}