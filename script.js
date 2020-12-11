document.getElementById("submit").addEventListener("click", CheckValidPassPort);
const required = {
  byr: 1,
  iyr: 2,
  eyr: 4,
  hgt: 8,
  hcl: 16,
  ecl: 32,
  pid: 64,
};

function CheckValidPassPort() {
  let divResult = document.getElementById("result");
  let userInput = document.querySelector("#userInput").value;

  let lineElements = userInput.split("\n");
  let passport = 0;
  let count = 0;
  lineElements.forEach((lineElement) => {
    if (lineElement != "") {
      let element = lineElement.split(" ");
      element.forEach((subElement) => {
        let keyValuePairs = subElement.split(":");
        console.log(keyValuePairs);

        let lettersNumbers;
        let numbers;
        let letters;

        switch (keyValuePairs[0]) {
          case "byr":
            keyValuePairs[1] = parseInt(keyValuePairs[1]);
            if (keyValuePairs[1] >= 1920 && keyValuePairs[1] <= 2002)
              passport += required.byr;
            break;
          case "iyr":
            keyValuePairs[1] = parseInt(keyValuePairs[1]);
            if (keyValuePairs[1] >= 2010 && keyValuePairs[1] <= 2020)
              passport += required.iyr;
            break;
          case "eyr":
            keyValuePairs[1] = parseInt(keyValuePairs[1]);
            if (keyValuePairs[1] >= 2020 && keyValuePairs[1] <= 2030)
              passport += required.eyr;
            break;
          case "hgt":
            letters = keyValuePairs[1].slice(-2, keyValuePairs[1].length);
            numbers = parseInt(
              keyValuePairs[1].slice(0, keyValuePairs[1].length - 2)
            );
            console.log(numbers + " " + letters);
            if (
              (letters == "cm" && numbers >= 150 && numbers <= 193) ||
              (letters == "in" && numbers >= 59 && numbers <= 76)
            )
              passport += required.hgt;
            break;
          case "hcl":
            let lettersNumbers = /^[0-9a-z]+$/;
            if (
              keyValuePairs[1][0] == "#" &&
              keyValuePairs[1].length == 7 &&
              keyValuePairs[1].slice(1, 6).match(lettersNumbers)
            )
              passport += required.hcl;
            break;
          case "ecl":
            if (
              keyValuePairs[1] == "amb" ||
              keyValuePairs[1] == "blu" ||
              keyValuePairs[1] == "brn" ||
              keyValuePairs[1] == "gry" ||
              keyValuePairs[1] == "grn" ||
              keyValuePairs[1] == "hzl" ||
              keyValuePairs[1] == "oth"
            )
              passport += required.ecl;
            break;
          case "pid":
            numbers = /^[0-9]+$/;
            if (keyValuePairs[1].length == 9 && keyValuePairs[1].match(numbers))
              passport += required.pid;
            break;
          case "cid":
            break;
          default:
            break;
        }
      });
    } else {
      if (passport == 127) {
        count++;
      }
      console.log(passport);

      passport = 0;
    }
  });
  if (passport == 127) {
    count++;
  }
  console.log(passport);
  console.log("Count: " + count);
}
