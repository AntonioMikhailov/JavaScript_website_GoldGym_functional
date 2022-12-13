  //компенсация сдвига вправо 
  let marginOffset = window.innerWidth - document.body.clientWidth;
  export function addOffsetMargin() {
    document.body.style.marginRight = marginOffset + 'px';
    //для якоря
    document.querySelector('.anchor-wrapper').style.display = 'none';
    document.querySelector('.chat-popup').style.display = 'none';
    document.body.classList.add('lock');
  }

  export function removeOffsetMargin() {
    setTimeout(() => {
      document.body.style.marginRight = 0 + 'px';
      document.body.classList.remove('lock');
      //для якоря
      document.querySelector('.anchor-wrapper').style.display = '';
      document.querySelector('.chat-popup').style.display = '';
    }, 300);
  }