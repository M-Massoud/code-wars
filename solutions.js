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
  });

  arrangedWords.sort((a, b) => a[0].localeCompare(b[0]));

  arrangedWords.map((word) => {
    const cleanedWord = word.substring(1, word.length);
    wordsWithoutLetters.push(cleanedWord);
  });

  return wordsWithoutLetters;
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

  const calculatedNumbers = cleanUpWords(sentence);

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

    result = applyOperator(operator, +result, +calculatedNumbers[i]);
  }

  return Math.round(result);
};

console.log(doMath("24z6 1x23 y369 89a 900b")); // 1299
console.log(doMath("24z6 1z23 y369 89z 900b")); // 1414
