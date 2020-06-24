const myScroll = document.querySelector('.about__scroll img');
let y = 0;
let px = 1;

function moveScroll() {
    myScroll.style.transform = `translateY(${y}px)`;
    if (y === 30) {
        px = -1;
    }
    if (y === 0) {
        px = 1;
    }
    y += px;
}

moveScroll();

setInterval(moveScroll, 18);