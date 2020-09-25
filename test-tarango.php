<?php
 
if(isset($_POST['mail'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "marcogarcia.gon@gmail.com";
    $email_subject = "Nueva cotización";
 
    function died($error) {
        // your error code can go here
        echo '<script type="text/javascript">alert("Lo sentimos, hemos detectado un error en el formulario enviado");
        window.location.href = "index.html";</script>';
        echo '<script type="text/javascript">alert("Ha ocurrido un error.");
        window.location.href = "index.html";</script>';
        echo $error."<br /><br />";
        echo '<script type="text/javascript">alert("Por favor revise los datos del formulario");
        window.location.href = "index.html";</script>';
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['inputName']) ||
        //!isset($_POST['last_name']) ||
        !isset($_POST['inputTel']) ||
        !isset($_POST['inputCel']) //||
        //!isset($_POST['comments'])
      )
         {
        died('Ha ocurrido un error, intente más tarde.');       
    }
 
     
 
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
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= '<script type="text/javascript">alert("El email ingresado parece ser no válido");
    window.location.href = "index.html";</script>';
  }
 
    $string_exp = "/^[A-Za-z .'-áéíóúñüÁÉÍÓÚÑÜ]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= '<script type="text/javascript">alert("El nombre ingresado no tiene un formato válido<br />");
    window.location.href = "index.html";</script>';
  }
 
  /*if(!preg_match($string_exp,$last_name)) {
    $error_message .= '<script type="text/javascript">alert("El apellido ingresado no tiene un formato válido<br />");
    window.location.href = "index.html";</script>';
  }*/
 
  /*if(strlen($comments) < 2) {
    $error_message .= '<script type="text/javascript">alert("El mensaje no tien un formato válido<br />");
    window.location.href = "index.html";</script>';
  }*/
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Datos ingresados en el formulario.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
    $email_message .= "Nombre: ".clean_string($nombrecompleto)."\n"; 
    $email_message .= "Email: ".clean_string($telefono)."\n";
    $email_message .= "Tel: ".clean_string($celular)."\n";
    $email_message .= "Tel: ".clean_string($correo)."\n";
    $email_message .= "Tel: ".clean_string($direccion)."\n";
    $email_message .= "Tel: ".clean_string($ciudad)."\n";
    $email_message .= "Tel: ".clean_string($estado)."\n";
    $email_message .= "Tel: ".clean_string($cp)."\n";
    $email_message .= "Tel: ".clean_string($fecha)."\n";
    $email_message .= "Tel: ".clean_string($hora)."\n";

 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n".
'X-Mailer: PHP/' . phpversion();
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .='Content-type: text/html; charset=UTF-8' . "\r\n";
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->

<script type="text/javascript">
  window.location.href = "gracias.html";
</script>



<?php
 
}
?>