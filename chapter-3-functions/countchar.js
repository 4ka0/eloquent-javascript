function countChar(text, char) {
  let count = 0;
  for (let i = 0; i < text.length; i += 1 ) {
    if (text[i] == char) {
        count += 1;
    }
  }
  return count;
}