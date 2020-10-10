<?php


// Check for empty fields
if(empty($_POST['cotName'])      ||  
    empty($_POST['cotTel'])      ||
   empty($_POST['cotPhone'])     ||
   empty($_POST['cotMail'])     ||
   empty($_POST['cotAdress'])   ||
   empty($_POST['cotColonia'])   ||
   empty($_POST['cotZip'])   ||
   empty($_POST['cotDate'])   ||
   empty($_POST['cotHour'])   ||
   !filter_var($_POST['cotMail'],FILTER_VALIDATE_EMAIL))
   {
   echo "<script>alert('Faltan campos requeridos por llenar')</script>";
   return false;
   }
   
$nombre = strip_tags(htmlspecialchars($_POST['cotName']));
$email = strip_tags(htmlspecialchars($_POST['cotMail']));
$tel = strip_tags(htmlspecialchars($_POST['cotTel']));
$cel = strip_tags(htmlspecialchars($_POST['cotPhone']));
$direccion = strip_tags(htmlspecialchars($_POST['cotAdress']));
$colonia = strip_tags(htmlspecialchars($_POST['cotColonia']));
$cp = strip_tags(htmlspecialchars($_POST['cotZip']));
$fecha = strip_tags(htmlspecialchars($_POST['cotDate']));
$hora = strip_tags(htmlspecialchars($_POST['cotHour']));

$lavadoAlfombras = strip_tags(htmlspecialchars($_POST['lavadoAlfombras']));
$cantidadLavadoAlfombras = strip_tags(htmlspecialchars($_POST['cantidadLavadoAlfombras']));
$lavadoSillones = strip_tags(htmlspecialchars($_POST['lavadoSillones']));
$cantidadLavadoSillones = strip_tags(htmlspecialchars($_POST['cantidadLavadoSillones']));
$lavadoSillas = strip_tags(htmlspecialchars($_POST['cantidadLavadoSillas']));
$lavadoColchones = strip_tags(htmlspecialchars($_POST['lavadoColchones']));
$cantidadLavadoColchones = strip_tags(htmlspecialchars($_POST['cantidadLavadoColchones']));
$lavadoAutos = strip_tags(htmlspecialchars($_POST['lavadoAutos']));
$cantidadLavadoAutos = strip_tags(htmlspecialchars($_POST['cantidadLavadoAutos']));
$lavadoPisos = strip_tags(htmlspecialchars($_POST['lavadoPisos']));
$cantidadLavadoPisos = strip_tags(htmlspecialchars($_POST['cantidadLavadoPisos']));
$pulidoPisos = strip_tags(htmlspecialchars($_POST['pulidoPisos']));
$cantidadPulidoPisos = strip_tags(htmlspecialchars($_POST['cantidadPulidoPisos']));
$sanitizacion = strip_tags(htmlspecialchars($_POST['sanitizacion']));
$cantidadSanitizacion = strip_tags(htmlspecialchars($_POST['cantidadSanitizacion']));
$limpiezaVidrios = strip_tags(htmlspecialchars($_POST['limpiezaVidrios']));
$cantidadLimpiezaVidrios = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaVidrios']));
$limpiezaDuctos = strip_tags(htmlspecialchars($_POST['limpiezaDuctos']));
$cantidadLimpiezaDuctos = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaDuctos']));
$limpiezaProfunda = strip_tags(htmlspecialchars($_POST['limpiezaProfunda']));
$cantidadLimpiezaProfunda = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaProfunda']));
$limpiezaGeneral = strip_tags(htmlspecialchars($_POST['limpiezaGeneral']));
$cantidadLimpiezaGeneral = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaGeneral']));


   
// Create the email and send the message
$to = 'marcogarcia.gon@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Cotizacion de:  $nombre";
$email_body = "Nueva entrada en el formulario de figueroasclean.com.\n\n"."Detalles\n\n
Nombre: $nombre\n\n
Email: $email\n\n
Tel: $tel\n\n
Celular: $cel\n\n
Direccion: $direccion\n\n
Colonia: $colonia\n\n
CP: $cp\n\natcasesort(array)
Fecha: $fecha\n
Hora: $hora\n
Lavado de Alfombras: $lavadoAlfombras\n\n
Cantidad Lavado de Alfombras: $cantidadLavadoAlfombras\n\n
Lavado de Sillones: $lavadoSillones\n\n
Cantidad de Lavado de Sillones: $cantidadLavadoSillones\n\n
Lavado de Sillas: $lavadoSillas\n\n
Lavado de Colchones: $lavadoColchones\n\n
Cantidad Lavado de Colchones$cantidadLavadoColchones\n\n
Lavado de Autos: $lavadoAutos\n\n
Cantidad Lavado de Autos: $cantidadLavadoAutos\n\n
Lavado de Pisos: $lavadoPisos\n\n
Cantidad Lavado de Pisos: $cantidadLavadoPisos\n\n
Pulido de Pisos: $pulidoPisos\n\n
Cantidad Pulido de Pisos: $cantidadPulidoPisos\n\n
Sanitizacion: $sanitizacion\n\n
Cantidad Sanitizacion: $cantidadSanitizacion\n\n
Limpieza de Vidrios: $limpiezaVidrios\n\n
Cantidad Limpieza de Vidrios: $cantidadLimpiezaVidrios\n\n
Limpieza de ductos: $limpiezaDuctos\n\n
Cantidad Limpieza de ductos: $cantidadLimpiezaDuctos\n\n
Limpieza Profunda: $limpiezaProfunda\n\n
Cantidad limpieza Profunda: $cantidadLimpiezaProfunda\n\n
Limpieza General: $limpiezaGeneral\n\n
Cantidad Limpieza General: $cantidadLimpiezaGeneral\n";

$headers = "From: noreply@creaty.com.mx\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email";   
$mail_status= mail($to,$email_subject,$email_body,$headers);
if ($mail_status) { ?>
 <script language="javascript" type="text/javascript">
  alert('Datos enviados, pronto te contactaremos');
  window.location.href = 'html/gracias.html';
 </script>
 <?php
 }else { ?>
  <script language="javascript" type="text/javascript">
   alert('Ha ocurrido un error, contactanos a: figueroasclean@outlook.com');
   window.location.href = 'html/cont.html';
  </script>
 <?php } ?>
?>




