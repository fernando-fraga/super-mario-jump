const pipe  = document.querySelector('.pipe');
const mario = document.querySelector('.mario');


const jump = () => {
    mario.classList.add('jump');


    setTimeout(() => { 
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 130 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = pipePosition + 'px';

        mario.style.animation = 'none';
        mario.style.bottom = marioPosition + 'px';

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '55px';

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', jump);