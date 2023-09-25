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
    // document.getElementById("display_answer").innerHTML = answer;
    if (users_result == answer) {
      document.getElementById("display_answer").innerHTML = right_response;
    } else {
      document.getElementById("display_answer").innerHTML = wrong_response;
    }
  } else if (operator == "-") {
    answer = first_number - second_number;
    document.getElementById("display_answer").innerHTML = answer;
    console.log("this is the subract result");
    console.log(answer);
    return answer;
  } else if (operator == "*") {
    answer = first_number * second_number;
    document.getElementById("display_answer").innerHTML = answer;
    console.log("this is the multiply result");
    console.log(answer);
    return answer;
  } else if (operator == "/") {
    answer = first_number / second_number;
    document.getElementById("display_answer").innerHTML = answer;
    console.log("this is the division result");
    console.log(answer);
    return answer;
  }
}

result = guessResult();

// function displayCorrectOrIncorrect() {
//  let result = guessResult();
//  console.log("this is the result");
//  console.log(result);
// }