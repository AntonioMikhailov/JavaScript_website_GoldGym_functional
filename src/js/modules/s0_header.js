import {
  offsetPadding, addOffsetPadding
} from "../script.js";
export default function () {
  const mobileWrapper = document.querySelector('.mobile-wrapper');
  const header = document.querySelector('.header');
  const mobileTopOffset = header.getBoundingClientRect().height;

  function mobileOffset() {
    mobileWrapper.style.marginTop = mobileTopOffset + 'px';
  }
  mobileOffset();
  window.addEventListener('resize', () => {
    mobileOffset();
  });
  const BurgerButon = document.querySelector('.header-burgerButon');
  const mobileRow = document.querySelector('.mobile-row ');
  BurgerButon.addEventListener('click', () => {
    BurgerButon.classList.toggle('burger-active');
    mobileRow.classList.toggle('mobile-show');
    mobileWrapper.classList.toggle('mobile-background');
    if (BurgerButon.classList.contains('burger-active')) {
      document.body.classList.add('lock');
    } else {
      offsetPadding();
    }
  });

  function hideMibileMenu() {
    mobileRow.classList.remove('mobile-show');
    mobileWrapper.classList.remove('mobile-background');
    BurgerButon.classList.remove('burger-active');
  }
  mobileRow.addEventListener('click', (e) => {
    if (e.target == mobileRow) {
      hideMibileMenu();
      offsetPadding();
    }
  });
  const mobileItem = document.querySelectorAll('.mobile-item ');
  mobileItem.forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(() => {
        hideMibileMenu();
        offsetPadding();
      }, 1000);
    });
  });
}