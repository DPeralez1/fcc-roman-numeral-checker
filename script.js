document.getElementById("convert-btn").addEventListener("click", function () {
  const numberElement = document.getElementById("number");
  let number = parseInt(numberElement.value); // Convert input value to integer
  const outputElement = document.getElementById("output");

  if (isNaN(number)) {
    outputElement.textContent = "Please enter a valid number";
  } else if (number < 1) {
    outputElement.textContent =
      "Please enter a number greater than or equal to 1";
  } else if (number > 3999) {
    outputElement.textContent =
      "Please enter a number less than or equal to 3999";
  } else {
    const romanNumeral = convertNumrals(number);
    outputElement.textContent = `${romanNumeral}`;
  }
});

const convertNumrals = (number) => {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let result = "";
  for (let [roman, value] of romanNumerals) {
    while (number >= value) {
      result += roman;
      number -= value;
    }
  }
  return result;
};
