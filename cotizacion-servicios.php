<?php
 
if(isset($_POST['inputEmail4'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "marcogarcia.gon@gmail.com";
    $email_subject = "FigueroasClean.com: Nueva solicitud de cotización";
 
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
    if(!isset($_POST['first_name']) ||
      !isset($_POST['inputName']) ||
      !isset($_POST['inputTel']) ||
      !isset($_POST['inputCel']) ||
      !isset($_POST['inputEmail4']) ||
      !isset($_POST['inputAddress']) ||
      !isset($_POST['inputCity']) ||
      !isset($_POST['inputState']) ||
      !isset($_POST['inputZip']) ||
      !isset($_POST['selected']) ||
      !isset($_POST['calendarioHorario'])
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

 //Servicio 1
     if (!empty($_POST['S1service_selector1'])) {
        $servicio1 = $_POST['S1service_selector1'];

        //Servicio 1: Lavado de Alfombra
        $s1cantidadAlfombras = $_POST['S1Lavado_de_alfombra_cant_selector'];
        $s1tamanoAlfombras = $_POST['S1Lavado_de_alfombra_cant_selector_alfombra1_type_selector'];

        //Servicio 1: LAVADO DE SILLONES
        $s1cantidadSillones = $_POST['S1Lavado_de_sillones_cant_selector'];
        $s1cantidadAsientos = $_POST['S1Lavado_de_sillones_cant_selector_pieza1_type_selector'];

        //Servicio1: LAVADO DE SILLAS
        $s1lavadoSillas = $_POST['S1Lavado_de_sillas_type_selector'];
        $s1tipoSillas = $_POST['S1Lavado_de_sillas_type_selector'];

        //Servicio 1: LAVADO DE COLCHONES
        $s1tamanoColchon = $_POST['S1Lavado_de_colchones_type_selector'];

        //Servicio 1: Lavado de Interior de Autos
        $s1tamanoAuto = $_POST['S1Lavado_de_int_de_autos_type_selector'];

        //Servicio 1: Lavado de piso
        $s1tipoPiso = $_POST['S1Lavado_de_pisos_type_selector'];

        //Servicio 1: Pulido de piso
        $s1materialPiso = $_POST['S1Pulido_de_pisos_type_selector'];

        //Servicio 1: Sanitizacion
        $s1tamanoSanitizacion = $_POST['S1Sanitizacion_type_selector'];

        //Servicio 1: Limpieza de vidrios
        $s1tamanoVidrios = $_POST['S1Limpieza_de_vidrios_type_selector'];

        //Servicio 1: Limpieza Ductos
        $s1ductos = $_POST['S1Limpieza_de_ductos_type_selector'];

        //Servicio 1: Limpieza profunda:
        $s1limpiezaProfunda = $_POST['S1Limpieza_profunda-text'];

        //Servicio 1: Limpieza General:
        $s1limpiezaGeneral = $_POST['S1Limpieza-general-text'];
    }

        //-----------------------------------Servicio 2----------------------------
        if (!empty($_POST['S2service_selector1'])) {

            $servicio2 = $_POST['S2service_selector1'];

            //Servicio 2: Lavado de Alfombra
            $s2cantidadAlfombras = $_POST['S2Lavado_de_alfombra_cant_selector'];
            $s2tamanoAlfombras = $_POST['S2Lavado_de_alfombra_cant_selector_alfombra1_type_selector'];

            //Servicio 2: LAVADO DE SILLONES
            $s2cantidadSillones = $_POST['S2Lavado_de_sillones_cant_selector'];
            $s2cantidadAsientos = $_POST['S2Lavado_de_sillones_cant_selector_pieza1_type_selector'];

            //Servicio 2 LAVADO DE SILLAS
            $s2lavadoSillas = $_POST['S2Lavado_de_sillas_type_selector'];
            $s2tipoSillas = $_POST['S2Lavado_de_sillas_type_selector'];

            //Servicio 2: LAVADO DE COLCHONES
            $s2tamanoColchon = $_POST['S2Lavado_de_colchones_type_selector'];

            //Servicio 2: Lavado de Interior de Autos
            $s2tamanoAuto = $_POST['S2Lavado_de_int_de_autos_type_selector'];

            //Servicio 2: Lavado de piso
            $s2tipoPiso = $_POST['S2Lavado_de_pisos_type_selector'];

            //Servicio 2: Pulido de piso
            $s2materialPiso = $_POST['S2Pulido_de_pisos_type_selector'];

            //Servicio 2: Sanitizacion
            $s2tamanoSanitizacion = $_POST['S2Sanitizacion_type_selector'];

            //Servicio 2: Limpieza de vidrios
            $s2tamanoVidrios = $_POST['S2Limpieza_de_vidrios_type_selector'];

            //Servicio 2: Limpieza Ductos
            $s2ductos = $_POST['S2Limpieza_de_ductos_type_selector'];

            //Servicio 2: Limpieza profunda:
            $s2limpiezaProfunda = $_POST['S2Limpieza_profunda-text'];

            //Servicio 2: Limpieza General:
            $s2limpiezaGeneral = $_POST['S2Limpieza-general-text'];

    }

//----------------------------------Servicio 3----------------------------
     if (!empty($_POST['S3service_selector1'])) {

        $servicio3 = $_POST['S3service_selector1'];

        //Servicio 3: Lavado de Alfombra
        $s3cantidadAlfombras = $_POST['S3Lavado_de_alfombra_cant_selector'];
        $s3tamanoAlfombras = $_POST['S3Lavado_de_alfombra_cant_selector_alfombra1_type_selector'];

        //Servicio 3: LAVADO DE SILLONES
        $s3cantidadSillones = $_POST['S3Lavado_de_sillones_cant_selector'];
        $s3cantidadAsientos = $_POST['S3Lavado_de_sillones_cant_selector_pieza1_type_selector'];

        //Servicio 3 LAVADO DE SILLAS
        $s3lavadoSillas = $_POST['S3Lavado_de_sillas_type_selector'];
        $s3tipoSillas = $_POST['S3Lavado_de_sillas_type_selector'];

        //Servicio 3: LAVADO DE COLCHONES
        $s3tamanoColchon = $_POST['S3Lavado_de_colchones_type_selector'];

        //Servicio 3: Lavado de Interior de Autos
        $s3tamanoAuto = $_POST['S3Lavado_de_int_de_autos_type_selector'];

        //Servicio 3: Lavado de piso
        $s3tipoPiso = $_POST['S3Lavado_de_pisos_type_selector'];

        //Servicio 3: Pulido de piso
        $s3materialPiso = $_POST['S3Pulido_de_pisos_type_selector'];

        //Servicio 3: Sanitizacion
        $s3tamanoSanitizacion = $_POST['S3Sanitizacion_type_selector'];

        //Servicio 3: Limpieza de vidrios
        $s3tamanoVidrios = $_POST['S3Limpieza_de_vidrios_type_selector'];

        //Servicio 3: Limpieza Ductos
        $s3ductos = $_POST['S3Limpieza_de_ductos_type_selector'];

        //Servicio 3: Limpieza profunda:
        $s3limpiezaProfunda = $_POST['S3Limpieza_profunda-text'];

        //Servicio 3: Limpieza General:
        $s3limpiezaGeneral = $_POST['S3Limpieza-general-text'];

    }

        //----------------------------------Servicio 4----------------------------
         if (!empty($_POST['S4service_selector1'])) {

            $servicio4 = $_POST['S4service_selector1'];

            //Servicio 4: Lavado de Alfombra
            $s4cantidadAlfombras = $_POST['S4Lavado_de_alfombra_cant_selector'];
            $s4tamanoAlfombras = $_POST['S4Lavado_de_alfombra_cant_selector_alfombra1_type_selector'];

            //Servicio 4: LAVADO DE SILLONES
            $s4cantidadSillones = $_POST['S4Lavado_de_sillones_cant_selector'];
            $s4cantidadAsientos = $_POST['S4Lavado_de_sillones_cant_selector_pieza1_type_selector'];

            //Servicio 4 LAVADO DE SILLAS
            $s4lavadoSillas = $_POST['S4Lavado_de_sillas_type_selector'];
            $s4tipoSillas = $_POST['S4Lavado_de_sillas_type_selector'];

            //Servicio 4: LAVADO DE COLCHONES
            $s4tamanoColchon = $_POST['S4Lavado_de_colchones_type_selector'];

            //Servicio 4: Lavado de Interior de Autos
            $s4tamanoAuto = $_POST['S4Lavado_de_int_de_autos_type_selector'];

            //Servicio 4: Lavado de piso
            $s4tipoPiso = $_POST['S4Lavado_de_pisos_type_selector'];

            //Servicio 4: Pulido de piso
            $s4materialPiso = $_POST['S4Pulido_de_pisos_type_selector'];

            //Servicio 4: Sanitizacion
            $s4tamanoSanitizacion = $_POST['S4Sanitizacion_type_selector'];

            //Servicio 4: Limpieza de vidrios
            $s4tamanoVidrios = $_POST['S4Limpieza_de_vidrios_type_selector'];

            //Servicio 4: Limpieza Ductos
            $s4ductos = $_POST['S4Limpieza_de_ductos_type_selector'];

            //Servicio 4: Limpieza profunda:
            $s4limpiezaProfunda = $_POST['S4Limpieza_profunda-text'];

            //Servicio 4: Limpieza General:
            $s4limpiezaGeneral = $_POST['S4Limpieza-general-text'];
        }
//----------------------------------Servicio 5----------------------------
        if (!empty($_POST['S5service_selector1'])) {
            
           
            $servicio5 = $_POST['S5service_selector1'];

            //Servicio 5: Lavado de Alfombra
            $s5cantidadAlfombras = $_POST['S5Lavado_de_alfombra_cant_selector'];
            $s5tamanoAlfombras = $_POST['S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector'];

            //Servicio 5: LAVADO DE SILLONES
            $s5cantidadSillones = $_POST['S5Lavado_de_sillones_cant_selector'];
            $s5cantidadAsientos = $_POST['S5Lavado_de_sillones_cant_selector_pieza1_type_selector'];

            //Servicio 5 LAVADO DE SILLAS
            $s5lavadoSillas = $_POST['S5Lavado_de_sillas_type_selector'];
            $s5tipoSillas = $_POST['S5Lavado_de_sillas_type_selector'];

            //Servicio 5: LAVADO DE COLCHONES
            $s5tamanoColchon = $_POST['S5Lavado_de_colchones_type_selector'];

            //Servicio 5: Lavado de Interior de Autos
            $s5tamanoAuto = $_POST['S5Lavado_de_int_de_autos_type_selector'];

            //Servicio 5: Lavado de piso
            $s5tipoPiso = $_POST['S5Lavado_de_pisos_type_selector'];

            //Servicio 5: Pulido de piso
            $s5materialPiso = $_POST['S5Pulido_de_pisos_type_selector'];

            //Servicio 5: Sanitizacion
            $s5tamanoSanitizacion = $_POST['S5Sanitizacion_type_selector'];

            //Servicio 5: Limpieza de vidrios
            $s5tamanoVidrios = $_POST['S5Limpieza_de_vidrios_type_selector'];

            //Servicio 5: Limpieza Ductos
            $s5ductos = $_POST['S5Limpieza_de_ductos_type_selector'];

            //Servicio 5: Limpieza profunda:
            $s5limpiezaProfunda = $_POST['S5Limpieza_profunda-text'];

            //Servicio 5: Limpieza General:
            $s5limpiezaGeneral = $_POST['S5Limpieza-general-text'];


        }
     
 // --------------------ORIGINAL
    // $first_name = $_POST['first_name']; // required
    // //$last_name = $_POST['last_name']; // required
    // $email_from = $_POST['mail']; // required
    // $telephone = $_POST['telephone']; // not required
    // //$comments = $_POST['comments']; // required
    // //$estado = $_POST['estado']; //not required
    // //$selected_val=$_POST['estado'];
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$correo)) {
    $error_message .= '<script type="text/javascript">alert("El email ingresado parece ser no válido");
    window.location.href = "index.html";</script>';
  }
 
    $string_exp = "/^[A-Za-z .'-áéíóúñüÁÉÍÓÚÑÜ]+$/";
 
  if(!preg_match($string_exp,$nombrecompleto)) {
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
 
     
    $email_message = '<table style="width:100%">
        <tr>
            <td>'.$nombrecompleto.' </td>
        </tr>
        <tr><td>Teléfono: '.$telefono.'</td></tr>
        <tr><td>Celular: '.$celular.'</td></tr>
        <tr><td>Correo: '.$correo.'</td></tr>
        <tr><td>Dirección: '.$direccion.'</td></tr>
        <tr><td>Ciudad: '.$ciudad.'</td></tr>
        <tr><td>Estado: '.$estado.'</td></tr>
        <tr><td>Código postal: '.$cp.'</td></tr>
        <tr><td>Fecha: '.$fecha.'</td></tr>
        <tr><td>Hora: '.$hora.'</td></tr>
        <tr><td>Servicios 1</td></tr>
        <tr><td>'.$servicio1.'</td></tr>
        <tr><td>Limpieza de Alfombras </td></tr>
            <tr><td> Cantidad de Alfombras: '.$s1cantidadAlfombras.'</td></tr>
            <tr><td> Tamaño de Alfombras: '.$s1tamanoAlfombras.'</td></tr>
        <tr><td>Limpieza de Sillones </td></tr>
            <tr><td> Cantidad de Sillones: '.$s1cantidadSillones.'</td></tr>
            <tr><td> Cantidad de Asientos: '.$s1cantidadAsientos.'</td></tr>
        <tr><td>Limpieza de Sillas </td></tr>
            <tr><td> Lavado de Sillas: '.$s1lavadoSillas.'</td></tr>
            <tr><td> Tipo de Sillas: '.$s1tipoSillas.'</td></tr>
        <tr><td>Limpieza de Colchón </td></tr>
            <tr><td> Tamaño de Colchon: '.$s1tamanoColchon.'</td></tr>
        <tr><td>Limpieza de Auto: </td></tr>
            <tr><td> Tamaño de Auto: '.$s1tamanoAuto.'</td></tr>
        <tr><td>Limpieza de piso </td></tr>
            <tr><td> Tipo de Piso: '.$s1tipoPiso.'</td></tr>
        <tr><td>Pulido de piso </td></tr>
            <tr><td> Material de piso a pulir: '.$s1materialPiso.'</td></tr>
        <tr><td>Sanitización </td></tr>
            <tr><td> Área para Sanitizacion: '.$s1tamanoSanitizacion.'</td></tr>
        <tr><td>Limpieza de Vidrios </td></tr>
            <tr><td> Tamaño de Vidrios a limpiar: '.$s1tamanoVidrios.'</td></tr>
        <tr><td>Limpieza de Ductos</td></tr>
            <tr><td> Longitud de ductos a limpiar: '.$s1ductos.'</td></tr>
        <tr><td>Limpieza Profunda </td></tr>
            <tr><td> Extensión para limpieza Profunda: '.$s1limpiezaProfunda.'</td></tr>
        <tr><td>Limpieza General </td></tr>
            <tr><td> Extensión para limpieza General: '.$s1limpiezaGeneral.'</td></tr>
        <tr><td>Información Adicional</td></tr>
            <tr><td>'.$extraInfo.'</td></tr>

        <tr><td>Servicios 2</td></tr>
        <tr><td>'.$servicio2.'</td></tr>
        <tr><td>Limpieza de Alfombras </td></tr>
            <tr><td> Cantidad de Alfombras: '.$s2cantidadAlfombras.'</td></tr>
            <tr><td> Tamaño de Alfombras: '.$s2tamanoAlfombras.'</td></tr>
        <tr><td>Limpieza de Sillones </td></tr>
            <tr><td> Cantidad de Sillones: '.$s2cantidadSillones.'</td></tr>
            <tr><td> Cantidad de Asientos: '.$s2cantidadAsientos.'</td></tr>
        <tr><td>Limpieza de Sillas </td></tr>
            <tr><td> Lavado de Sillas: '.$s2lavadoSillas.'</td></tr>
            <tr><td> Tipo de Sillas: '.$s2tipoSillas.'</td></tr>
        <tr><td>Limpieza de Colchón </td></tr>
            <tr><td> Tamaño de Colchon: '.$s2tamanoColchon.'</td></tr>
        <tr><td>Limpieza de Auto: </td></tr>
            <tr><td> Tamaño de Auto: '.$s2tamanoAuto.'</td></tr>
        <tr><td>Limpieza de piso </td></tr>
            <tr><td> Tipo de Piso: '.$s2tipoPiso.'</td></tr>
        <tr><td>Pulido de piso </td></tr>
            <tr><td> Material de piso a pulir: '.$s2materialPiso.'</td></tr>
        <tr><td>Sanitización </td></tr>
            <tr><td> Área para Sanitizacion: '.$s2tamanoSanitizacion.'</td></tr>
        <tr><td>Limpieza de Vidrios </td></tr>
            <tr><td> Tamaño de Vidrios a limpiar: '.$s2tamanoVidrios.'</td></tr>
        <tr><td>Limpieza de Ductos</td></tr>
            <tr><td> Longitud de ductos a limpiar: '.$s2ductos.'</td></tr>
        <tr><td>Limpieza Profunda </td></tr>
            <tr><td> Extensión para limpieza Profunda: '.$s2limpiezaProfunda.'</td></tr>
        <tr><td>Limpieza General </td></tr>
            <tr><td> Extensión para limpieza General: '.$s2limpiezaGeneral.'</td></tr>
        <tr><td>Información Adicional</td></tr>
            <tr><td>'.$extraInfo.'</td></tr>

        <tr><td>Servicios 3</td></tr>
        <tr><td>'.$servicio3.'</td></tr>
        <tr><td>Limpieza de Alfombras </td></tr>
            <tr><td> Cantidad de Alfombras: '.$s3cantidadAlfombras.'</td></tr>
            <tr><td> Tamaño de Alfombras: '.$s3tamanoAlfombras.'</td></tr>
        <tr><td>Limpieza de Sillones </td></tr>
            <tr><td> Cantidad de Sillones: '.$s3cantidadSillones.'</td></tr>
            <tr><td> Cantidad de Asientos: '.$s3cantidadAsientos.'</td></tr>
        <tr><td>Limpieza de Sillas </td></tr>
            <tr><td> Lavado de Sillas: '.$s3lavadoSillas.'</td></tr>
            <tr><td> Tipo de Sillas: '.$s3tipoSillas.'</td></tr>
        <tr><td>Limpieza de Colchón </td></tr>
            <tr><td> Tamaño de Colchon: '.$s3tamanoColchon.'</td></tr>
        <tr><td>Limpieza de Auto: </td></tr>
            <tr><td> Tamaño de Auto: '.$s3tamanoAuto.'</td></tr>
        <tr><td>Limpieza de piso </td></tr>
            <tr><td> Tipo de Piso: '.$s3tipoPiso.'</td></tr>
        <tr><td>Pulido de piso </td></tr>
            <tr><td> Material de piso a pulir: '.$s3materialPiso.'</td></tr>
        <tr><td>Sanitización </td></tr>
            <tr><td> Área para Sanitizacion: '.$s3tamanoSanitizacion.'</td></tr>
        <tr><td>Limpieza de Vidrios </td></tr>
            <tr><td> Tamaño de Vidrios a limpiar: '.$s3tamanoVidrios.'</td></tr>
        <tr><td>Limpieza de Ductos</td></tr>
            <tr><td> Longitud de ductos a limpiar: '.$s3ductos.'</td></tr>
        <tr><td>Limpieza Profunda </td></tr>
            <tr><td> Extensión para limpieza Profunda: '.$s3limpiezaProfunda.'</td></tr>
        <tr><td>Limpieza General </td></tr>
            <tr><td> Extensión para limpieza General: '.$s3limpiezaGeneral.'</td></tr>
        <tr><td>Información Adicional</td></tr>
            <tr><td>'.$extraInfo.'</td></tr>

            <tr><td>Servicios 4</td></tr>
        <tr><td>'.$servicio4.'</td></tr>
        <tr><td>Limpieza de Alfombras </td></tr>
            <tr><td> Cantidad de Alfombras: '.$s4cantidadAlfombras.'</td></tr>
            <tr><td> Tamaño de Alfombras: '.$s4tamanoAlfombras.'</td></tr>
        <tr><td>Limpieza de Sillones </td></tr>
            <tr><td> Cantidad de Sillones: '.$s4cantidadSillones.'</td></tr>
            <tr><td> Cantidad de Asientos: '.$s4cantidadAsientos.'</td></tr>
        <tr><td>Limpieza de Sillas </td></tr>
            <tr><td> Lavado de Sillas: '.$s4lavadoSillas.'</td></tr>
            <tr><td> Tipo de Sillas: '.$s4tipoSillas.'</td></tr>
        <tr><td>Limpieza de Colchón </td></tr>
            <tr><td> Tamaño de Colchon: '.$s4tamanoColchon.'</td></tr>
        <tr><td>Limpieza de Auto: </td></tr>
            <tr><td> Tamaño de Auto: '.$s4tamanoAuto.'</td></tr>
        <tr><td>Limpieza de piso </td></tr>
            <tr><td> Tipo de Piso: '.$s4tipoPiso.'</td></tr>
        <tr><td>Pulido de piso </td></tr>
            <tr><td> Material de piso a pulir: '.$s4materialPiso.'</td></tr>
        <tr><td>Sanitización </td></tr>
            <tr><td> Área para Sanitizacion: '.$s4tamanoSanitizacion.'</td></tr>
        <tr><td>Limpieza de Vidrios </td></tr>
            <tr><td> Tamaño de Vidrios a limpiar: '.$s4tamanoVidrios.'</td></tr>
        <tr><td>Limpieza de Ductos</td></tr>
            <tr><td> Longitud de ductos a limpiar: '.$s4ductos.'</td></tr>
        <tr><td>Limpieza Profunda </td></tr>
            <tr><td> Extensión para limpieza Profunda: '.$s4limpiezaProfunda.'</td></tr>
        <tr><td>Limpieza General </td></tr>
            <tr><td> Extensión para limpieza General: '.$s4limpiezaGeneral.'</td></tr>
        <tr><td>Información Adicional</td></tr>
            <tr><td>'.$extraInfo.'</td></tr>

            <tr><td>Servicios 5</td></tr>
        <tr><td>'.$servicio5.'</td></tr>
        <tr><td>Limpieza de Alfombras </td></tr>
            <tr><td> Cantidad de Alfombras: '.$s5cantidadAlfombras.'</td></tr>
            <tr><td> Tamaño de Alfombras: '.$s5tamanoAlfombras.'</td></tr>
        <tr><td>Limpieza de Sillones </td></tr>
            <tr><td> Cantidad de Sillones: '.$s5cantidadSillones.'</td></tr>
            <tr><td> Cantidad de Asientos: '.$s5cantidadAsientos.'</td></tr>
        <tr><td>Limpieza de Sillas </td></tr>
            <tr><td> Lavado de Sillas: '.$s5lavadoSillas.'</td></tr>
            <tr><td> Tipo de Sillas: '.$s5tipoSillas.'</td></tr>
        <tr><td>Limpieza de Colchón </td></tr>
            <tr><td> Tamaño de Colchon: '.$s5tamanoColchon.'</td></tr>
        <tr><td>Limpieza de Auto: </td></tr>
            <tr><td> Tamaño de Auto: '.$s5tamanoAuto.'</td></tr>
        <tr><td>Limpieza de piso </td></tr>
            <tr><td> Tipo de Piso: '.$s5tipoPiso.'</td></tr>
        <tr><td>Pulido de piso </td></tr>
            <tr><td> Material de piso a pulir: '.$s5materialPiso.'</td></tr>
        <tr><td>Sanitización </td></tr>
            <tr><td> Área para Sanitizacion: '.$s5tamanoSanitizacion.'</td></tr>
        <tr><td>Limpieza de Vidrios </td></tr>
            <tr><td> Tamaño de Vidrios a limpiar: '.$s5tamanoVidrios.'</td></tr>
        <tr><td>Limpieza de Ductos</td></tr>
            <tr><td> Longitud de ductos a limpiar: '.$s5ductos.'</td></tr>
        <tr><td>Limpieza Profunda </td></tr>
            <tr><td> Extensión para limpieza Profunda: '.$s5limpiezaProfunda.'</td></tr>
        <tr><td>Limpieza General </td></tr>
            <tr><td> Extensión para limpieza General: '.$s5limpiezaGeneral.'</td></tr>
        <tr><td>Información Adicional</td></tr>
            <tr><td>'.$extraInfo.'</td></tr>

        
    </table>';
 
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