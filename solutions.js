// https://www.codewars.com/kata/5782dd86202c0e43410001f6
// Number , number ... wait LETTER !

const cleanUpWords = (sentence = "") => {
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

  console.log(arrangedWords);

  arrangedWords.map((word) => {
    const cleanedWord = word.substring(1, word.length);
    wordsWithoutLetters.push(cleanedWord);
  });

  return wordsWithoutLetters.join(" ");
};

const doTheMath = "";

console.log(cleanUpWords("24z6 1x23 y369 89a 900b"));

//Todo arrange the words based on the letter, do the math
