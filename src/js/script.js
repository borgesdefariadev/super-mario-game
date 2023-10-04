const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const floor = document.querySelector('.floor');
const scoreBoard = document.getElementById('score-board');

let score = 0;

const jump = (event) => {
  if (event.keyCode === 32) {
    mario.classList.add('jump');

    setTimeout(() => {
      mario.classList.remove('jump');

    }, 1000)
  }
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  if (pipePosition > -69) {
    score++;  

    scoreBoard.textContent = `Score: ${score}`;
  }

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90 &&pipePosition) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`

    mario.src = './assets/game-over.png';
    mario.style.width = '75px';
    mario.style.margin = '50px';
    floor.src = './assets/static-floor.png';

    clearInterval(loop);
  }
}, 10)


document.addEventListener('keydown', jump);
