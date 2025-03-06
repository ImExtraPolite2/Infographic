const classNames = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
];

let num = 0;

function hideFacts() {
  const allFacts = document.querySelectorAll('.fact');
  const goUp = document.querySelector('.up');
  const goDown = document.querySelector('.down');

  allFacts.forEach((fact) => {
    if (fact.classList.contains(classNames[num])) {
      fact.style.display = 'block';
    } else {
      fact.style.display = 'none';
    }
  });

  goUp.addEventListener('click', () => {
    num--;

    if (num < 1) {
      num = 7;
    }

    allFacts.forEach((fact) => {
      if (fact.classList.contains(classNames[num])) {
        fact.style.display = 'block';
        fact.style.animation = 'hide 500ms linear';
      } else {
        fact.style.display = 'none';
      }
    });
  });

  goDown.addEventListener('click', () => {
    num++;

    if (num > 7) {
      num = 0;
    }

    allFacts.forEach((fact) => {
      if (fact.classList.contains(classNames[num])) {
        fact.style.display = 'block';
        fact.style.animation = 'hide 500ms linear';
      } else {
        fact.style.display = 'none';
      }
    });
  });
}

function playSound() {
  const blackHoleSounds = new Audio('assets/alien.mp3');
  const musicButton = document.querySelector('.off-button');
  const musicButtonOuter = document.querySelector('.off-outer');

  musicButtonOuter.addEventListener('click', () => {
    if (musicButtonOuter.className === 'off-outer') {
      musicButtonOuter.className = 'on-outer';
      musicButton.className = 'on-button';
      blackHoleSounds.play();
    } else {
      musicButtonOuter.className = 'off-outer';
      musicButton.className = 'off-button';
      blackHoleSounds.pause();
      blackHoleSounds.currentTime = 0;
    }
  });

  musicButton.addEventListener('click', () => {
    if (musicButtonOuter.className === 'off-outer') {
      musicButtonOuter.className = 'on-outer';
      musicButton.className = 'on-button';
      blackHoleSounds.play();
    } else {
      musicButtonOuter.className = 'off-outer';
      musicButton.className = 'off-button';
      blackHoleSounds.pause();
      blackHoleSounds.currentTime = 0;
    }
  });
}

gsap.to('.title', {
  duration: 2,
  text: 'BLACKHOLES',
  ease: 'none',
});

hideFacts();
playSound();
