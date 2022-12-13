
import navScroll from "./modules/nav_scroll.js";
import mobile_menu from "./modules/mobile_menu.js";
import header_search from "./modules/header_search.js";
import chat_modal from "./modules/chat_askModal.js";
import h4_gallery from "./modules/h4_gallery.js";
import section_gallery from "./modules/section_gallery.js";
import form_submit from "./modules/form_submit.js";
import form from "./modules/form.js";



window.addEventListener('DOMContentLoaded', () => {
 
  //вызываем все модули
 navScroll('.anchor-wrapper');
  mobile_menu('.burger-btn','.mobile-close-button', '.mobile-overlay', '.mobile-wrapper', 'burger-btn-active');
  header_search();
  chat_modal();
  h4_gallery();
  section_gallery();
  //ограничим отправку только Подписки формой с классом
  form_submit('.h-seven__formRow', '.h-seven__input');
  form('form[data-form]', '.bi-three__input', '.bi-three__textarea');
 
  


 

});