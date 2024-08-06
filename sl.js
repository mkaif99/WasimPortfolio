const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let index = 0;

next.addEventListener('click', () => {
    if (index < slider.children.length - 1) {
        index++;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});
