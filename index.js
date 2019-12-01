/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  consle.log("Enter time in HH:MM Format");
  let timeMessage = time.split(":");
  if (parseInt(timeMessage [0]) < 12) {
  consle.log(("Good Morning");
  } 
  else if (parseInt(timeMessage [0]) >= 12 && parseInt(msg[0]) < 17{
  consle.log( "Good Afternoon");
  } 
  else if (parseInt(timeMessage [0]) >= 17{
     consle.log("Good Evening");
  }
}




/* Write your implementation of displayMessage() */
function displayMessage(greet='') {
  document.querySelector("h1#greeting").innerText = greet;
}