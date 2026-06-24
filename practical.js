
function checkVowelConsonant(ch) {
  if (!ch || ch.length !== 1){

    return "Please provide a single character.";
  }
  const c = ch.toLowerCase();
  if (c < 'a' || c > 'z') {
    return "Not an alphabetic character.";
  }
  if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
    return `${ch} is a vowel.`;
  } else {
    return `${ch} is a consonant.`;
  }
}

// Web page handler: reads input with id 'charInput' and writes result to 'result'
function handleCheck() {
  const input = document.getElementById('charInput').value;
  const result = checkVowelConsonant(input);
  document.getElementById('result').textContent = result;
}

// Expose to global scope for inline onclick handlers in older browsers
window.handleCheck = handleCheck;
