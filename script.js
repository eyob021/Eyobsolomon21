let slidePos = 0;

function moveSlide(step) {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const slideWidth = images[0].offsetWidth;
  slidePos += step * slideWidth;

  // limit scrolling
  const maxScroll = (images.length - 1) * slideWidth;
  slidePos = Math.max(0, Math.min(slidePos, maxScroll));

  slider.style.transform = `translateX(-${slidePos}px)`;
  sidebar.style.width="220px";
}
