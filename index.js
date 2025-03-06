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

const allMusic = [
  'assets/silent-partner.mp3',
  'assets/Bike-Rides.mp3',
  'assets/Splashing-Around.mp3',
  'assets/blue-skies.mp3',
  'assets/xenogenesis.mp3',
  'assets/Elevator-music.mp3',
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
  const musicButton = document.querySelector('.off-button');
  const musicButtonOuter = document.querySelector('.off-outer');
  let music;
  let num = 0;

  musicButtonOuter.addEventListener('click', () => {
    if (musicButtonOuter.className === 'off-outer') {
      if (num > 5) {
        num = 0;
      }

      music = new Audio(allMusic[num]);
      musicButtonOuter.className = 'on-outer';
      musicButton.className = 'on-button';
      music.play();
      num++;
    } else {
      musicButtonOuter.className = 'off-outer';
      musicButton.className = 'off-button';
      music.pause();
      music.currentTime = 0;
    }
  });

  musicButton.addEventListener('click', () => {
    if (musicButtonOuter.className === 'off-outer') {
      if (num > 5) {
        num = 0;
      }

      music = new Audio(allMusic[num]);
      musicButtonOuter.className = 'on-outer';
      musicButton.className = 'on-button';
      music.play();
      num++;
    } else {
      musicButtonOuter.className = 'off-outer';
      musicButton.className = 'off-button';
      music.pause();
      music.currentTime = 0;
    }
  });
}

function showNotice() {
  const musicButton = document.querySelector('.off-button');
  const musicButtonOuter = document.querySelector('.off-outer');
  const playNotice = document.querySelector('.play-notice');

  musicButton.addEventListener('mouseenter', () => {
    playNotice.style.display = 'block';
  });

  musicButton.addEventListener('mouseleave', () => {
    playNotice.style.display = 'none';
  });

  musicButtonOuter.addEventListener('mouseenter', () => {
    playNotice.style.display = 'block';
  });

  musicButtonOuter.addEventListener('mouseleave', () => {
    playNotice.style.display = 'none';
  });
}

gsap.to('.title', {
  duration: 2,
  text: 'BLACKHOLES',
  ease: 'none',
});

hideFacts();
playSound();
showNotice();
