const operators = ["+", "-", "/", "*"];
let operator = "";
let result = "";
let first_number;
let second_number;
let output;
let no_input;

//this function displays random operators when the button is triggered
function displayRandomOperators() {
  // get random index value
  const randomIndex = Math.floor(Math.random() * operators.length);
  // get random item from the array
  const randomOperator = operators[randomIndex];
  return randomOperator;
}

//this function accepts and displays two inputs from the user with random operator
function checkinput() {
  operator = displayRandomOperators();
  first_number = document.getElementById("first_number").value;
  second_number = document.getElementById("second_number").value;
  let show_result_container = document.getElementById("result_container");
  show_result_container.style.display = "block";

  if (
    first_number == "" ||
    first_number == null ||
    second_number == "" ||
    second_number == null
  ) {
    no_input = "Please enter two numbers";
    document.getElementById("output").innerHTML = no_input;
  } else {
    first_number = parseInt(document.getElementById("first_number").value);
    second_number = parseInt(document.getElementById("second_number").value);
    document.getElementById("output").innerHTML =
      first_number + operator + second_number;
  }
}
// this funtion checks the operator and tells a user if answer is correct or incorrect
function guessResult() {
  let answer;
  let right_response = "Your answer is correct. You win!";
  let wrong_response = "Your answer is incorrect. Try again!";
  let users_result = parseInt(document.getElementById("users_result").value);

  if (operator == "+") {
    answer = first_number + second_number;
    if (users_result == answer) {
      document.getElementById("display_answer").innerHTML = right_response;
    } else {
      document.getElementById("display_answer").innerHTML = wrong_response;
    }
  } else if (operator == "-") {
    answer = first_number - second_number;
    if (users_result == answer) {
      document.getElementById("display_answer").innerHTML = right_response;
    } else {
      document.getElementById("display_answer").innerHTML = wrong_response;
    }
  } else if (operator == "*") {
    answer = first_number * second_number;
    if (users_result == answer) {
      document.getElementById("display_answer").innerHTML = right_response;
    } else {
      document.getElementById("display_answer").innerHTML = wrong_response;
    }
  } else if (operator == "/") {
    answer = first_number / second_number;
    if (users_result == answer) {
      document.getElementById("display_answer").innerHTML = right_response;
    } else {
      document.getElementById("display_answer").innerHTML = wrong_response;
    }
  }
}

function clearButton() {
  document.getElementById("myForm").reset();
}

function clearInnerHtml() {
  document.getElementById("output").innerHTML = '';
}
