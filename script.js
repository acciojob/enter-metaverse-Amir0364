//your JS code here. If required.
var statusElement = document.getElementById('status');
var enterButton = document.getElementById('enterBtn');
enterButton.addEventListener('click', function(){
	var newElement = document.createElement('h1');
	newElement.innerText = "Entered Metaverse";
		statusElement.parentNode.replaceChild(newElement, statusElement);
});
