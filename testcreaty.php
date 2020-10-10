<?php
// Check for empty fields
if(empty($_POST['inputName'])      ||
   empty($_POST['inputTel'])     ||
   empty($_POST['inputCel'])     ||
   empty($_POST['inputAdress'])   ||
   empty($_POST['inputCity'])   ||
   empty($_POST['inputState'])   ||
   empty($_POST['inputZip'])   ||
   //empty($_POST['selected'])   ||
   //empty($_POST['calendarioHorario'])   ||
   !filter_var($_POST['inputEmail4'],FILTER_VALIDATE_EMAIL))
   {
   echo "Faltan Campos por Llenar";
   return false;
   }
   
$nombre = strip_tags(htmlspecialchars($_POST['inputName']));
$email = strip_tags(htmlspecialchars($_POST['inputEmail4']));
$tel = strip_tags(htmlspecialchars($_POST['inputTel']));
$cel = strip_tags(htmlspecialchars($_POST['inputCel']));
$direccion = strip_tags(htmlspecialchars($_POST['inputAdress']));
$ciudad = strip_tags(htmlspecialchars($_POST['inputCity']));
$estado = strip_tags(htmlspecialchars($_POST['inputState']));
$cp = strip_tags(htmlspecialchars($_POST['inputZip']));

   
// Create the email and send the message
$to = 'marcogarcia.gon@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Cotizacion de:  $name";
$email_body = "Nueva entrada en el fomrulario de figueroasclean.com.\n\n"."Detalles\n\nNombre: $nombre\n\nEmail: $email\n\nTel: $tel\n\nCelular: $cel\n\nDireccion: $direccion\n\nCiudad: $ciudad\n\nEstado: $estado\n\nCP: $cp\n";
$headers = "From: noreply@figueroasclean.com.mx\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
