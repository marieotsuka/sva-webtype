
// This script updates the target text 
// depending on the position of the cursor

// assign your HTML element to a variable
const animationTarget = document.getElementById('vfanimate');

const xCoordElement = document.getElementById('xcoord');
const yCoordElement = document.getElementById('ycoord');

const widthElement = document.getElementById('widthvalue');
const weightElement = document.getElementById('weightvalue');
// setup the parameters of your variable font
// these values will help us calculate the ratios 
// to map to the screen coordinates

const maxwidth = 200; 
const minwidth = 50;

const maxweight = 700;
const minweight = 200;

function updateVF(event) {
  // console.log(event);
  console.log(event.clientX, event.clientY);
  // output the mouse coordinates onto the element containers
  xCoordElement.innerText = event.clientX;
  yCoordElement.innerText = event.clientY;

  // //get the x,y of the mouse in terms of a percentage of the window
  let widthRatio = event.clientX / window.innerWidth;   
  let heightRatio = event.clientY / window.innerHeight; 

  console.log(widthRatio, heightRatio);
  // // apply the percentage along the axis range of the variable fonts
  let width =  widthRatio * (maxwidth - minwidth) + minwidth;
  let weight =  heightRatio * (maxweight - minweight) + minweight;

  console.log('vfvalue', width, weight);

  // // output the design space coordinates onto the element containers
  let vfwidth = Math.round(width);
  let vfweight = Math.round(weight);
  widthElement.innerText = vfwidth;
  weightElement.innerText = vfweight;

  // apply to the target element by updating the CSS variable
  animationTarget.style.setProperty('--wdth', vfwidth);
  animationTarget.style.setProperty('--wght', vfweight);
}

window.addEventListener("mousemove", updateVF)

