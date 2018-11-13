//defining variable display:
var display = document.getElementById("display");
clearDisplay(); //calling clearDisplay  function

function clearDisplay(){
  display.innerHTML = 0; //when calling the function the screen shows 0
}

function concatenateElement(value){
  console.log(value); //log value in console
  console.log(display.innerHTML.length);
  if (display.innerHTML == '0'){
    display.innerHTML = value;
  }
  else if (display.innerHTML.length < 8) {
    display.innerHTML += value; //display digits for as long as the screen allows
  }
}

function evaluateExpresion (){
  console.log(display.innerHTML);
  var result = eval (display.innerHTML);
  display.innerHTML = result;
}