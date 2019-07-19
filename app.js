

var list = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.querySelector('input');

// add the list item to the list
function addListItem() {
	var inputText = input.value;
	var newContent = document.createElement('li');
	newContent.appendChild(document.createTextNode(inputText))
	list.appendChild(newContent);
	input.value = '';
}

// check for Enter being pressed
function checkForEnter(event) {
	if(event.key === 'Enter') {addListItem()
	}
}

// set up event listener
button.addEventListener("click", addListItem);
input.addEventListener("keypress", checkForEnter);
	




