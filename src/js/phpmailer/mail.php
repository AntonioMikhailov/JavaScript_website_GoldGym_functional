<?php 

require_once('PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$subject = $_POST['user_subject'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP(); 
$mail->IsMail(); 
$mail->IsSendmail();                                     // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = false;  // Убрал  - было true Enable SMTP authentication
$mail->Username = ''; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ''; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

//$mail->setFrom('antoniom1973@gmail.com');
$mail->setFrom($email);
//$mail->setFrom('antoniom@mail.ru'); // от кого будет уходить письмо?
//$mail->addAddress('okhamedia@okhamedia.ru');     // Кому будет уходить письмо 
$mail->addAddress('okhamedia@okhamedia.ru');  
//$mail->addAddress('ellen@example.com');
               // Name is optional
//$mail->addAddress($email); // подставляем почту которую ввел пользователь
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);  // Set email format to HTML

$mail->Subject = 'Сообщение с вашего сайта';
$mail->Body    = '<b>Новое сообщение от:</b> ' .$name.'<br>
<b> Почта отправителя:</b> '.$email.'<br>
<b>Текст сообщения:</b> '.$subject;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
   // Убрать если через AJAX чтобы не перезагружалась страница 
  // header('location: http://tochka-focusa.ru/tests/index.html');
}
?>
