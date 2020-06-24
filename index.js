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
setInterval(moveScroll, 18);

const slide = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#slider-right');
const prev = document.querySelector('#slider-left');
let count = 1;
const size = slides[0].clientWidth;
let transitionWidth = 0;

slide.style.transform = `translateX(${count * (-size)}px)`;

next.addEventListener('click', () => {
    console.log('hello')
    let id = setInterval(animation.bind(this, -1), 1)
    next.disabled = true
    setTimeout(() => {
        clearInterval(id)
        count++
        transitionWidth = 0
        if (count >= slides.length - 1) {
            count = 1
            slide.style.transform = `translateX(${count * (-size)}px)`
        }
        next.disabled = false
    }, size)
})

prev.addEventListener('click', () => {
    let id = setInterval(animation.bind(this, 1), 1)
    prev.disabled = true
    setTimeout(() => {
        clearInterval(id)
        count--
        transitionWidth = 0
        if (count === 0) {
            count = slides.length - 2
            slide.style.transform = `translateX(${count * (-size)}px)`
        }
        prev.disabled = false
    }, size)
});


const animation = (direction) => {
    if (transitionWidth <= size) {
        slide.style.transform = `translateX(${((count) * (-size) + transitionWidth * direction)}px)`
        transitionWidth += 9
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});