const generateCharObject = text => {
  let charObj = {};

  for (let char of text) {
    charObj[char] = charObj[char] ? charObj[char] + 1 : 1;
  }

  return charObj
}

const isAnagramMember = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  const firstWordMap = generateCharObject(firstWord);
  const secondWordMap = generateCharObject(secondWord);

  for (let char in firstWordMap) {
    if (firstWordMap[char] !== secondWordMap[char]) {
      return false;
    }
  }

  return true;
}

const groupingAnagramMember = (source, word) => {
  for (let wordsSource of source) {
    const firstWordsSource = wordsSource[0];

    if (isAnagramMember(firstWordsSource, word)) {
      wordsSource[wordsSource.length] = word;
      return;
    }
  }

  source[source.length] = [word];
}

const anagram = arrWord => {
  const anagramGrouped = [];

  for (let word of arrWord) {
    if (anagramGrouped.length == 0) {
      anagramGrouped[0] = [word];
    } else {
      groupingAnagramMember(anagramGrouped, word);
    }
  }

  return anagramGrouped;
}

console.log('//', anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));