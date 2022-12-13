import {
  removeOffsetMargin,
  addOffsetMargin
} from "./margin_offset.js";
export default function () {
  const mobileMenuWrapper = document.querySelector('.mobile-wrapper');
  const burgerButton = document.querySelector('.burger-btn');
  const overlayMobile = document.querySelector('.background');
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-btn-active');
    overlayMobile.classList.toggle('background-active');
    mobileMenuWrapper.classList.toggle('mobile-menu-active');
    if (burgerButton.classList.contains('burger-btn-active')) {
      addOffsetMargin();
    } else {
      removeOffsetMargin();
    }
  });
  overlayMobile.addEventListener('click', (e) => {
    removeOffsetMargin();
    console.log(e.target);
    if (e.target == overlayMobile) {
      burgerButton.classList.remove('burger-btn-active');
      overlayMobile.classList.remove('background-active');
      mobileMenuWrapper.classList.remove('mobile-menu-active');
    }
  });
  // mobileMenuWrapper.addEventListener('click', (e)=> {
  //   if (e.target == mobileMenuWrapper) {
  //   mobileMenuWrapper.classList.remove('mobile-menu-active');
  //   burgerButton.classList.remove('burger-btn-active');
  //   overlayMobile.classList.remove('background-active');
  //        setTimeout(() => {
  //         document.body.style.overflow = '';
  //         document.body.style.paddingRight = 0 + 'px';
  //       header.style.paddingRight = 0 + 'px';
  //       }, timeout);
  //   }
  //   });
}
//   if(windowInnerViewHeight < pageAllContentHeight) {
//     document.body.style.paddingRight = paddingOffset + 'px';
//     header.style.paddingRight = paddingOffset + 'px';
//  }
// if (burgerButton.classList.contains('burger-btn-active')) {
// burgerButton.classList.remove('burger-btn-active');
// mobileMenuWrapper.classList.remove('mobile-menu-active');
// overlayMobile.classList.remove('background-active');
//  setTimeout(() => {
//   document.body.style.overflow = '';
//   document.body.style.paddingRight = 0 + 'px';
// header.style.paddingRight = 0 + 'px';
// }, timeout);
// } else {
// burgerButton.classList.add('burger-btn-active');
// mobileMenuWrapper.classList.add('mobile-menu-active');
// overlayMobile.classList.add('background-active');
// document.body.style.overflow ='hidden';
// }
// const header = document.querySelector('.header');
// // const mobileTopOffset = header.getBoundingClientRect().height;
// // function mobileOffset() {
// //   mobileWrapper.style.marginTop = mobileTopOffset + 'px';
// // }
// // mobileOffset();
// // window.addEventListener('resize', () => {
// //   mobileOffset();
// // });
// BurgerButon.addEventListener('click', () => {
//   BurgerButon.classList.toggle('burger-active');
//   mobileRow.classList.toggle('mobile-show');
//   mobileWrapper.classList.toggle('mobile-background');
//   if (BurgerButon.classList.contains('burger-active')) {
//     document.body.classList.add('lock');
//   } else {
//     offsetPadding();
//   }
// });
// function hideMibileMenu() {
//   mobileRow.classList.remove('mobile-show');
//   mobileWrapper.classList.remove('mobile-background');
//   BurgerButon.classList.remove('burger-active');
// }
// mobileRow.addEventListener('click', (e) => {
//   if (e.target == mobileRow) {
//     hideMibileMenu();
//     offsetPadding();
//   }
// });
// const mobileItem = document.querySelectorAll('.mobile-item ');
// mobileItem.forEach(item => {
//   item.addEventListener('click', () => {
//     setTimeout(() => {
//       hideMibileMenu();
//       offsetPadding();
//     }, 1000);
//   });
// });