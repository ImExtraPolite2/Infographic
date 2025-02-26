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
let num = 1;

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

gsap.to('.title', {
  duration: 2,
  text: 'BLACKHOLES',
  ease: 'none',
});

hideFacts();
