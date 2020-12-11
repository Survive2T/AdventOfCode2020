document.getElementById("submit").addEventListener("click", fixExpenseReport);

function fixExpenseReport() {
  let userInput = document.querySelector("#userInput").value;
  let data = userInput.match(/\d+/g);
  console.log(data);
}
