document.getElementById("submit").addEventListener("click", GetUserInput);

function GetUserInput() {
  let userInput = document.querySelector("#userInput").value;
  let lineElements = userInput.split("\n");
  let x = 0;
  let y = 0;
  let offsetX;
  let count = 0;

  let map = [];
  for (y = 0; y < lineElements.length; y++) {
    map[y] = [];
  }
  for (
    offsetX = 0;
    offsetX < (lineElements.length * 3) / lineElements[0].length;
    offsetX++
  ) {
    for (y = 0; y < lineElements.length; y++) {
      for (x = 0; x < lineElements[0].length; x++) {
        map[y][x + offsetX * lineElements[0].length] = lineElements[y][x];
      }
    }
  }
  console.log(map);
  x = 3;
  y = 1;
  while (y < lineElements.length) {
    if (map[y][x] == "#") {
      count++;
    }
    console.log("Trees: " + count);
    x = x + 3;
    y = y + 1;
  }
}
