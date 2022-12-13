export default function() { 
 
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
 
 }//