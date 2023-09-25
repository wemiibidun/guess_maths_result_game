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
  if (operator == "+") {
    let answer = first_number + second_number;
    document.getElementById("display_answer").innerHTML = answer;
    console.log("this is the add result");
    console.log(answer);
    return answer;
  } else if (operator == "-") {
    let answer = first_number - second_number;
    document.getElementById("display_answer").innerHTML = answer;
    console.log("this is the subract result");
    console.log(answer);
    return answer;
  } else if (operator == "*") {
    let answer = first_number * second_number;
    document.getElementById("display_answer").innerHTML = answer;
    console.log("this is the multiply result");
    console.log(answer);
    return answer;
  } else if (operator == "/") {
    let answer = first_number / second_number;
    document.getElementById("display_answer").innerHTML = answer;
    console.log("this is the division result");
    console.log(answer);
    return answer;
  }
}

result = guessResult();
console.log("this is the result");
console.log(result);

// function displayCorrectOrIncorrect() {
//  let result = guessResult();
//  console.log("this is the result");
//  console.log(result);
// }
