//Scroll animation
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

//Slider JavaScript
const container = document.querySelector('.slider');
const slide = document.querySelector('.slide-container')
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#slider-right');
const prev = document.querySelector('#slider-left');
let count = 1;
const size = slides[0].clientWidth;
let transitionWidth = 0;
slide.style.transform = `translateX(${count * (-size)}px)`;

let blue = [46, 170, 209];
let white = [254, 378, 417];
const rgbStep = (255 - blue[0]) / 245;
let sign = 1;

next.addEventListener('click', () => {
    let id = setInterval(animation.bind(this, -1), 1);
    next.disabled = true;
    setTimeout(() => {
        clearInterval(id);
        count++;
        transitionWidth = 0;
        if (count >= slides.length - 1) {
            count = 1
            slide.style.transform = `translateX(${count * (-size)}px)`
        };
        next.disabled = false;
        sign *= -1;
    }, size);
})

prev.addEventListener('click', () => {
    let id = setInterval(animation.bind(this, 1), 1);
    prev.disabled = true;
    setTimeout(() => {
        clearInterval(id);
        count--;
        transitionWidth = 0;
        if (count === 0) {
            count = slides.length - 2
            slide.style.transform = `translateX(${count * (-size)}px)`
        };
        prev.disabled = false;
        sign *= -1;
    }, size);
});


const animation = (direction) => {
    //Change color of borders
    blue[0] += rgbStep * sign;
    blue[1] += rgbStep * sign;
    blue[2] += rgbStep * sign;

    white[0] += rgbStep * -sign;
    white[1] += rgbStep * -sign;
    white[2] += rgbStep * -sign;

    container.style.borderLeftColor = `rgb(${blue[0]}, ${blue[1]}, ${blue[2]})`;
    container.style.borderRightColor = `rgb(${blue[0]}, ${blue[1]}, ${blue[2]})`;
    container.style.borderTopColor = `rgb(${white[0]}, ${white[1]}, ${white[2]})`;
    container.style.borderBottomColor = `rgb(${white[0]}, ${white[1]}, ${white[2]})`;

    //Transition slide box
    if (transitionWidth <= size) {
        slide.style.transform = `translateX(${((count) * (-size) + transitionWidth * direction)}px)`
        transitionWidth += 9
    }
};


//Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});