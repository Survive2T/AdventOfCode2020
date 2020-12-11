document
  .getElementById("submit")
  .addEventListener("click", FindNumOfValidPasswords);

function CheckIfPasswordValid(pwdObj) {
  let isValid = false;
  let count = 0;

  /* // Old Password Method
  pwdObj.password.split("").forEach((letter) => {
    if (letter == pwdObj.key) count++;
  });
  if (count <= pwdObj.max && count >= pwdObj.min) isValid = true;
  */
  // New Password Method
  if (
    (pwdObj.password[pwdObj.min - 1] == pwdObj.key ||
      pwdObj.password[pwdObj.max - 1] == pwdObj.key) &&
    !(
      pwdObj.password[pwdObj.min - 1] == pwdObj.key &&
      pwdObj.password[pwdObj.max - 1] == pwdObj.key
    )
  )
    isValid = true;
  return isValid;
}

function FindNumOfValidPasswords() {
  let userInput = document.querySelector("#userInput").value;
  let data = userInput.split("\n");
  let pwdObjects = [];
  let count = 0;

  data.forEach((element) => {
    let lineElements = [];
    let rangeStr = [];
    let rangeInt = [];
    lineElements = element.split(" ");
    rangeStr = lineElements[0].split("-");
    rangeInt[0] = parseInt(rangeStr[0]);
    rangeInt[1] = parseInt(rangeStr[1]);

    let pwdObject = {
      min: rangeInt[0],
      max: rangeInt[1],
      key: lineElements[1][0],
      password: lineElements[2],
    };
    pwdObjects.push(pwdObject);
  });
  console.log(pwdObjects);

  pwdObjects.forEach((element) => {
    if (CheckIfPasswordValid(element)) count++;
  });
  console.log(count);
}
