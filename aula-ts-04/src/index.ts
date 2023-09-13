function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number): void {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}

(() => {
  //const num1Str = prompt("First Number");
  //const num2Str = prompt("Second Number");

  const num1Str = "2";
  const num2Str = "3";

  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Unable to execute with such input. Make sure you enter valid numbers.");
  } else {
    let result = add(num1, num2);
    result += multiply(1, 2);
    showResult(result);
  }
})();
