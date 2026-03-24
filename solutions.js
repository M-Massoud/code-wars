// https://www.codewars.com/kata/5782dd86202c0e43410001f6
// Number , number ... wait LETTER !

const cleanUpWords = (sentence) => {
  const words = sentence.split(" ");

  const arrangedWords = [];
  const wordsWithoutLetters = [];

  words.map((word) => {
    let arrangedWord = "";

    [...word].map((letter) => {
      if (Number.isFinite(+letter)) arrangedWord += letter;
      else arrangedWord = letter + arrangedWord;
    });

    arrangedWords.push(arrangedWord);
    arrangedWords.sort();
  });

  arrangedWords.map((word) => {
    const cleanedWord = word.substring(1, word.length);
    wordsWithoutLetters.push(cleanedWord);
  });

  return wordsWithoutLetters.join(" ");
};

const applyOperator = (operator, x, y) => {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
  }
};

const doMath = (sentence) => {
  const computations = ["+", "-", "*", "/"];

  const numbers = cleanUpWords(sentence);

  const calculatedNumbers = numbers.split(" ");

  console.log("numbers", numbers);

  let result = 0;
  let operator;
  let computationsIndex;

  for (let i = 0; i < calculatedNumbers.length; i++) {
    if (i === 0) {
      result = +calculatedNumbers[i];
      continue;
    }

    computations[computationsIndex] !== undefined &&
    computationsIndex < computations.length - 1
      ? (computationsIndex += 1)
      : (computationsIndex = 0);

    operator = computations[computationsIndex];
    console.log("operator", operator);

    console.log("calculated number", calculatedNumbers[i]);

    result = applyOperator(operator, +result, +calculatedNumbers[i]);
  }

  console.log("result:  ", result);

  return result;
};

console.log(doMath("24z6 1x23 y369 89a 900b"));
console.log(doMath("24z6 1z23 y369 89z 900b"));
