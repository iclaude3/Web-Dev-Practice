let button = document.getElementById("enter");
let input = document.getElementById("input");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  //creat an li that has text
  li.appendChild(document.createTextNode(input.value));
  //grab unordered list and append to it
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if(inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  /*event gives keyboard event. keycode gives a number to each key. 13 is for enter key*/
  if(inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//dont say addListAfterClick() in callback function because we are passing a
//reference to the function so that when someone clicks () will get added and
//the function will run 
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// let database = [
//   {
//     username: "andre",
//     password:"supersecret"
//   },
//   {
//     username: "sally",
//     password: "123"
//   },
//   {
//     username: "claudia",
//     password: "939393"
//   }
// ];
//
// let newsFeed = [
//   {
//     username: "Bobby",
//     timeline: "So tired of all that learning"
//   },
//   {
//     username: "Sally",
//     timeline: "Javascript is soo cool!"
//   },
//   {
//     username: "Mitch",
//     timeline: "Javascript is awesome"
//   }
// ];
//
// let userNamePrompt = prompt("What is your username?");
// let passwordPrompt = prompt("What is your password?");
//
// function isUserValid( username, password) {
//   for(let i=0; i<database.length; i++) {
//     if (username === database[i].username && password === database[i].password) {
//       return true;
//     }
//   }
//   return false;
// }
//
// function signIn(username, password) {
//   if (isUserValid(username, password)) {
//     console.log(newsFeed);
//   } else {
//     alert("Wrong Username and/or Password");
//   }
// }
//
// signIn(userNamePrompt, passwordPrompt);


/*For each loop can check what browsers support using caniuse.com*/

// todos = [
//   "clean room",
//   "brush teeth",
//   "exercise",
//   "study javascript",
//   "eat healthy"
// ];
//
// function logTodos(todo, i) {
//   console.log(todo, i);
// }
//
// todos.forEach(logTodos);
