var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var remove = document.getElementsByClassName("remove");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
  //creat an li that has text
  li.appendChild(document.createTextNode(input.value));
	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	// deleteButton.classList.add("remove");
	// addDeleteFunction();
	li.appendChild(deleteButton)
  //grab unordered list and append to it
	ul.appendChild(li);
	remove = document.getElementsByClassName("remove");
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	/*event gives keyboard event. keycode gives a number to each key. 13 is for enter key*/
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	let target = event.target;
	if(target.classList.contains('done')){
		target.classList.remove('done');
	} else {
		target.classList.add('done');
	}
}

function deleteItem(event) {
	let target = event.target;
	let index = Array.prototype.indexOf.call(target.parentNode.children, target);
	ul.removeChild(ul.children[index]);
}

function DeleteFunctionality() {
	for(let i=0; i<remove.length; i++)
		remove[i].addEventListener("click", deleteItem, false);
}

//dont say addListAfterClick() in callback function because we are passing a
//reference to the function so that when someone clicks () will get added and
//the function will run
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
for(let i=0; i<remove.length; i++)
	remove[i].addEventListener("click", deleteItem, false);
ul.addEventListener("click", toggleDone);
