<?php
// Esto le dice a PHP que usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8');
 
// Esto le dice a PHP que generaremos cadenas UTF-8
mb_http_output('UTF-8');

    $from = "no-responder@figueroasclean.com";
    $to = "marcogarcia.gon@gmail.com";
    $subject = "Nueva entrada en formulario";

if(isset($_POST['inputEmail4'])){
    $nombrecompleto = $_POST['inputName'];
    $telefono = $_POST['inputTel'];
    $celular = $_POST['inputCel'];
    $correo = $_POST['inputEmail4'];
    $direccion = $_POST['inputAddress'];
    $ciudad = $_POST['inputCity'];
    $estado = $_POST['inputState'];
    $cp = $_POST['inputZip'];
    $fecha = $_POST['selected'];
    $hora = $_POST['calendarioHorario'];


    $message = '<table style="width:100%">
        <tr><td>'.$nombrecompleto.' </td></tr>
        <tr><td>Teléfono: '.$telefono.'</td></tr>
        <tr><td>Celular: '.$celular.'</td></tr>
        <tr><td>Correo: '.$correo.'</td></tr>
        <tr><td>Dirección: '.$direccion.'</td></tr>
        <tr><td>Ciudad: '.$ciudad.'</td></tr>
        <tr><td>Estado: '.$estado.'</td></tr>
        <tr><td>Código postal: '.$cp.'</td></tr>
        <tr><td>Fecha: '.$fecha.'</td></tr>
        <tr><td>Hora: '.$hora.'</td></tr>
        </table>';
    }
    $headers = "From:" . $from;
    
    @mail($to,$subject,$message, $headers);
    echo '<script>alert("Datos enviados, en breve te contactaremos");</script>';

?>
<script type="text/javascript">
  window.location.href = "html/gracias.html";
</script>