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
$cantidadLavadoAlfombras4 = strip_tags(htmlspecialchars($_POST['cantidadAlfombra4']));

$tamanoAlfombra1 = strip_tags(htmlspecialchars($_POST['tamanoAlfombra1']));
$tamanoAlfombra2 = strip_tags(htmlspecialchars($_POST['tamanoAlfombra2']));
$tamanoAlfombra3 = strip_tags(htmlspecialchars($_POST['tamanoAlfombra3']));
$tamanoAlfombra4 = strip_tags(htmlspecialchars($_POST['otroTamanoAlfombra']));


// LAVADO DE SILLONES
$lavadoSillones = strip_tags(htmlspecialchars($_POST['lavadoSillones']));
$cantidadLavadoSillones = strip_tags(htmlspecialchars($_POST['cantidadLavadoSillones']));
$cantidadLavadoSet1 = strip_tags(htmlspecialchars($_POST['cantidadSet1']));
$cantidadLavadoSet2 = strip_tags(htmlspecialchars($_POST['cantidadSet2']));
$cantidadLavadoSet3 = strip_tags(htmlspecialchars($_POST['cantidadSet3']));
$cantidadLavadoSet4 = strip_tags(htmlspecialchars($_POST['cantidadSet4']));
$cantidadLavadoSet5 = strip_tags(htmlspecialchars($_POST['cantidadSet5']));
$tamanoSet1 = strip_tags(htmlspecialchars($_POST['tamanoSet1']));
$tamanoSet2 = strip_tags(htmlspecialchars($_POST['tamanoSet2']));
$tamanoSet3 = strip_tags(htmlspecialchars($_POST['tamanoSet3']));
$tamanoSet4 = strip_tags(htmlspecialchars($_POST['tamanoSet4']));
$tamanoSet5 = strip_tags(htmlspecialchars($_POST['otroTamanoSet']));

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
$cantidadRejilla1 = strip_tags(htmlspecialchars($_POST['cantidadRejilla1']));
$cantidadRejilla2 = strip_tags(htmlspecialchars($_POST['cantidadRejilla2']));
$cantidadRejilla3 = strip_tags(htmlspecialchars($_POST['cantidadRejilla3']));
$tamanoRejilla1 = strip_tags(htmlspecialchars($_POST['tamanoRejilla1']));
$tamanoRejilla2 = strip_tags(htmlspecialchars($_POST['tamanoRejilla2']));
$tamanoRejilla3 = strip_tags(htmlspecialchars($_POST['tamanoRejilla3']));


// LIMPIEZA PROFUNDA
$limpiezaProfunda = strip_tags(htmlspecialchars($_POST['limpiezaProfunda']));
$cantidadLimpiezaProfunda = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaProfunda']));
$lpCasillaAlfombras = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-LavadoAfombras']));
$lpCasillaSillones = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-LavadoSillones']));
$lpCasillaSillas = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-LavadoSillas']));
$lpCasillaColchones = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-LavadoColchones']));
$lpCasillaAutos = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-LavadoAutos']));
$lpCasillaPisos = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-LavadoPisos']));
$lpCasillaPulido = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-PulidoPisos']));
$lpCasillaSanitizacion = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-Sanitizacion']));
$lpCasillaVidrios = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-LimpiezaVidrios']));
$lpCasillaDuctos = strip_tags(htmlspecialchars($_POST['limpiezaProfunda-LimpiezaDuctos']));


