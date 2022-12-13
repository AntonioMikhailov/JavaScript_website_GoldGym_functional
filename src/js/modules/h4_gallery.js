export default function () {
  const hFourGalleryRow = document.querySelectorAll('.h-four__galleryRow');
  const hFourButtonPrev = document.querySelector('.h-four__buttonPrev');
  const hFourButtonNext = document.querySelector('.h-four__buttonNext');
  let SlideIndex = 1;

  function showSlides(n) {
    if (n > hFourGalleryRow.length) {
      SlideIndex = 1;
    }
    if (n < 1) {
      SlideIndex = hFourGalleryRow.length;
    }
    hFourGalleryRow.forEach(item => {
      item.classList.remove('h-four__galleryRow__show');
      hFourGalleryRow[SlideIndex - 1].classList.add('h-four__galleryRow__show');
    });
  }
  try {
    hFourButtonNext.addEventListener('mousedown', () => {
      showSlides(SlideIndex += 1);
    });
    hFourButtonPrev.addEventListener('click', () => {
      showSlides(SlideIndex -= 1);
    });
  } catch (error) {}
} //