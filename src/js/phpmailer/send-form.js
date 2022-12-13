//ОТправка-Подготовка и проверка формы с AJAX
$(document).ready(function() {
	$('form').submit(function() { 
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.message__send').addClass('active');
		
		$('form').trigger('reset'); // Сбросит данные из полей
		});
		return false;
	});
}); 

// ФОРМА Находим все переменные

const message = document.querySelector('.message__send'),
remove = document.querySelectorAll('input,textarea'),
btnSend = document.querySelector('.button');

message.addEventListener('click', ()=> {
	message.classList.remove('active');
	
});

// 	remove.forEach(item => {
// 		item.addEventListener('click', ()=> {
// 		message.classList.remove('active');
// 		//снимаем блокировку с кнопки
// 		btnSend.disabled=false;
// 		// hover.classList.remove('button:hover'); 
// 	});
// });




