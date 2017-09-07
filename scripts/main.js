var myImage = document.querySelector('img');

myImage.onclick = function()	{
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/film.png')	{
		myImage.setAttribute ('src','images/film2.png');
	}	else	{
		myImage.setAttribute ('src','images/film.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()	{
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Film is cool, ' + myName;
}

if(!localStorage.getItem('name'))	{
	setUserName();
}	else	{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Film is cool, ' + storedName;

}

myButton.onclick = function()	{
	setUserName();
}


