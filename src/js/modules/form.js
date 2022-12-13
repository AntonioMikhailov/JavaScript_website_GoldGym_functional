export default function (formSelector, inputSelector, textareaSelector) {
  const form = document.querySelector(formSelector);
  // console.log(form);
  const input = document.querySelectorAll(inputSelector);
  const textarea = document.querySelector(textareaSelector);

  try {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    

      let numOfInputs = 0;
      input.forEach(item => {
        if (item.value.length > 0 && textarea.value.length > 0) {
          numOfInputs++;
         if (numOfInputs == input.length) {
            form.lastElementChild.classList.remove('active-warn');
            form.lastElementChild.classList.add('active-form');
            form.lastElementChild.innerHTML = 'сообщение отправлено';
                //Отправляем 
                const formData = new FormData(form);
              //путь указал к себе на хостинг т.к. MAMP Глючит. В mail.php ничего не трогал кроме апгрейда ящиков 
              fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", {
                // fetch("./phpmailer/mail.php", {
                  method: 'POST',
                  body: formData
                });
       
            setTimeout(() => {
              //очищаем форму
              form.reset();
            }, 1500);
          }
        }
      });
      //если не заполнены ВСЕ поля
      input.forEach(item => {
        if (item.value.length == 0 || textarea.value.length == 0) {
          form.lastElementChild.innerHTML = 'заполните все поля';
          form.lastElementChild.classList.add('active-warn');
        }
      });
      //при вводе в поле после отправки  - очищаем кнопку  отправки
      form.addEventListener('input', (e) => {
        e.preventDefault();
        form.lastElementChild.classList.remove('active-form');
        form.lastElementChild.classList.remove('active-warn');
        form.lastElementChild.innerHTML = 'отправить сообщение';
      });
    });

  } catch (error) {
    
  }

}