
<?php
ob_start();
echo 'Name: '.$_POST['name'].'<br>';
echo 'Email: '.$_POST['email'].'<br>';
echo 'Phone: '.$_POST['phone'].'<br>';
echo 'Budget: '.$_POST['budget'].'<br>';
echo 'Pages: '.$_POST['pages'].'<br>';
echo 'Message: '.$_POST['message'].'<br>';


$mails_content = ob_get_clean();
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers = 'From: info@aliglob.com' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail('web.alisher89@gmail.com', 'New request from AliGlob.com'. $_post['name'], $mails_content, $headers);
 



ob_start();

echo 'Dear '.$_POST['name'].'<br>
<br>
Thank you for your interest in our website services. Ali Globalization is a creative website development company with affordable price.<br>
<br>
We have received your project information and we will contact you shortly. You can call us at 917-293-4098 at any time.<br>
<br><br>
<br>
Sincerely,<br>
<br>
Ali Globalization Team<br>
<br>
<br>
<b>Phone:</b>  917-293-4098<br>
<b>Email:</b> web.alisher89@gmail.com<br>
<b>Website:</b> www.aliGlob.com<br>';

$mail_content = ob_get_clean();
mail($_POST['email'], 'Thank you! We received your request', $mail_content, $headers);

?>


<script>
	window.location.href = 'https://aliglob.com/thank-you';
</script>
