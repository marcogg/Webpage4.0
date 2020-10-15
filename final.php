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

// LAVADO DE ALFOMBRAS
$lavadoAlfombras = strip_tags(htmlspecialchars($_POST['lavadoAlfombras']));

$cantidadLavadoAlfombras1 = strip_tags(htmlspecialchars($_POST['cantidadAlfombra1']));
$cantidadLavadoAlfombras2 = strip_tags(htmlspecialchars($_POST['cantidadAlfombra2']));
$cantidadLavadoAlfombras3 = strip_tags(htmlspecialchars($_POST['cantidadAlfombra3']));

$tamanoAlfombra1 = strip_tags(htmlspecialchars($_POST['tamanoAlfombra1']));
$tamanoAlfombra2 = strip_tags(htmlspecialchars($_POST['tamanoAlfombra2']));
$tamanoAlfombra3 = strip_tags(htmlspecialchars($_POST['tamanoAlfombra3']));


// LAVADO DE SILLONES
$lavadoSillones = strip_tags(htmlspecialchars($_POST['lavadoSillones']));
$cantidadLavadoSillones = strip_tags(htmlspecialchars($_POST['cantidadLavadoSillones']));

// LAVADO DE SILLAS
$lavadoSillas = strip_tags(htmlspecialchars($_POST['lavadoSillas']));
$cantidadLavadoSillas = strip_tags(htmlspecialchars($_POST['cantidadLavadoSillas']));
$tipoSillas = strip_tags(htmlspecialchars($_POST['tipoSillas']));

// LAVADO DE COLCHONES
$lavadoColchones = strip_tags(htmlspecialchars($_POST['lavadoColchones']));

$cantidadColchon1 = strip_tags(htmlspecialchars($_POST['cantidadColchon1']));
$tamanoColchon1 = strip_tags(htmlspecialchars($_POST['tamanoColchon1']));
$cantidadColchon2 = strip_tags(htmlspecialchars($_POST['cantidadColchon2']));
$tamanoColchon2 = strip_tags(htmlspecialchars($_POST['tamanoColchon2']));
$cantidadColchon3 = strip_tags(htmlspecialchars($_POST['cantidadColchon3']));
$tamanoColchon3 = strip_tags(htmlspecialchars($_POST['tamanoColchon3']));
$cantidadColchon4 = strip_tags(htmlspecialchars($_POST['cantidadColchon4']));
$tamanoColchon4 = strip_tags(htmlspecialchars($_POST['tamanoColchon4']));
$cantidadColchon5 = strip_tags(htmlspecialchars($_POST['cantidadColchon5']));
$tamanoColchon5 = strip_tags(htmlspecialchars($_POST['tamanoColchon5']));


// LAVADO AUTOS
$lavadoAutos = strip_tags(htmlspecialchars($_POST['lavadoAutos']));
$modeloLavadoAutos = strip_tags(htmlspecialchars($_POST['modeloLavadoAutos']));
$cantidadFilas = strip_tags(htmlspecialchars($_POST['cantidadFilas']));

// LAVADO DE PISOS
$lavadoPisos = strip_tags(htmlspecialchars($_POST['lavadoPisos']));
$tipoLavadoPiso = strip_tags(htmlspecialchars($_POST['tipoLavadoPiso']));
$cantidadLavadoPisos = strip_tags(htmlspecialchars($_POST['cantidadLavadoPisos']));

// PULIDO DE PISOS
$pulidoPisos = strip_tags(htmlspecialchars($_POST['pulidoPisos']));
$tipoPulidoPisos = strip_tags(htmlspecialchars($_POST['tipoPulidoPisos']));
$cantidadPulidoPisos = strip_tags(htmlspecialchars($_POST['cantidadPulidoPisos']));

// SANITIZACION
$sanitizacion = strip_tags(htmlspecialchars($_POST['sanitizacion']));
$cantidadSanitizacion = strip_tags(htmlspecialchars($_POST['cantidadSanitizacion']));

// LIMPIEZA VIDRIOS
$limpiezaVidrios = strip_tags(htmlspecialchars($_POST['limpiezaVidrios']));
$cantidadLimpiezaVidrios = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaVidrios']));
$alturaLimpiezaVidrios = strip_tags(htmlspecialchars($_POST['alturaLimpiezaVidrios']));

