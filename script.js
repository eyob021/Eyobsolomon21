let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider img');
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}
 
