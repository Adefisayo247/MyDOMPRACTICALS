# # EVENT LISTENER
These are functions that are called whenever an event of a specified type occurs. The properties of an event doesn't implements, nor inherits, any properties and it also goes for it methods-it doesn't inherit any method.

# # # EXAMPLE
<button id="btn">Click here!</button> //HTML CODE//
//THE JAVASCRIPT CODE FOR THE HTML//
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', function (event) {
  alert('Element clicked through function!');
});