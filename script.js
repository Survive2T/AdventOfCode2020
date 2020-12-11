document.getElementById("submit").addEventListener("click", GetUserInput);

function FindTrees(slopeX, slopeY, map, height) {
  let count = 0;

  x = slopeX;
  y = slopeY;
  while (y < height) {
    if (map[y][x] == "#") {
      count++;
    }
    x = x + slopeX;
    y = y + slopeY;
  }
  return count;
}

function GetUserInput() {
  let userInput = document.querySelector("#userInput").value;
  let lineElements = userInput.split("\n");
  let x = 0;
  let y = 0;
  let offsetX;
  let map = [];
  let trees = [];

  for (y = 0; y < lineElements.length; y++) {
    map[y] = [];
  }
  for (
    offsetX = 0;
    offsetX < (lineElements.length * 7) / lineElements[0].length;
    offsetX++
  ) {
    for (y = 0; y < lineElements.length; y++) {
      for (x = 0; x < lineElements[0].length; x++) {
        map[y][x + offsetX * lineElements[0].length] = lineElements[y][x];
      }
    }
  }
  trees[0] = FindTrees(1, 1, map, lineElements.length);
  trees[1] = FindTrees(3, 1, map, lineElements.length);
  trees[2] = FindTrees(5, 1, map, lineElements.length);
  trees[3] = FindTrees(7, 1, map, lineElements.length);
  trees[4] = FindTrees(1, 2, map, lineElements.length);
  trees.forEach((element) => {
    console.log(element);
  });
  let treeProduct = 1;
  trees.forEach((tree) => {
    treeProduct = treeProduct * tree;
  });
  console.log(treeProduct);
}