// LIMPIEZA DUCTOS
$limpiezaDuctos = strip_tags(htmlspecialchars($_POST['limpiezaDuctos']));
$cantidadLimpiezaDuctos = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaDuctos']));

// LIMPIEZA PROFUNDA
$limpiezaProfunda = strip_tags(htmlspecialchars($_POST['limpiezaProfunda']));
$cantidadLimpiezaProfunda = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaProfunda']));

// LIMPIEZA GENERAL
$limpiezaGeneral = strip_tags(htmlspecialchars($_POST['limpiezaGeneral']));
$cantidadLimpiezaGeneral = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaGeneral']));


   
// Create the email and send the message
$to = 'figueroasclean@outlook.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Cotizacion de:  $nombre";
$email_body = "Nueva entrada en el formulario de figueroasclean.com.\n\n"."Detalles\n\n
Nombre: $nombre\n\n
Email: $email\n\n
Tel: $tel\n\n
Celular: $cel\n\n
Dirección: $direccion\n\n
Colonia: $colonia\n\n
CP: $cp\n\n
Fecha: $fecha\n\n
Hora: $hora\n\n
Lavado de Alfombras: $lavadoAlfombras\n\n
Lavado de Alfombras 1- Cantidad: $cantidadLavadoAlfombras1 - Tamaño:$tamanoLavadoAlfombras1\n\n
Lavado de Alfombras 2- Cantidad: $cantidadLavadoAlfombras2 Tamaño: $tamanoLavadoAlfombras2\n\n
Lavado de Alfombras 3- Cantidad: $cantidadLavadoAlfombras3 Tamaño: $tamanoLavadoAlfombras3\n\n
\n\n
\n\n
Lavado de Sillones: $lavadoSillones\n\n
Cantidad de Asientos para lavado de sillones: $cantidadLavadoSillones\n\n
\n\n
\n\n
Lavado de Sillas: $lavadoSillas\n\n
Cantidad Lavado de Sillas: $cantidadLavadoSillas - Tipo de Sillas: $tipoSillas\n\n
\n\n
\n\n
Lavado de Colchones: $lavadoColchones\n\n
Cantidad: $cantidadColchon1 - Tamaño: $tamanoColchon1\n\n
Cantidad: $cantidadColchon2 - Tamaño: $tamanoColchon2\n\n
Cantidad: $cantidadColchon3 - Tamaño: $tamanoColchon3\n\n
Cantidad: $cantidadColchon4 - Tamaño: $tamanoColchon4\n\n
Cantidad: $cantidadColchon5 - Tamaño: $tamanoColchon5\n\n
\n\n
\n\n
Lavado de Autos: $lavadoAutos\n\n
Modelo de auto: $modeloLavadoAutos - Cantidad de Filas: $cantidadFilas\n\n
\n\n
\n\n
Lavado de Pisos: $lavadoPisos\n\n
Tipo de piso: $tipoLavadoPiso - Área: $cantidadLavadoPisos\n\n
Cantidad Lavado de Pisos: $cantidadLavadoPisos\n\n
\n\n
\n\n
Pulido de Pisos: $pulidoPisos\n\n
Tipo de piso: $tipoPulidoPisos - Área: $cantidadPulidoPisos\n\n
Cantidad Pulido de Pisos: $cantidadPulidoPisos\n\n
\n\n
\n\n
Sanitizacion: $sanitizacion\n\n
Número de Habitaciones a sanitizar: $cantidadSanitizacion\n\n
\n\n
\n\n
Limpieza de Vidrios: $limpiezaVidrios\n\n
Metros de ventanas: $cantidadLimpiezaVidrios\n\n
Altura de Ventanal: $alturaLimpiezaVidrios\n\n
\n\n
\n\n
Limpieza de ductos: $limpiezaDuctos\n\n
Metros de ductos: $cantidadLimpiezaDuctos\n\n
\n\n
\n\n
Limpieza Profunda: $limpiezaProfunda\n\n
Descripción: $cantidadLimpiezaProfunda\n\n
\n\n
\n\n
Limpieza General: $limpiezaGeneral\n\n
Descripción: $cantidadLimpiezaGeneral\n";

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




