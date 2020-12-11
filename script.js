document.getElementById("submit").addEventListener("click", fixExpenseReport);

function fixExpenseReport() {
  let divResult = document.getElementById("result");
  let userInput = document.querySelector("#userInput").value;
  let data = userInput.match(/\d+/g);

  let index = 0;
  data.forEach((element) => {
    data[index] = parseInt(element);
    index++;
  });
  let result;
  data.forEach((i) => {
    data.forEach((j) => {
      let sum = i + j;
      if (sum == 2020) {
        result = i * j;
      }
    });
  });
  console.log(result);

  data.forEach((i) => {
    data.forEach((j) => {
      data.forEach((k) => {
        let sum = i + j + k;
        if (sum == 2020) {
          result = i * j * k;
        }
      });
    });
  });
  console.log(result);
}
