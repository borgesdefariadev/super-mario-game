const mario = document.querySelector('.mario');

const jump = (event) => {
  if (event.keyCode === 32) {
    mario.classList.add('jump');

    setTimeout(() => {
      mario.classList.remove('jump');

    }, 200)
  }
}

document.addEventListener('keydown', jump);