// LIMPIEZA GENERAL
$limpiezaGeneral = strip_tags(htmlspecialchars($_POST['limpiezaGeneral']));
$cantidadLimpiezaGeneral = strip_tags(htmlspecialchars($_POST['cantidadLimpiezaGeneral']));
$lgCasillaAlfombras = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-LavadoAfombras']));
$lgCasillaSillones = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-LavadoSillones']));
$lgCasillaSillas = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-LavadoSillas']));
$lgCasillaColchones = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-LavadoColchones']));
$lgCasillaAutos = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-LavadoAutos']));
$lgCasillaPisos = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-LavadoPisos']));
$lgCasillaPulido = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-PulidoPisos']));
$lgCasillaSanitizacion = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-Sanitizacion']));
$lgCasillaVidrios = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-LimpiezaVidrios']));
$lgCasillaDuctos = strip_tags(htmlspecialchars($_POST['limpiezaGeneral-LimpiezaDuctos']));


   
// Create the email and send the message
$to = 'marcogarcia.gon@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Cotizacion de:  $nombre";
$email_body = "Nueva entrada en el formulario de figueroasclean.com.\n\n"."Detalles\n\n
Nombre: $nombre\n
Email: $email\n
Tel: $tel\n
Celular: $cel\n
Dirección: $direccion\n
Colonia: $colonia\n
CP: $cp\n
Fecha: $fecha\n
Hora: $hora\n\n
Lavado de Alfombras: $lavadoAlfombras\n
Lavado de Alfombras 1- Cantidad: $cantidadLavadoAlfombras1 / Tamaño:$tamanoLavadoAlfombras1\n
Lavado de Alfombras 2- Cantidad: $cantidadLavadoAlfombras2 / Tamaño: $tamanoLavadoAlfombras2\n
Lavado de Alfombras 3- Cantidad: $cantidadLavadoAlfombras3 / Tamaño: $tamanoLavadoAlfombras3\n
Lavado de Alfombras 4- Cantidad: $cantidadLavadoAlfombras4 / Tamaño: $tamanoLavadoAlfombras4\n
\n\n
\n\n
Lavado de Sillones: $lavadoSillones\n
Cantidad de Asientos para lavado de sillones: $cantidadLavadoSillones\n
Cantidad Set 1: $cantidadLavadoSet1 Tamaño: $tamanoSet1 \n
Cantidad Set 2: $cantidadLavadoSet2 Tamaño: $tamanoSet2 \n
Cantidad Set 3: $cantidadLavadoSet3 Tamaño: $tamanoSet3 \n
Cantidad Set 4: $cantidadLavadoSet4 Tamaño: $tamanoSet4 \n
Cantidad Set 5: $cantidadLavadoSet1 Otro Tamaño: $tamanoSet5 \n
\n\n
\n\n
Lavado de Sillas: $lavadoSillas\n
Cantidad Lavado de Sillas: $cantidadLavadoSillas - Tipo de Sillas: $tipoSillas\n
\n\n
\n\n
Lavado de Colchones: $lavadoColchones\n
Cantidad: $cantidadColchon1 - Tamaño: $tamanoColchon1\n
Cantidad: $cantidadColchon2 - Tamaño: $tamanoColchon2\n
Cantidad: $cantidadColchon3 - Tamaño: $tamanoColchon3\n
Cantidad: $cantidadColchon4 - Tamaño: $tamanoColchon4\n
Cantidad: $cantidadColchon5 - Tamaño: $tamanoColchon5\n
\n\n
\n\n
Lavado de Autos: $lavadoAutos\n
Modelo de auto: $modeloLavadoAutos - Cantidad de Filas: $cantidadFilas\n
\n\n
\n\n
Lavado de Pisos: $lavadoPisos\n
Tipo de piso: $tipoLavadoPiso - Área: $cantidadLavadoPisos\n
Cantidad Lavado de Pisos: $cantidadLavadoPisos\n
\n\n
\n\n
Pulido de Pisos: $pulidoPisos\n
Tipo de piso: $tipoPulidoPisos - Área: $cantidadPulidoPisos\n
Cantidad Pulido de Pisos: $cantidadPulidoPisos\n
\n\n
\n\n
Sanitizacion: $sanitizacion\n
Número de Habitaciones a sanitizar: $cantidadSanitizacion\n
\n\n
\n\n
Limpieza de Vidrios: $limpiezaVidrios\n
Metros de ventanas: $cantidadLimpiezaVidrios\n
Altura de Ventanal: $alturaLimpiezaVidrios\n
\n\n
\n\n
Limpieza de ductos: $limpiezaDuctos\n
Metros de ductos: $cantidadLimpiezaDuctos\n
Cantidad rejilla 1: $cantidadRejilla1 / Tamaño: $tamanoRejilla1\n
Cantidad rejilla 2: $cantidadRejilla2 / Tamaño: $tamanoRejilla2\n
Cantidad rejilla 3: $cantidadRejilla3 / Tamaño: $tamanoRejilla3\n
\n\n
\n\n
Limpieza Profunda: $limpiezaProfunda\n
Limpieza Profunda - Alfombras: $lpCasillaAlfombras\n
Limpieza Profunda - Sillones: $lpCasillaSillones\n
Limpieza Profunda - Sillas: $lpCasillaSillas\n
Limpieza Profunda - Colchones: $lpCasillaColchones\n
Limpieza Profunda - Interior de autos: $lpCasillaAutos\n
Limpieza Profunda - Pisos: $lpCasillaPisos\n
Limpieza Profunda - Pulido de Pisos: $lpCasillaPulido\n
Limpieza Profunda - Sanitizacion: $lpCasillaSanitizacion\n
Limpieza Profunda - Vidrios: $lpCasillaVidrios\n
Limpieza Profunda - Ductos: $lpCasillaDuctos\n
Descripción: $cantidadLimpiezaProfunda\n
\n\n
\n\n
Limpieza General: $limpiezaGeneral\n
Limpieza General - Alfombras: $lgCasillaAlfombras\n
Limpieza General - Sillones: $lgCasillaSillones\n
Limpieza General - Sillas: $lgCasillaSillas\n
Limpieza General - Colchones: $lgCasillaColchones\n
Limpieza General - Interior de autos: $lgCasillaAutos\n
Limpieza General - Pisos: $lgCasillaPisos\n
Limpieza General - Pulido de Pisos: $lgCasillaPulido\n
Limpieza General - Sanitizacion: $lgCasillaSanitizacion\n
Limpieza General - Vidrios: $lgCasillaVidrios\n
Limpieza General - Ductos: $lgCasillaDuctos\n
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




