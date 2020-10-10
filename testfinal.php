<?php
if(!empty($_POST['cotMail'])){
    $nombre = $_POST['cotName'];
    $email = $_POST['cotMail'];
    $tel = $_POST['cotTel'];
    $cel = $_POST['cotPhone'];
    $direccion = $_POST['cotAdress'];
    $colonia = $_POST['cotColonia'];
    $cp = $_POST['cotZip'];
    $fecha = $_POST['cotDate'];
    $hora = $_POST['cotHour'];

    $lavadoAlfombras = $_POST['lavadoAlfombras'];
    $cantidadLavadoAlfombras = $_POST['cantidadLavadoAlfombras'];
    $lavadoSillones = $_POST['lavadoSillones'];
    $cantidadLavadoSillones = $_POST['cantidadLavadoSillones'];
    $lavadoSillas = $_POST['cantidadLavadoSillas'];
    $lavadoColchones = $_POST['lavadoColchones'];
    $cantidadLavadoColchones = $_POST['cantidadLavadoColchones'];
    $lavadoAutos = $_POST['lavadoAutos'];
    $cantidadLavadoAutos = $_POST['cantidadLavadoAutos'];
    $lavadoPisos = strip_tags(htmlspecialchars($_POST['lavadoPisos']));
    $cantidadLavadoPisos = $_POST['cantidadLavadoPisos'];
    $pulidoPisos = $_POST['pulidoPisos'];
    $cantidadPulidoPisos = $_POST['cantidadPulidoPisos'];
    $sanitizacion = $_POST['sanitizacion'];
    $cantidadSanitizacion = $_POST['cantidadSanitizacion'];
    $limpiezaVidrios = $_POST['limpiezaVidrios'];
    $cantidadLimpiezaVidrios = $_POST['cantidadLimpiezaVidrios'];
    $limpiezaDuctos = $_POST['limpiezaDuctos'];
    $cantidadLimpiezaDuctos = $_POST['cantidadLimpiezaDuctos'];
    $limpiezaProfunda = $_POST['limpiezaProfunda'];
    $cantidadLimpiezaProfunda = $_POST['cantidadLimpiezaProfunda'];
    $limpiezaGeneral = $_POST['limpiezaGeneral'];
    $cantidadLimpiezaGeneral = $_POST['cantidadLimpiezaGeneral'];


    $message = '<table style="width:100%">
        <tr><td>Nombre:'.$nombre.' </td></tr>
        <tr><td>Teléfono: '.$tel.'</td></tr>
        <tr><td>Celular: '.$cel.'</td></tr>
        <tr><td>Mail: '.$email.'</td></tr>
        <tr><td>Dirección: '.$direccion.'</td></tr>
        <tr><td>Colonia: '.$colonia.'</td></tr>
        <tr><td>Código postal: '.$cp.'</td></tr>
        <tr><td>Fecha: '.$fecha.'</td></tr>
        <tr><td>Hora: '.$hora.'</td></tr>
        <tr><td>Lavado de Alfombras: '.$lavadoAlfombras.'</td></tr>
        <tr><td>Cantidad Lavado de Alfombras: '.$cantidadLavadoAlfombras.'</td></tr>
        <tr><td>Lavado de Sillones: '.$lavadoSillones.'
        <tr><td>Cantidad de Lavado de Sillones: '.$cantidadLavadoSillones.'</td></tr>
        <tr><td>Lavado de Sillas: '.$lavadoSillas.'</td></tr>
        <tr><td>Lavado de Colchones: '.$lavadoColchones.'</td></tr>
        <tr><td>Cantidad Lavado de Colchones: '.$cantidadLavadoColchones.'</td></tr>
        <tr><td>Lavado de Autos: '.$lavadoAutos.'</td></tr>
        <tr><td>Cantidad Lavado de Autos: '.$cantidadLavadoAutos.'</td></tr>
        <tr><td>Lavado de Pisos: '.$lavadoPisos.'</td></tr>
        <tr><td>Cantidad Lavado de Pisos: '.$cantidadLavadoPisos.'</td></tr>
        <tr><td>Pulido de Pisos: '.$pulidoPisos.'</td></tr>
        <tr><td>Cantidad Pulido de Pisos: '.$cantidadPulidoPisos.'</td></tr>
        <tr><td>Sanitizacion: '.$sanitizacion.'</td></tr>
        <tr><td>Cantidad Sanitizacion: '.$cantidadSanitizacion.'</td></tr>
        <tr><td>Limpieza de Vidrios: '.$limpiezaVidrios.'</td></tr>
        <tr><td>Cantidad Limpieza de Vidrios: '.$cantidadLimpiezaVidrios.'</td></tr>
        <tr><td>Limpieza de ductos: '.$limpiezaDuctos.'</td></tr>
        <tr><td>Cantidad Limpieza de ductos: '.$cantidadLimpiezaDuctos.'</td></tr>
        <tr><td>Limpieza Profunda: '.$limpiezaProfunda.'</td></tr>
        <tr><td>Cantidad limpieza Profunda: '.$cantidadLimpiezaProfunda.'</td></tr>
        <tr><td>Limpieza General: '.$limpiezaGeneral.'</td></tr>
        <tr><td>Cantidad Limpieza General: $.'cantidadLimpiezaGeneral.'\n</td></tr>

        </table>';
    }
    $headers = "From:" . $from;

    $from = "no-responder@creaty.com.mx";
    $to = "marcogarcia.gon@gmail.com";
    $subject = "Nueva cotizacion";
    
    @mail($to,$subject,$message, $headers);
    echo '<script>window.location.href = "html/gracias.html"</script>';

?>
