function askQuestions() {



var firstName = prompt('what is your first name?');
var lastName = prompt('what is your last name?');
var fullName = firstName +  ' ' +lastName; 
console.log(fullName);

var age = prompt('how old are you?');
age = parseInt(age);

if (age >=18) {
	console.log ('user is an adult');
} else if (age >=13) {
	console.log ('user is a teenager');
} else {
	console.log('user is a child');
}

$('h2').text(firstName + ' is ' + age + ' years old!');




if (firstName.toLowerCase() === 'General' && lastName.toLowerCase() !== "Assembly") {
	console.log ('hello you');
}







var faveColour = prompt ('what is your favorite colour?').toLowerCase();

if (faveColour === 'red' ||
	faveColour === 'blue' ||
	faveColour === 'green' ||
	faveColour === 'yellow') {

$('h1').css('color', faveColour);

	}


}







// when the page loads

$(function() {

	$('img').on('click', askQuestions);


	// when the user clicks a heading
	$('h3').on('click', function() {


		// hide the content after the heading
		$(this).next().slideToggle(5000);

	});

});

