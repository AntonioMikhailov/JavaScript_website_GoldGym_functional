const allContent = document.querySelector('.content');
const header = document.querySelector('.header');
const headerHeight = getComputedStyle(header);
const mobileMenuWrapper = document.querySelector('.mobile-wrapper');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerButton = document.querySelector('.burger-btn');
const mobileCloseBtn  = document.querySelector('.mobile-close-button');

const background = document.querySelector('.background');

function contentTopMargin() {
  allContent.style.marginTop = headerHeight.height;
  
  mobileMenuWrapper.style.top = headerHeight.height;
}
contentTopMargin();

window.addEventListener('resize', ()=> {
  contentTopMargin();
});

const windowClientHeight = document.documentElement.clientHeight; 
const pageAllContentHeight = document.documentElement.scrollHeight; 
const windowInnerViewHeight = window.innerHeight;
const windowOuterWidth = window.outerWidth; 
const windowInnerWidth = window.innerWidth; 

let paddingOffset = window.outerWidth - window.innerWidth;
console.log(paddingOffset); 
let timeout = 100; 


burgerButton.addEventListener('click', () => {
  if(windowInnerViewHeight < pageAllContentHeight) {
    document.body.style.paddingRight = paddingOffset + 'px';
    
    header.style.paddingRight = paddingOffset + 'px';
 }
if (burgerButton.classList.contains('burger-btn-active')) {
burgerButton.classList.remove('burger-btn-active');
mobileMenuWrapper.classList.remove('mobile-menu-active');
background.classList.remove('background-active');
 
 setTimeout(() => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = 0 + 'px';
header.style.paddingRight = 0 + 'px';
}, timeout);
} else {
burgerButton.classList.add('burger-btn-active');
mobileMenuWrapper.classList.add('mobile-menu-active');
background.classList.add('background-active');
document.body.style.overflow ='hidden';

}
});
 
mobileMenuWrapper.addEventListener('click', (event)=> {
if (event.target == mobileMenuWrapper) {
mobileMenuWrapper.classList.remove('mobile-menu-active');
burgerButton.classList.remove('burger-btn-active');
background.classList.remove('background-active');
     
     setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = 0 + 'px';
    header.style.paddingRight = 0 + 'px';
    }, timeout);




}
});

const headerSearchIcon = document.querySelector('.header-row-Top-right__searchIcon ');
const headerTopSearchField = document.querySelector('.header-row-Top-searchField');
const headerSearchInputIcon = document.querySelector('.header-row-Top-searchInputIcon');
const inputHeader = document.querySelector('input.header-row-Top-input');
const headerTopleft = document.querySelector('.header-row-Top-left');
const mediaWidth = window.matchMedia("(max-width: 720px)");
headerSearchIcon.addEventListener('click', ()=> { 
  headerTopSearchField.classList.toggle('header-searchField__active');
  headerSearchIcon.classList.toggle('headerSearchIcon__active');
  inputHeader.focus();
  if(mediaWidth.matches) {
    headerTopleft.classList.toggle('header-row-Top-left__hidden');
  }
});

headerSearchInputIcon.addEventListener('click', ()=> { 
  inputHeader.value = '';
  inputHeader.focus();
});

// const hFourGalleryRow = document.querySelectorAll('.h-four__galleryRow');
// const hFourButtonPrev = document.querySelector('.h-four__buttonPrev');
// const hFourButtonNext = document.querySelector('.h-four__buttonNext');
// let SlideIndex = 1;
// function showSlides(n) {
    
//     if (n > hFourGalleryRow.length) {
//         SlideIndex =1;
//     }
     
//     if(n < 1 ) {
//         SlideIndex =hFourGalleryRow.length;
//     }
//     hFourGalleryRow.forEach(item => {
//         item.classList.remove('h-four__galleryRow__show');
//         hFourGalleryRow[SlideIndex-1].classList.add('h-four__galleryRow__show');
// });
// }
// hFourButtonNext.addEventListener('mousedown', ()=> {
  
//   showSlides(SlideIndex += 1); 
// });
// hFourButtonPrev.addEventListener('click', ()=> {
      
//       showSlides(SlideIndex -= 1);
// });

const hSevenInput  = document.querySelector('.h-seven__input ');
const hSevenButton = document.querySelector('.h-seven__button');
hSevenButton.addEventListener('click', ()=> { 
  setTimeout(() => {
     hSevenInput.value = '';
  }, 300);
 
});
  
  const anchor = document.querySelector('.anchor-wrapper');
  const headerRow = document.querySelector('.header-row');
  
  let scrollPos = 0;
  
  window.addEventListener('scroll', function () {
    let i = window.pageYOffset;
    let e = window.innerHeight;
    let documentScrollHeight = document.documentElement.scrollHeight; 
    
    
    if ((document.body.getBoundingClientRect()).top > scrollPos && i >= e - i ||  i+e == documentScrollHeight ) {
      anchor.classList.add('anchor-active');
    } else {
      anchor.classList.remove('anchor-active');
    }
    
    scrollPos = (document.body.getBoundingClientRect()).top;
    console.log(i);
    
     console.log(documentScrollHeight);
  });
  
  function smoothScroll () {
    let startPosition = window.pageYOffset;
  let targetPosition = headerRow.offsetTop; 
  let distance = targetPosition - startPosition;
  let duration = 1000; 
  let start = null;  
  window.requestAnimationFrame(step);
  function step(timestamp) {
if (!start) start = timestamp;
let progress = timestamp - start;

window.scrollTo(0, easing(progress, startPosition, distance, duration));
if (progress < duration) { 
  window.requestAnimationFrame(step);
}
}
}


function easing (t, b, c, d) {
return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  };
  anchor.addEventListener('click', function()  {
    smoothScroll();
  anchor.classList.remove('anchor-active');
  });


  
  const chatAskCancelButton = document.querySelector('.chat-ask__cancel');
  const chatAskLabel  = document.querySelector('.chat-ask ');
  const chatAskPopUpIcon = document.querySelector('.chat-ask__popUpIcon');
const formChat = document.querySelector('.formChat');
const formChatCancelIcon = document.querySelector('.formChat__cancelIcon');

chatAskPopUpIcon.addEventListener('click', ()=> { 
  formChat.classList.add('formChat__active');
});

  chatAskCancelButton.addEventListener('click', ()=> { 
    chatAskLabel.classList.add('chat-ask-hide__active');
    chatAskCancelButton.classList.add('chat-ask-hide__active');
});

formChatCancelIcon.addEventListener('click', ()=> { 
  formChat.classList.remove('formChat__active');
  chatAskLabel.classList.remove('chat-ask-hide__active');
    chatAskCancelButton.classList.remove('chat-ask-hide__active');
 
});

const formChatInput = document.querySelectorAll('.formChat_input');
const formChatButton = document.querySelector('.formChat__button');

 formChatButton.addEventListener('click', ()=> { 
    formChatInput.forEach(item => {
    item.value = '';
 });
});