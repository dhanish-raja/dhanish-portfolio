const textElement = document.getElementById("typed-text");
const phrases = [
  "Student!",
  "LeetCode Legend!",
  "Aspiring SDE!"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[currentPhraseIndex];
  const visibleText = currentPhrase.substring(0, currentCharIndex);

  textElement.textContent = visibleText;

  if (!isDeleting) {
    if (currentCharIndex < currentPhrase.length) {
      currentCharIndex++;
      setTimeout(typeEffect, 150);
    } else {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(typeEffect, 75);
      }, 500);
    }
  } else {
    if (currentCharIndex > 0) {
      currentCharIndex--;
      setTimeout(typeEffect, 75);
    } else {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 150);
    }
  }
}

typeEffect();
