import {
  removeOffsetMargin,
  addOffsetMargin
} from "./margin_offset.js";
export default function () {
   const previewImage = document.querySelectorAll('.carousel-preview-item');
  const carouselContainer = document.querySelector('.carousel-container');
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const carouselMain = document.querySelector('.carousel-main');
  const sliderRow = document.querySelector('.slider-row ');
  const btnNext = document.querySelector('.button-next');
  const btnPrev = document.querySelector('.button-prev');
  const cancelBtn = document.querySelector('.carousel-cancelBtn');
  previewImage.forEach(item => { 
    item.addEventListener('click', () => {
   
          carouselContainer.classList.add('show-carousel');
          stopTransitionEnd = 1;
          addOffsetMargin();
        
    });
  });

  let stopTransitionEnd;
  let direction = -1;

try { // т.к. Ошибка на Главной из за Карусели которая в Section
  btnNext.addEventListener('click', () => {
    stopTransitionEnd = 0;
    if (direction == 1) {
      sliderRow.prepend(sliderRow.lastElementChild);
 
    }
    direction = -1;
    carouselMain.style.justifyContent = 'flex-start';
    sliderRow.style.transform = 'translate(-20%)';
  });
  btnPrev.addEventListener('click', () => {
    stopTransitionEnd = 0;
    if (direction == -1) {
      sliderRow.append(sliderRow.firstElementChild);
    }
    direction = 1;
    carouselMain.style.justifyContent = 'flex-end';
    sliderRow.style.transform = 'translate(20%)';
  });
  sliderRow.addEventListener('transitionend', () => {
    if (stopTransitionEnd == 0) {
      if (direction == -1) {
        sliderRow.append(sliderRow.firstElementChild);
      } else {
        sliderRow.prepend(sliderRow.lastElementChild);
        console.log('Prepend3');
      }
      sliderRow.style.transition = 'none';
      sliderRow.style.transform = 'translate(0)';
      setTimeout(() => {
        sliderRow.style.transition = 'all .5s ease';
      });
    }
  });
  cancelBtn.addEventListener('click', () => {
    removeOffsetMargin();
    carouselContainer.classList.remove('show-carousel');
   
  });
  carouselContainer.addEventListener('click', (e) => {
    if (e.target == carouselContainer) {
      removeOffsetMargin();
      carouselContainer.classList.remove('show-carousel');
    }
  });

} catch (error) {}

   
} //