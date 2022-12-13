export default function() { 
 
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
 
 };//