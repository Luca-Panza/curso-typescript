const numbers: number[] = [1, 2, 3, 4, 5];
const answers: boolean[] = [true, false, false, true, false];
const strings: string[] = ["one", "two", "three", "four", "five"];
const mix: (number | string)[] = [1, "two", 3, "four", 5];
const floatNumbers: number[] = [1.0, 2.5, 3.0, 4.1, 5.5];

const numbers2: Array<number> = [1, 2, 3, 4, 5];
const answers2: Array<boolean> = [true, false, false, true, false];
const strings2: Array<string> = ["one", "two", "three", "four", "five"];
const mix2: Array<number | string> = [1, "two", 3, "four", 5];
const floatNumbers2: Array<number> = [1.0, 2.5, 3.0, 4.1, 5.5];

console.log(numbers, answers, strings, mix, floatNumbers);
console.log(numbers2, answers2, strings2, mix2, floatNumbers2);
