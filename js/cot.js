console.log("cot.js is connected");

function hide(idOfObject){
    $(`#` + `${idOfObject}`).hide();
}

function show(idOfObject){
    $(`#` + `${idOfObject}`).show();
}

if((window.matchMedia("(min-width: 768px)").matches)){
    $('.nav-options').css('visibility', 'visible');
    $('.nav-options div .text').css('display', 'initial');
} else {
    $('.nav-options').css('visibility', 'visible');
    $('.nav-options div .text').css('display', 'none');
}

/* Navbar - resize */
function navBarListener(){
    if((window.matchMedia("(min-width: 768px)").matches)){
        $('.nav-options').css('visibility', 'visible');
        $('.nav-options div .text').css('display', 'initial');
        
    } else {
        $('.nav-options').css('visibility', 'visible');
        $('.nav-options div .text').css('display', 'none');
    }
}

window.addEventListener('resize', navBarListener);

/* Horario - Dropdown*/
function cambioHorarioDeServicio(){
    //Value
    //var e = document.getElementById("ddlViewBy");
    //var strUser = e.options[e.selectedIndex].value;
    //Text
    var e = document.getElementById("calendarioHorario");
    var horarioServicio = e.options[e.selectedIndex].text;
}

window.addEventListener('change', cambioHorarioDeServicio);

/* Agregar servicio */
function agregarServicio(){   
    $('#btnEliminarServicios').css('display', 'block');
    if($('#servicio2').prop('clientHeight') === 0){
        $('#servicio2').css('display', 'block');
    } else if($('#servicio3').prop('clientHeight') === 0){
        $('#servicio3').css('display', 'block');
    } else if($('#servicio4').prop('clientHeight') === 0){
        $('#servicio4').css('display', 'block');
    } else if($('#servicio5').prop('clientHeight') === 0){
        $('#servicio5').css('display', 'block');
    }
}

window.addEventListener('change', agregarServicio);

/* Elimnar servicio */
function eliminarServicios(){
    if($('#servicio5').prop('clientHeight') > 0){
        $('#servicio5').css('display', 'none');
    } else if($('#servicio4').prop('clientHeight') > 0){
        $('#servicio4').css('display', 'none');
    } else if($('#servicio3').prop('clientHeight') > 0){
        $('#servicio3').css('display', 'none');
    } else {
        $('#servicio2').css('display', 'none');
        $('#btnEliminarServicios').css('display', 'none');
    }
}

window.addEventListener('change', eliminarServicios);

/* -------------------------------------------------------------------------------------------------- */
//Servicio select1
$("#S1service_selector1").on("change", function() {
    var e = document.getElementById("S1service_selector1");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S1Lavado_de_alfombra"){
        $("#S1Lavado_de_alfombra").show();
    } else {
        $("#S1Lavado_de_alfombra").hide();
    }
 
    if(cant == "S1Lavado_de_sillones"){
        $("#S1Lavado_de_sillones").show();
    } else {
        $("#S1Lavado_de_sillones").hide();
    }

    if(cant == "S1Lavado_de_sillas"){
        $("#S1Lavado_de_sillas").show();
    } else {
        $("#S1Lavado_de_sillas").hide();
    }

    if(cant == "S1Lavado_de_colchones"){
        $("#S1Lavado_de_colchones").show();
    } else {
        $("#S1Lavado_de_colchones").hide();
    }

    if(cant == "S1Lavado_de_int_de_autos"){
        $("#S1Lavado_de_int_de_autos").show();
    } else {
        $("#S1Lavado_de_int_de_autos").hide();
    }

    if(cant == "S1Lavado_de_pisos"){
        $("#S1Lavado_de_pisos").show();
    } else {
        $("#S1Lavado_de_pisos").hide();
    }

    if(cant == "S1Pulido_de_pisos"){
        $("#S1Pulido_de_pisos").show();
    } else{
        $("#S1Pulido_de_pisos").hide();
    }

    if(cant == "S1Sanitizacion"){
        $("#S1Sanitizacion").show();
    } else {
        $("#S1Sanitizacion").hide();
    }

    if(cant == "S1Limpieza_de_vidrios"){
        $("#S1Limpieza_de_vidrios").show();
    } else {
        $("#S1Limpieza_de_vidrios").hide();
    }

    if(cant == "S1Limpieza_profunda"){
        $("#S1Limpieza_profunda").show();
    } else {
        $("#S1Limpieza_profunda").hide();
    }

    if(cant == "S1Limpieza_general"){
        $("#S1Limpieza_general").show();
    } else {
        $("#S1Limpieza_general").hide();
    }

    if(cant == "S1Limpieza_de_ductos"){
        $("#S1Limpieza_de_ductos").show();
    } else {
        $("#S1Limpieza_de_ductos").hide();
    }
})

function fS5service_selector1(){
    $("#S5service_selector1").on("change", function() {
        var e = document.getElementById("S5service_selector1");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S5Lavado_de_alfombra"){
            $("#S5Lavado_de_alfombra").show();
        } else {
            $("#S5Lavado_de_alfombra").hide();
        }
     
        if(cant == "S5Lavado_de_sillones"){
            $("#S5Lavado_de_sillones").show();
        } else {
            $("#S5Lavado_de_sillones").hide();
        }
    
        if(cant == "S5Lavado_de_sillas"){
            $("#S5Lavado_de_sillas").show();
        } else {
            $("#S5Lavado_de_sillas").hide();
        }
    
        if(cant == "S5Lavado_de_colchones"){
            $("#S5Lavado_de_colchones").show();
        } else {
            $("#S5Lavado_de_colchones").hide();
        }
    
        if(cant == "S5Lavado_de_int_de_autos"){
            $("#S5Lavado_de_int_de_autos").show();
        } else {
            $("#S5Lavado_de_int_de_autos").hide();
        }
    
        if(cant == "S5Lavado_de_pisos"){
            $("#S5Lavado_de_pisos").show();
        } else {
            $("#S5Lavado_de_pisos").hide();
        }
    
        if(cant == "S5Pulido_de_pisos"){
            $("#S5Pulido_de_pisos").show();
        } else{
            $("#S5Pulido_de_pisos").hide();
        }
    
        if(cant == "S5Sanitizacion"){
            $("#S5Sanitizacion").show();
        } else {
            $("#S5Sanitizacion").hide();
        }
    
        if(cant == "S5Limpieza_de_vidrios"){
            $("#S5Limpieza_de_vidrios").show();
        } else {
            $("#S5Limpieza_de_vidrios").hide();
        }
    
        if(cant == "S5Limpieza_profunda"){
            $("#S5Limpieza_profunda").show();
        } else {
            $("#S5Limpieza_profunda").hide();
        }
    
        if(cant == "S5Limpieza_general"){
            $("#S5Limpieza_general").show();
        } else {
            $("#S5Limpieza_general").hide();
        }
    
        if(cant == "S5Limpieza_de_ductos"){
            $("#S5Limpieza_de_ductos").show();
        } else {
            $("#S5Limpieza_de_ductos").hide();
        }
    })
}

window.addEventListener('change', fS5service_selector1);

//Servicio select2
$("#S2service_selector1").on("change", function() {
    var e = document.getElementById("S2service_selector1");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S2Lavado_de_alfombra"){
        $("#S2Lavado_de_alfombra").show();
    } else {
        $("#S2Lavado_de_alfombra").hide();
    }
 
    if(cant == "S2Lavado_de_sillones"){
        $("#S2Lavado_de_sillones").show();
    } else {
        $("#S2Lavado_de_sillones").hide();
    }

    if(cant == "S2Lavado_de_sillas"){
        $("#S2Lavado_de_sillas").show();
    } else {
        $("#S2Lavado_de_sillas").hide();
    }

    if(cant == "S2Lavado_de_colchones"){
        $("#S2Lavado_de_colchones").show();
    } else {
        $("#S2Lavado_de_colchones").hide();
    }

    if(cant == "S2Lavado_de_int_de_autos"){
        $("#S2Lavado_de_int_de_autos").show();
    } else {
        $("#S2Lavado_de_int_de_autos").hide();
    }

    if(cant == "S2Lavado_de_pisos"){
        $("#S2Lavado_de_pisos").show();
    } else {
        $("#S2Lavado_de_pisos").hide();
    }

    if(cant == "S2Pulido_de_pisos"){
        $("#S2Pulido_de_pisos").show();
    } else{
        $("#S2Pulido_de_pisos").hide();
    }

    if(cant == "S2Sanitizacion"){
        $("#S2Sanitizacion").show();
    } else {
        $("#S2Sanitizacion").hide();
    }

    if(cant == "S2Limpieza_de_vidrios"){
        $("#S2Limpieza_de_vidrios").show();
    } else {
        $("#S2Limpieza_de_vidrios").hide();
    }

    if(cant == "S2Limpieza_profunda"){
        $("#S2Limpieza_profunda").show();
    } else {
        $("#S2Limpieza_profunda").hide();
    }

    if(cant == "S2Limpieza_general"){
        $("#S2Limpieza_general").show();
    } else {
        $("#S2Limpieza_general").hide();
    }

    if(cant == "S2Limpieza_de_ductos"){
        $("#S2Limpieza_de_ductos").show();
    } else {
        $("#S2Limpieza_de_ductos").hide();
    }
})

function fS2service_selector1(){
    $("#S2service_selector1").on("change", function() {
        var e = document.getElementById("S2service_selector1");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S2Lavado_de_alfombra"){
            $("#S2Lavado_de_alfombra").show();
        } else {
            $("#S2Lavado_de_alfombra").hide();
        }
     
        if(cant == "S2Lavado_de_sillones"){
            $("#S2Lavado_de_sillones").show();
        } else {
            $("#S2Lavado_de_sillones").hide();
        }
    
        if(cant == "S2Lavado_de_sillas"){
            $("#S2Lavado_de_sillas").show();
        } else {
            $("#S2Lavado_de_sillas").hide();
        }
    
        if(cant == "S2Lavado_de_colchones"){
            $("#S2Lavado_de_colchones").show();
        } else {
            $("#S2Lavado_de_colchones").hide();
        }
    
        if(cant == "S2Lavado_de_int_de_autos"){
            $("#S2Lavado_de_int_de_autos").show();
        } else {
            $("#S2Lavado_de_int_de_autos").hide();
        }
    
        if(cant == "S2Lavado_de_pisos"){
            $("#S2Lavado_de_pisos").show();
        } else {
            $("#S2Lavado_de_pisos").hide();
        }
    
        if(cant == "S2Pulido_de_pisos"){
            $("#S2Pulido_de_pisos").show();
        } else{
            $("#S2Pulido_de_pisos").hide();
        }
    
        if(cant == "S2Sanitizacion"){
            $("#S2Sanitizacion").show();
        } else {
            $("#S2Sanitizacion").hide();
        }
    
        if(cant == "S2Limpieza_de_vidrios"){
            $("#S2Limpieza_de_vidrios").show();
        } else {
            $("#S2Limpieza_de_vidrios").hide();
        }
    
        if(cant == "S2Limpieza_profunda"){
            $("#S2Limpieza_profunda").show();
        } else {
            $("#S2Limpieza_profunda").hide();
        }
    
        if(cant == "S2Limpieza_general"){
            $("#S2Limpieza_general").show();
        } else {
            $("#S2Limpieza_general").hide();
        }
    
        if(cant == "S2Limpieza_de_ductos"){
            $("#S2Limpieza_de_ductos").show();
        } else {
            $("#S2Limpieza_de_ductos").hide();
        }
    })
}

window.addEventListener('change', fS2service_selector1);

//Servicio select3
$("#S3service_selector1").on("change", function() {
    var e = document.getElementById("S3service_selector1");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S3Lavado_de_alfombra"){
        $("#S3Lavado_de_alfombra").show();
    } else {
        $("#S3Lavado_de_alfombra").hide();
    }
 
    if(cant == "S3Lavado_de_sillones"){
        $("#S3Lavado_de_sillones").show();
    } else {
        $("#S3Lavado_de_sillones").hide();
    }

    if(cant == "S3Lavado_de_sillas"){
        $("#S3Lavado_de_sillas").show();
    } else {
        $("#S3Lavado_de_sillas").hide();
    }

    if(cant == "S3Lavado_de_colchones"){
        $("#S3Lavado_de_colchones").show();
    } else {
        $("#S3Lavado_de_colchones").hide();
    }

    if(cant == "S3Lavado_de_int_de_autos"){
        $("#S3Lavado_de_int_de_autos").show();
    } else {
        $("#S3Lavado_de_int_de_autos").hide();
    }

    if(cant == "S3Lavado_de_pisos"){
        $("#S3Lavado_de_pisos").show();
    } else {
        $("#S3Lavado_de_pisos").hide();
    }

    if(cant == "S3Pulido_de_pisos"){
        $("#S3Pulido_de_pisos").show();
    } else{
        $("#S3Pulido_de_pisos").hide();
    }

    if(cant == "S3Sanitizacion"){
        $("#S3Sanitizacion").show();
    } else {
        $("#S3Sanitizacion").hide();
    }

    if(cant == "S3Limpieza_de_vidrios"){
        $("#S3Limpieza_de_vidrios").show();
    } else {
        $("#S3Limpieza_de_vidrios").hide();
    }

    if(cant == "S3Limpieza_profunda"){
        $("#S3Limpieza_profunda").show();
    } else {
        $("#S3Limpieza_profunda").hide();
    }

    if(cant == "S3Limpieza_general"){
        $("#S3Limpieza_general").show();
    } else {
        $("#S3Limpieza_general").hide();
    }

    if(cant == "S3Limpieza_de_ductos"){
        $("#S3Limpieza_de_ductos").show();
    } else {
        $("#S3Limpieza_de_ductos").hide();
    }
})

function fS3service_selector1(){
    $("#S3service_selector1").on("change", function() {
        var e = document.getElementById("S3service_selector1");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S3Lavado_de_alfombra"){
            $("#S3Lavado_de_alfombra").show();
        } else {
            $("#S3Lavado_de_alfombra").hide();
        }
     
        if(cant == "S3Lavado_de_sillones"){
            $("#S3Lavado_de_sillones").show();
        } else {
            $("#S3Lavado_de_sillones").hide();
        }
    
        if(cant == "S3Lavado_de_sillas"){
            $("#S3Lavado_de_sillas").show();
        } else {
            $("#S3Lavado_de_sillas").hide();
        }
    
        if(cant == "S3Lavado_de_colchones"){
            $("#S3Lavado_de_colchones").show();
        } else {
            $("#S3Lavado_de_colchones").hide();
        }
    
        if(cant == "S3Lavado_de_int_de_autos"){
            $("#S3Lavado_de_int_de_autos").show();
        } else {
            $("#S3Lavado_de_int_de_autos").hide();
        }
    
        if(cant == "S3Lavado_de_pisos"){
            $("#S3Lavado_de_pisos").show();
        } else {
            $("#S3Lavado_de_pisos").hide();
        }
    
        if(cant == "S3Pulido_de_pisos"){
            $("#S3Pulido_de_pisos").show();
        } else{
            $("#S3Pulido_de_pisos").hide();
        }
    
        if(cant == "S3Sanitizacion"){
            $("#S3Sanitizacion").show();
        } else {
            $("#S3Sanitizacion").hide();
        }
    
        if(cant == "S3Limpieza_de_vidrios"){
            $("#S3Limpieza_de_vidrios").show();
        } else {
            $("#S3Limpieza_de_vidrios").hide();
        }
    
        if(cant == "S3Limpieza_profunda"){
            $("#S3Limpieza_profunda").show();
        } else {
            $("#S3Limpieza_profunda").hide();
        }
    
        if(cant == "S3Limpieza_general"){
            $("#S3Limpieza_general").show();
        } else {
            $("#S3Limpieza_general").hide();
        }
    
        if(cant == "S3Limpieza_de_ductos"){
            $("#S3Limpieza_de_ductos").show();
        } else {
            $("#S3Limpieza_de_ductos").hide();
        }
    })
}

window.addEventListener('change', fS3service_selector1);

//Servicio select4
$("#S4service_selector1").on("change", function() {
    var e = document.getElementById("S4service_selector1");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S4Lavado_de_alfombra"){
        $("#S4Lavado_de_alfombra").show();
    } else {
        $("#S4Lavado_de_alfombra").hide();
    }
 
    if(cant == "S4Lavado_de_sillones"){
        $("#S4Lavado_de_sillones").show();
    } else {
        $("#S4Lavado_de_sillones").hide();
    }

    if(cant == "S4Lavado_de_sillas"){
        $("#S4Lavado_de_sillas").show();
    } else {
        $("#S4Lavado_de_sillas").hide();
    }

    if(cant == "S4Lavado_de_colchones"){
        $("#S4Lavado_de_colchones").show();
    } else {
        $("#S4Lavado_de_colchones").hide();
    }

    if(cant == "S4Lavado_de_int_de_autos"){
        $("#S4Lavado_de_int_de_autos").show();
    } else {
        $("#S4Lavado_de_int_de_autos").hide();
    }

    if(cant == "S4Lavado_de_pisos"){
        $("#S4Lavado_de_pisos").show();
    } else {
        $("#S4Lavado_de_pisos").hide();
    }

    if(cant == "S4Pulido_de_pisos"){
        $("#S4Pulido_de_pisos").show();
    } else{
        $("#S4Pulido_de_pisos").hide();
    }

    if(cant == "S4Sanitizacion"){
        $("#S4Sanitizacion").show();
    } else {
        $("#S4Sanitizacion").hide();
    }

    if(cant == "S4Limpieza_de_vidrios"){
        $("#S4Limpieza_de_vidrios").show();
    } else {
        $("#S4Limpieza_de_vidrios").hide();
    }

    if(cant == "S4Limpieza_profunda"){
        $("#S4Limpieza_profunda").show();
    } else {
        $("#S4Limpieza_profunda").hide();
    }

    if(cant == "S4Limpieza_general"){
        $("#S4Limpieza_general").show();
    } else {
        $("#S4Limpieza_general").hide();
    }

    if(cant == "S4Limpieza_de_ductos"){
        $("#S4Limpieza_de_ductos").show();
    } else {
        $("#S4Limpieza_de_ductos").hide();
    }
})

function fS4service_selector1(){
    $("#S4service_selector1").on("change", function() {
        var e = document.getElementById("S4service_selector1");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S4Lavado_de_alfombra"){
            $("#S4Lavado_de_alfombra").show();
        } else {
            $("#S4Lavado_de_alfombra").hide();
        }
     
        if(cant == "S4Lavado_de_sillones"){
            $("#S4Lavado_de_sillones").show();
        } else {
            $("#S4Lavado_de_sillones").hide();
        }
    
        if(cant == "S4Lavado_de_sillas"){
            $("#S4Lavado_de_sillas").show();
        } else {
            $("#S4Lavado_de_sillas").hide();
        }
    
        if(cant == "S4Lavado_de_colchones"){
            $("#S4Lavado_de_colchones").show();
        } else {
            $("#S4Lavado_de_colchones").hide();
        }
    
        if(cant == "S4Lavado_de_int_de_autos"){
            $("#S4Lavado_de_int_de_autos").show();
        } else {
            $("#S4Lavado_de_int_de_autos").hide();
        }
    
        if(cant == "S4Lavado_de_pisos"){
            $("#S4Lavado_de_pisos").show();
        } else {
            $("#S4Lavado_de_pisos").hide();
        }
    
        if(cant == "S4Pulido_de_pisos"){
            $("#S4Pulido_de_pisos").show();
        } else{
            $("#S4Pulido_de_pisos").hide();
        }
    
        if(cant == "S4Sanitizacion"){
            $("#S4Sanitizacion").show();
        } else {
            $("#S4Sanitizacion").hide();
        }
    
        if(cant == "S4Limpieza_de_vidrios"){
            $("#S4Limpieza_de_vidrios").show();
        } else {
            $("#S4Limpieza_de_vidrios").hide();
        }
    
        if(cant == "S4Limpieza_profunda"){
            $("#S4Limpieza_profunda").show();
        } else {
            $("#S4Limpieza_profunda").hide();
        }
    
        if(cant == "S4Limpieza_general"){
            $("#S4Limpieza_general").show();
        } else {
            $("#S4Limpieza_general").hide();
        }
    
        if(cant == "S4Limpieza_de_ductos"){
            $("#S4Limpieza_de_ductos").show();
        } else {
            $("#S4Limpieza_de_ductos").hide();
        }
    })
}

window.addEventListener('change', fS4service_selector1);

//Servicio select5
$("#S5service_selector1").on("change", function() {
    var e = document.getElementById("S5service_selector1");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S5Lavado_de_alfombra"){
        $("#S5Lavado_de_alfombra").show();
    } else {
        $("#S5Lavado_de_alfombra").hide();
    }
 
    if(cant == "S5Lavado_de_sillones"){
        $("#S5Lavado_de_sillones").show();
    } else {
        $("#S5Lavado_de_sillones").hide();
    }

    if(cant == "S5Lavado_de_sillas"){
        $("#S5Lavado_de_sillas").show();
    } else {
        $("#S5Lavado_de_sillas").hide();
    }

    if(cant == "S5Lavado_de_colchones"){
        $("#S5Lavado_de_colchones").show();
    } else {
        $("#S5Lavado_de_colchones").hide();
    }

    if(cant == "S5Lavado_de_int_de_autos"){
        $("#S5Lavado_de_int_de_autos").show();
    } else {
        $("#S5Lavado_de_int_de_autos").hide();
    }

    if(cant == "S5Lavado_de_pisos"){
        $("#S5Lavado_de_pisos").show();
    } else {
        $("#S5Lavado_de_pisos").hide();
    }

    if(cant == "S5Pulido_de_pisos"){
        $("#S5Pulido_de_pisos").show();
    } else{
        $("#S5Pulido_de_pisos").hide();
    }

    if(cant == "S5Sanitizacion"){
        $("#S5Sanitizacion").show();
    } else {
        $("#S5Sanitizacion").hide();
    }

    if(cant == "S5Limpieza_de_vidrios"){
        $("#S5Limpieza_de_vidrios").show();
    } else {
        $("#S5Limpieza_de_vidrios").hide();
    }

    if(cant == "S5Limpieza_profunda"){
        $("#S5Limpieza_profunda").show();
    } else {
        $("#S5Limpieza_profunda").hide();
    }

    if(cant == "S5Limpieza_general"){
        $("#S5Limpieza_general").show();
    } else {
        $("#S5Limpieza_general").hide();
    }

    if(cant == "S5Limpieza_de_ductos"){
        $("#S5Limpieza_de_ductos").show();
    } else {
        $("#S5Limpieza_de_ductos").hide();
    }
})

function fS5service_selector1(){
    $("#S5service_selector1").on("change", function() {
        var e = document.getElementById("S5service_selector1");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S5Lavado_de_alfombra"){
            $("#S5Lavado_de_alfombra").show();
        } else {
            $("#S5Lavado_de_alfombra").hide();
        }
     
        if(cant == "S5Lavado_de_sillones"){
            $("#S5Lavado_de_sillones").show();
        } else {
            $("#S5Lavado_de_sillones").hide();
        }
    
        if(cant == "S5Lavado_de_sillas"){
            $("#S5Lavado_de_sillas").show();
        } else {
            $("#S5Lavado_de_sillas").hide();
        }
    
        if(cant == "S5Lavado_de_colchones"){
            $("#S5Lavado_de_colchones").show();
        } else {
            $("#S5Lavado_de_colchones").hide();
        }
    
        if(cant == "S5Lavado_de_int_de_autos"){
            $("#S5Lavado_de_int_de_autos").show();
        } else {
            $("#S5Lavado_de_int_de_autos").hide();
        }
    
        if(cant == "S5Lavado_de_pisos"){
            $("#S5Lavado_de_pisos").show();
        } else {
            $("#S5Lavado_de_pisos").hide();
        }
    
        if(cant == "S5Pulido_de_pisos"){
            $("#S5Pulido_de_pisos").show();
        } else{
            $("#S5Pulido_de_pisos").hide();
        }
    
        if(cant == "S5Sanitizacion"){
            $("#S5Sanitizacion").show();
        } else {
            $("#S5Sanitizacion").hide();
        }
    
        if(cant == "S5Limpieza_de_vidrios"){
            $("#S5Limpieza_de_vidrios").show();
        } else {
            $("#S5Limpieza_de_vidrios").hide();
        }
    
        if(cant == "S5Limpieza_profunda"){
            $("#S5Limpieza_profunda").show();
        } else {
            $("#S5Limpieza_profunda").hide();
        }
    
        if(cant == "S5Limpieza_general"){
            $("#S5Limpieza_general").show();
        } else {
            $("#S5Limpieza_general").hide();
        }
    
        if(cant == "S5Limpieza_de_ductos"){
            $("#S5Limpieza_de_ductos").show();
        } else {
            $("#S5Limpieza_de_ductos").hide();
        }
    })
}

window.addEventListener('change', fS5service_selector1);

//Lavado de alfombra
//S1Lavado_de_alfombra
//S1Lavado_de_alfombra_cant_selector
$("#S1Lavado_de_alfombra_cant_selector").on("change", function(){
    var e = document.getElementById("S1Lavado_de_alfombra_cant_selector");
    var tipoDeServicio = e.options[e.selectedIndex].value;
    if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra1"){
        $("#S1Lavado_de_alfombra_cant_selector_alfombra1").show();
    } else{
        $("#S1Lavado_de_alfombra_cant_selector_alfombra1").hide();
    } 
    
    if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra2"){
        $("#S1Lavado_de_alfombra_cant_selector_alfombra2").show();
    } else{
        $("#S1Lavado_de_alfombra_cant_selector_alfombra2").hide();
    } 
    
    if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra3"){
        $("#S1Lavado_de_alfombra_cant_selector_alfombra3").show();
    } else{
        $("#S1Lavado_de_alfombra_cant_selector_alfombra3").hide();
    } 
    
    if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra4"){
        $("#S1Lavado_de_alfombra_cant_selector_alfombra4").show();
    } else{
        $("#S1Lavado_de_alfombra_cant_selector_alfombra4").hide();
    } 
    
    if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra5omas"){
        $("#S1Lavado_de_alfombra_cant_selector_alfombra5omas").show();
    } else{
        $("#S1Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
    }
})

function fS1Lavado_de_alfombra_cant_selector(){
    $("#S1Lavado_de_alfombra_cant_selector").on("change", function(){
        var e = document.getElementById("S1Lavado_de_alfombra_cant_selector");
        var tipoDeServicio = e.options[e.selectedIndex].value;
        if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra1"){
            $("#S1Lavado_de_alfombra_cant_selector_alfombra1").show();
        } else{
            $("#S1Lavado_de_alfombra_cant_selector_alfombra1").hide();
        } 
        
        if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra2"){
            $("#S1Lavado_de_alfombra_cant_selector_alfombra2").show();
        } else{
            $("#S1Lavado_de_alfombra_cant_selector_alfombra2").hide();
        } 
        
        if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra3"){
            $("#S1Lavado_de_alfombra_cant_selector_alfombra3").show();
        } else{
            $("#S1Lavado_de_alfombra_cant_selector_alfombra3").hide();
        } 
        
        if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra4"){
            $("#S1Lavado_de_alfombra_cant_selector_alfombra4").show();
        } else{
            $("#S1Lavado_de_alfombra_cant_selector_alfombra4").hide();
        } 
        
        if(tipoDeServicio == "S1Lavado_de_alfombra_cant_selector_alfombra5omas"){
            $("#S1Lavado_de_alfombra_cant_selector_alfombra5omas").show();
        } else{
            $("#S1Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
        }
    })
}

window.addEventListener('change', fS1Lavado_de_alfombra_cant_selector);

//Lavado de alfombra
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector
$("#S2Lavado_de_alfombra_cant_selector").on("change", function(){
    var e = document.getElementById("S2Lavado_de_alfombra_cant_selector");
    var tipoDeServicio = e.options[e.selectedIndex].value;
    if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra1"){
        $("#S2Lavado_de_alfombra_cant_selector_alfombra1").show();
    } else{
        $("#S2Lavado_de_alfombra_cant_selector_alfombra1").hide();
    } 
    
    if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra2"){
        $("#S2Lavado_de_alfombra_cant_selector_alfombra2").show();
    } else{
        $("#S2Lavado_de_alfombra_cant_selector_alfombra2").hide();
    } 
    
    if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra3"){
        $("#S2Lavado_de_alfombra_cant_selector_alfombra3").show();
    } else{
        $("#S2Lavado_de_alfombra_cant_selector_alfombra3").hide();
    } 
    
    if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra4"){
        $("#S2Lavado_de_alfombra_cant_selector_alfombra4").show();
    } else{
        $("#S2Lavado_de_alfombra_cant_selector_alfombra4").hide();
    } 
    
    if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra5omas"){
        $("#S2Lavado_de_alfombra_cant_selector_alfombra5omas").show();
    } else{
        $("#S2Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
    }
})

function fS2Lavado_de_alfombra_cant_selector(){
    $("#S2Lavado_de_alfombra_cant_selector").on("change", function(){
        var e = document.getElementById("S2Lavado_de_alfombra_cant_selector");
        var tipoDeServicio = e.options[e.selectedIndex].value;
        if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra1"){
            $("#S2Lavado_de_alfombra_cant_selector_alfombra1").show();
        } else{
            $("#S2Lavado_de_alfombra_cant_selector_alfombra1").hide();
        } 
        
        if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra2"){
            $("#S2Lavado_de_alfombra_cant_selector_alfombra2").show();
        } else{
            $("#S2Lavado_de_alfombra_cant_selector_alfombra2").hide();
        } 
        
        if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra3"){
            $("#S2Lavado_de_alfombra_cant_selector_alfombra3").show();
        } else{
            $("#S2Lavado_de_alfombra_cant_selector_alfombra3").hide();
        } 
        
        if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra4"){
            $("#S2Lavado_de_alfombra_cant_selector_alfombra4").show();
        } else{
            $("#S2Lavado_de_alfombra_cant_selector_alfombra4").hide();
        } 
        
        if(tipoDeServicio == "S2Lavado_de_alfombra_cant_selector_alfombra5omas"){
            $("#S2Lavado_de_alfombra_cant_selector_alfombra5omas").show();
        } else{
            $("#S2Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
        }
    })
}

window.addEventListener('change', fS2Lavado_de_alfombra_cant_selector);

//Lavado de alfombra
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector
$("#S3Lavado_de_alfombra_cant_selector").on("change", function(){
    var e = document.getElementById("S3Lavado_de_alfombra_cant_selector");
    var tipoDeServicio = e.options[e.selectedIndex].value;
    if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra1"){
        $("#S3Lavado_de_alfombra_cant_selector_alfombra1").show();
    } else{
        $("#S3Lavado_de_alfombra_cant_selector_alfombra1").hide();
    } 
    
    if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra2"){
        $("#S3Lavado_de_alfombra_cant_selector_alfombra2").show();
    } else{
        $("#S3Lavado_de_alfombra_cant_selector_alfombra2").hide();
    } 
    
    if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra3"){
        $("#S3Lavado_de_alfombra_cant_selector_alfombra3").show();
    } else{
        $("#S3Lavado_de_alfombra_cant_selector_alfombra3").hide();
    } 
    
    if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra4"){
        $("#S3Lavado_de_alfombra_cant_selector_alfombra4").show();
    } else{
        $("#S3Lavado_de_alfombra_cant_selector_alfombra4").hide();
    } 
    
    if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra5omas"){
        $("#S3Lavado_de_alfombra_cant_selector_alfombra5omas").show();
    } else{
        $("#S3Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
    }
})

function fS3Lavado_de_alfombra_cant_selector(){
    $("#S3Lavado_de_alfombra_cant_selector").on("change", function(){
        var e = document.getElementById("S3Lavado_de_alfombra_cant_selector");
        var tipoDeServicio = e.options[e.selectedIndex].value;
        if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra1"){
            $("#S3Lavado_de_alfombra_cant_selector_alfombra1").show();
        } else{
            $("#S3Lavado_de_alfombra_cant_selector_alfombra1").hide();
        } 
        
        if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra2"){
            $("#S3Lavado_de_alfombra_cant_selector_alfombra2").show();
        } else{
            $("#S3Lavado_de_alfombra_cant_selector_alfombra2").hide();
        } 
        
        if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra3"){
            $("#S3Lavado_de_alfombra_cant_selector_alfombra3").show();
        } else{
            $("#S3Lavado_de_alfombra_cant_selector_alfombra3").hide();
        } 
        
        if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra4"){
            $("#S3Lavado_de_alfombra_cant_selector_alfombra4").show();
        } else{
            $("#S3Lavado_de_alfombra_cant_selector_alfombra4").hide();
        } 
        
        if(tipoDeServicio == "S3Lavado_de_alfombra_cant_selector_alfombra5omas"){
            $("#S3Lavado_de_alfombra_cant_selector_alfombra5omas").show();
        } else{
            $("#S3Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
        }
    })
}

window.addEventListener('change', fS3Lavado_de_alfombra_cant_selector);

//Lavado de alfombra
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector
$("#S4Lavado_de_alfombra_cant_selector").on("change", function(){
    var e = document.getElementById("S4Lavado_de_alfombra_cant_selector");
    var tipoDeServicio = e.options[e.selectedIndex].value;
    if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra1"){
        $("#S4Lavado_de_alfombra_cant_selector_alfombra1").show();
    } else{
        $("#S4Lavado_de_alfombra_cant_selector_alfombra1").hide();
    } 
    
    if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra2"){
        $("#S4Lavado_de_alfombra_cant_selector_alfombra2").show();
    } else{
        $("#S4Lavado_de_alfombra_cant_selector_alfombra2").hide();
    } 
    
    if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra3"){
        $("#S4Lavado_de_alfombra_cant_selector_alfombra3").show();
    } else{
        $("#S4Lavado_de_alfombra_cant_selector_alfombra3").hide();
    } 
    
    if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra4"){
        $("#S4Lavado_de_alfombra_cant_selector_alfombra4").show();
    } else{
        $("#S4Lavado_de_alfombra_cant_selector_alfombra4").hide();
    } 
    
    if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra5omas"){
        $("#S4Lavado_de_alfombra_cant_selector_alfombra5omas").show();
    } else{
        $("#S4Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
    }
})

function fS4Lavado_de_alfombra_cant_selector(){
    $("#S4Lavado_de_alfombra_cant_selector").on("change", function(){
        var e = document.getElementById("S4Lavado_de_alfombra_cant_selector");
        var tipoDeServicio = e.options[e.selectedIndex].value;
        if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra1"){
            $("#S4Lavado_de_alfombra_cant_selector_alfombra1").show();
        } else{
            $("#S4Lavado_de_alfombra_cant_selector_alfombra1").hide();
        } 
        
        if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra2"){
            $("#S4Lavado_de_alfombra_cant_selector_alfombra2").show();
        } else{
            $("#S4Lavado_de_alfombra_cant_selector_alfombra2").hide();
        } 
        
        if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra3"){
            $("#S4Lavado_de_alfombra_cant_selector_alfombra3").show();
        } else{
            $("#S4Lavado_de_alfombra_cant_selector_alfombra3").hide();
        } 
        
        if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra4"){
            $("#S4Lavado_de_alfombra_cant_selector_alfombra4").show();
        } else{
            $("#S4Lavado_de_alfombra_cant_selector_alfombra4").hide();
        } 
        
        if(tipoDeServicio == "S4Lavado_de_alfombra_cant_selector_alfombra5omas"){
            $("#S4Lavado_de_alfombra_cant_selector_alfombra5omas").show();
        } else{
            $("#S4Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
        }
    })
}

window.addEventListener('change', fS4Lavado_de_alfombra_cant_selector);

//Lavado de alfombra
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector
$("#S5Lavado_de_alfombra_cant_selector").on("change", function(){
    var e = document.getElementById("S5Lavado_de_alfombra_cant_selector");
    var tipoDeServicio = e.options[e.selectedIndex].value;
    if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra1"){
        $("#S5Lavado_de_alfombra_cant_selector_alfombra1").show();
    } else{
        $("#S5Lavado_de_alfombra_cant_selector_alfombra1").hide();
    } 
    
    if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra2"){
        $("#S5Lavado_de_alfombra_cant_selector_alfombra2").show();
    } else{
        $("#S5Lavado_de_alfombra_cant_selector_alfombra2").hide();
    } 
    
    if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra3"){
        $("#S5Lavado_de_alfombra_cant_selector_alfombra3").show();
    } else{
        $("#S5Lavado_de_alfombra_cant_selector_alfombra3").hide();
    } 
    
    if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra4"){
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4").show();
    } else{
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4").hide();
    } 
    
    if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra5omas"){
        $("#S5Lavado_de_alfombra_cant_selector_alfombra5omas").show();
    } else{
        $("#S5Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
    }
})

function fS5Lavado_de_alfombra_cant_selector(){
    $("#S5Lavado_de_alfombra_cant_selector").on("change", function(){
        var e = document.getElementById("S5Lavado_de_alfombra_cant_selector");
        var tipoDeServicio = e.options[e.selectedIndex].value;
        if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra1"){
            $("#S5Lavado_de_alfombra_cant_selector_alfombra1").show();
        } else{
            $("#S5Lavado_de_alfombra_cant_selector_alfombra1").hide();
        } 
        
        if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra2"){
            $("#S5Lavado_de_alfombra_cant_selector_alfombra2").show();
        } else{
            $("#S5Lavado_de_alfombra_cant_selector_alfombra2").hide();
        } 
        
        if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra3"){
            $("#S5Lavado_de_alfombra_cant_selector_alfombra3").show();
        } else{
            $("#S5Lavado_de_alfombra_cant_selector_alfombra3").hide();
        } 
        
        if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra4"){
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4").show();
        } else{
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4").hide();
        } 
        
        if(tipoDeServicio == "S5Lavado_de_alfombra_cant_selector_alfombra5omas"){
            $("#S5Lavado_de_alfombra_cant_selector_alfombra5omas").show();
        } else{
            $("#S5Lavado_de_alfombra_cant_selector_alfombra5omas").hide();
        }
    })
}

window.addEventListener('change', fS5Lavado_de_alfombra_cant_selector);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
    var e = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S5Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
    }
})

function S5alfombra1CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
        var e = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S5Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
        }
    })
}

window.addEventListener('change', S5alfombra1CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra1_type_selector
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
    var e = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S2Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
    }
})

function S2alfombra1CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
        var e = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S2Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
        }
    })
}

window.addEventListener('change', S2alfombra1CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra1_type_selector
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
    var e = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S3Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
    }
})

function S3alfombra1CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
        var e = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S3Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
        }
    })
}

window.addEventListener('change', S3alfombra1CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra1_type_selector
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
    var e = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S4Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
    }
})

function S4alfombra1CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
        var e = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S4Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
        }
    })
}

window.addEventListener('change', S4alfombra1CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
    var e = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "S5Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
    }
})

function S5alfombra1CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector").on("change", function() {
        var e = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra1_type_selector");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "S5Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra1_type_selectorOtro").hide();
        }
    })
}

window.addEventListener('change', S5alfombra1CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
    }
})

function S5alfombra2_1CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S5alfombra2_1CantOtra);


//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
    }
})

function S2alfombra2_1CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S2alfombra2_1CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
    }
})

function S3alfombra2_1CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S3alfombra2_1CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
    }
})

function S4alfombra2_1CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S4alfombra2_1CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
    }
})

function S5alfombra2_1CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S5alfombra2_1CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
    var e2 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
    }
})

function S5alfombra2_2CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
        var e2 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S5alfombra2_2CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
    var e2 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
    }
})

function S2alfombra2_2CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
        var e2 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S2alfombra2_2CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
    var e2 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
    }
})

function S3alfombra2_2CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
        var e2 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S3alfombra2_2CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
    var e2 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
    }
})

function S4alfombra2_2CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
        var e2 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S4alfombra2_2CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
    var e2 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
    }
})

function S5alfombra2_2CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2").on("change", function() {
        var e2 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra2_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S5alfombra2_2CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
    }
})

function S5alfombra3_1CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S5alfombra3_1CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
    }
})

function S2alfombra3_1CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S2alfombra3_1CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
    }
})

function S3alfombra3_1CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S3alfombra3_1CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
    }
})

function S4alfombra3_1CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S4alfombra3_1CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
    }
})

function S5alfombra3_1CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S5alfombra3_1CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
    var e2 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
    }
})

function S5alfombra3_2CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
        var e2 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S5alfombra3_2CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
    var e2 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
    }
})

function S2alfombra3_2CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
        var e2 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S2alfombra3_2CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
    var e2 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
    }
})

function S3alfombra3_2CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
        var e2 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S3alfombra3_2CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
    var e2 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
    }
})

function S4alfombra3_2CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
        var e2 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S4alfombra3_2CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
    var e2 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
    }
})

function S5alfombra3_2CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2").on("change", function() {
        var e2 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S5alfombra3_2CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
    var e3 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
    }
}) 

function S5alfombra3_3CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
        var e3 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
        }
    })    
}

window.addEventListener('change', S5alfombra3_3CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
    var e3 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
    }
}) 

function S2alfombra3_3CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
        var e3 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
        }
    })    
}

window.addEventListener('change', S2alfombra3_3CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
    var e3 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
    }
}) 

function S3alfombra3_3CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
        var e3 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
        }
    })    
}

window.addEventListener('change', S3alfombra3_3CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
    var e3 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
    }
}) 

function S4alfombra3_3CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
        var e3 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
        }
    })    
}

window.addEventListener('change', S4alfombra3_3CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
    var e3 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
    }
}) 

function S5alfombra3_3CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3").on("change", function() {
        var e3 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra3_type_selector3Otro3").hide();
        }
    })    
}

window.addEventListener('change', S5alfombra3_3CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
    }
})

function S5alfombra4_1CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S5alfombra4_1CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
    }
})

function S2alfombra4_1CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S2alfombra4_1CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
    }
})

function S3alfombra4_1CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S3alfombra4_1CantOtra);


//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
    }
})

function S4alfombra4_1CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S4alfombra4_1CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
    }
})

function S5alfombra4_1CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector1Otro1").hide();
        }
    })
}

window.addEventListener('change', S5alfombra4_1CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
    }
})

function S5alfombra4_2CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S5alfombra4_2CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
    }
})

function S2alfombra4_2CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S2alfombra4_2CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
    }
})

function S3alfombra4_2CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S3alfombra4_2CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
    }
})

function S4alfombra4_2CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S4alfombra4_2CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
    }
})

function S5alfombra4_2CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector2Otro2").hide();
        }
    })
}

window.addEventListener('change', S5alfombra4_2CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
    var e3 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
    }
})

function S5alfombra4_3CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
        var e3 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
        }
    })
}

window.addEventListener('change', S5alfombra4_3CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
    var e3 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
    }
})

function S2alfombra4_3CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
        var e3 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
        }
    })
}

window.addEventListener('change', S2alfombra4_3CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
    var e3 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
    }
})

function S3alfombra4_3CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
        var e3 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
        }
    })
}

window.addEventListener('change', S3alfombra4_3CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
    var e3 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
    }
})

function S4alfombra4_3CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
        var e3 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
        }
    })
}

window.addEventListener('change', S4alfombra4_3CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
    var e3 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
    }
})

function S5alfombra4_3CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3").on("change", function() {
        var e3 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector3Otro3").hide();
        }
    })
}

window.addEventListener('change', S5alfombra4_3CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
    var e4 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
    var cant4 = e4.options[e4.selectedIndex].value;
    if(cant4 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
    }
})

function S5alfombra4_4CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
        var e4 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
        var cant4 = e4.options[e4.selectedIndex].value;
        if(cant4 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
        }
    })
}

window.addEventListener('change', S5alfombra4_4CantOtra);

//Lavado de alfombra 
//S2Lavado_de_alfombra
//S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4
//Otro
$("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
    var e4 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
    var cant4 = e4.options[e4.selectedIndex].value;
    if(cant4 == "S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
        $("#" + $(this).val()).show();
    } else {
        $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
    }
})

function S2alfombra4_4CantOtra(){
    $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
        var e4 = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
        var cant4 = e4.options[e4.selectedIndex].value;
        if(cant4 == "S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
            $("#" + $(this).val()).show();
        } else {
            $("#S2Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
        }
    })
}

window.addEventListener('change', S2alfombra4_4CantOtra);

//Lavado de alfombra 
//S3Lavado_de_alfombra
//S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4
//Otro
$("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
    var e4 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
    var cant4 = e4.options[e4.selectedIndex].value;
    if(cant4 == "S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
        $("#" + $(this).val()).show();
    } else {
        $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
    }
})

function S3alfombra4_4CantOtra(){
    $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
        var e4 = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
        var cant4 = e4.options[e4.selectedIndex].value;
        if(cant4 == "S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
            $("#" + $(this).val()).show();
        } else {
            $("#S3Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
        }
    })
}

window.addEventListener('change', S3alfombra4_4CantOtra);

//Lavado de alfombra 
//S4Lavado_de_alfombra
//S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4
//Otro
$("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
    var e4 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
    var cant4 = e4.options[e4.selectedIndex].value;
    if(cant4 == "S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
        $("#" + $(this).val()).show();
    } else {
        $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
    }
})

function S4alfombra4_4CantOtra(){
    $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
        var e4 = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
        var cant4 = e4.options[e4.selectedIndex].value;
        if(cant4 == "S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
            $("#" + $(this).val()).show();
        } else {
            $("#S4Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
        }
    })
}

window.addEventListener('change', S4alfombra4_4CantOtra);

//Lavado de alfombra 
//S5Lavado_de_alfombra
//S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4
//Otro
$("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
    var e4 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
    var cant4 = e4.options[e4.selectedIndex].value;
    if(cant4 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
        $("#" + $(this).val()).show();
    } else {
        $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
    }
})

function S5alfombra4_4CantOtra(){
    $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4").on("change", function() {
        var e4 = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4");
        var cant4 = e4.options[e4.selectedIndex].value;
        if(cant4 == "S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4"){
            $("#" + $(this).val()).show();
        } else {
            $("#S5Lavado_de_alfombra_cant_selector_alfombra4_type_selector4Otro4").hide();
        }
    })
}

window.addEventListener('change', S5alfombra4_4CantOtra);

// Lavado alfombra 
// S5Lavado_de_alfombra
// S5Lavado_de_alfombra_cant_selector_alfombra5omas
function S5agregarCampos(){   
    var number = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value;
    var container = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "10";
        document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "10";
    } else if (number < 5){
        number = 5;
        document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "5";
        document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Alfombra " + (i+1) + ":  "));
        var input = document.createElement("input");
        var input2 = document.createElement("input");
        input.type = "text";
        input2.type = "text";
        container.appendChild(input);
        container.append(" X ")
        container.appendChild(input2);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}


// Lavado alfombra 
// S2Lavado_de_alfombra
// S2Lavado_de_alfombra_cant_selector_alfombra5omas
function S2agregarCampos(){  
    var number = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value;
    var container = document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra5omas_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "10";
        document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "10";
    } else if (number < 5){
        number = 5;
        document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "5";
        document.getElementById("S2Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Alfombra " + (i+1) + ":  "));
        var input = document.createElement("input");
        var input2 = document.createElement("input");
        input.type = "text";
        input2.type = "text";
        container.appendChild(input);
        container.append(" X ")
        container.appendChild(input2);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

// Lavado alfombra 
// S3Lavado_de_alfombra
// S3Lavado_de_alfombra_cant_selector_alfombra5omas
function S3agregarCampos(){
    var number = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value;
    var container = document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra5omas_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "10";
        document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "10";
    } else if (number < 5){
        number = 5;
        document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "5";
        document.getElementById("S3Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Alfombra " + (i+1) + ":  "));
        var input = document.createElement("input");
        var input2 = document.createElement("input");
        input.type = "text";
        input2.type = "text";
        container.appendChild(input);
        container.append(" X ")
        container.appendChild(input2);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}


// Lavado alfombra 
// S4Lavado_de_alfombra
// S4Lavado_de_alfombra_cant_selector_alfombra5omas
function S4agregarCampos(){ 
    var number = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value;
    var container = document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra5omas_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "10";
        document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "10";
    } else if (number < 5){
        number = 5;
        document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "5";
        document.getElementById("S4Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Alfombra " + (i+1) + ":  "));
        var input = document.createElement("input");
        var input2 = document.createElement("input");
        input.type = "text";
        input2.type = "text";
        container.appendChild(input);
        container.append(" X ")
        container.appendChild(input2);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

// Lavado alfombra 
// S5Lavado_de_alfombra
// S5Lavado_de_alfombra_cant_selector_alfombra5omas
function S5agregarCampos(){
    var number = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value;
    var container = document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "10";
        document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "10";
    } else if (number < 5){
        number = 5;
        document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").text = "5";
        document.getElementById("S5Lavado_de_alfombra_cant_selector_alfombra5omas_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Alfombra " + (i+1) + ":  "));
        var input = document.createElement("input");
        var input2 = document.createElement("input");
        input.type = "text";
        input2.type = "text";
        container.appendChild(input);
        container.append(" X ")
        container.appendChild(input2);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

/* ------------------------------------------------------------------------------------------------*/


// Lavado de sillones
// S1Lavado_de_sillones
// S1Lavado_de_sillones_cant_selector
$("#S1Lavado_de_sillones_cant_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_sillones_cant_selector");
    var tipoDeServicio = e1.options[e1.selectedIndex].value;

    if(tipoDeServicio == "S1Lavado_de_sillones_cant_selector_pieza1"){
        $("#S1Lavado_de_sillones_cant_selector_pieza1").show();
    } else {
        $("#S1Lavado_de_sillones_cant_selector_pieza1").hide();
    }

    if(tipoDeServicio == "S1Lavado_de_sillones_cant_selector_pieza2"){
        $("#S1Lavado_de_sillones_cant_selector_pieza2").show();
    } else {
        $("#S1Lavado_de_sillones_cant_selector_pieza2").hide();
    }

    if(tipoDeServicio == "S1Lavado_de_sillones_cant_selector_pieza3"){
        $("#S1Lavado_de_sillones_cant_selector_pieza3").show();
    } else {
        $("#S1Lavado_de_sillones_cant_selector_pieza3").hide();
    }

    if(tipoDeServicio == "S1Lavado_de_sillones_cant_selector_piezaOtra"){
        $("#S1Lavado_de_sillones_cant_selector_piezaOtra").show();
    } else {
        $("#S1Lavado_de_sillones_cant_selector_piezaOtra").hide();
    }
})


function S1sillones_cantSelector(){
    $("#S1Lavado_de_sillones_cant_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_sillones_cant_selector");
        var tipoDeServicio = e1.options[e1.selectedIndex].value;
    
        if(tipoDeServicio == "S1Lavado_de_sillones_cant_selector_pieza1"){
            $("#S1Lavado_de_sillones_cant_selector_pieza1").show();
        } else {
            $("#S1Lavado_de_sillones_cant_selector_pieza1").hide();
        }
    
        if(tipoDeServicio == "S1Lavado_de_sillones_cant_selector_pieza2"){
            $("#S1Lavado_de_sillones_cant_selector_pieza2").show();
        } else {
            $("#S1Lavado_de_sillones_cant_selector_pieza2").hide();
        }
    
        if(tipoDeServicio == "S1Lavado_de_sillones_cant_selector_pieza3"){
            $("#S1Lavado_de_sillones_cant_selector_pieza3").show();
        } else {
            $("#S1Lavado_de_sillones_cant_selector_pieza3").hide();
        }
    
        if(tipoDeServicio == "S1Lavado_de_sillones_cant_selector_piezaOtra"){
            $("#S1Lavado_de_sillones_cant_selector_piezaOtra").show();
        } else {
            $("#S1Lavado_de_sillones_cant_selector_piezaOtra").hide();
        }
    })
}

window.addEventListener('change', S1sillones_cantSelector);

// Lavado de sillones
// S2Lavado_de_sillones
// S2Lavado_de_sillones_cant_selector
$("#S2Lavado_de_sillones_cant_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_sillones_cant_selector");
    var tipoDeServicio = e1.options[e1.selectedIndex].value;

    if(tipoDeServicio == "S2Lavado_de_sillones_cant_selector_pieza1"){
        $("#S2Lavado_de_sillones_cant_selector_pieza1").show();
    } else {
        $("#S2Lavado_de_sillones_cant_selector_pieza1").hide();
    }

    if(tipoDeServicio == "S2Lavado_de_sillones_cant_selector_pieza2"){
        $("#S2Lavado_de_sillones_cant_selector_pieza2").show();
    } else {
        $("#S2Lavado_de_sillones_cant_selector_pieza2").hide();
    }

    if(tipoDeServicio == "S2Lavado_de_sillones_cant_selector_pieza3"){
        $("#S2Lavado_de_sillones_cant_selector_pieza3").show();
    } else {
        $("#S2Lavado_de_sillones_cant_selector_pieza3").hide();
    }

    if(tipoDeServicio == "S2Lavado_de_sillones_cant_selector_piezaOtra"){
        $("#S2Lavado_de_sillones_cant_selector_piezaOtra").show();
    } else {
        $("#S2Lavado_de_sillones_cant_selector_piezaOtra").hide();
    }
})

function S2sillones_cantSelector(){
    $("#S2Lavado_de_sillones_cant_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_sillones_cant_selector");
        var tipoDeServicio = e1.options[e1.selectedIndex].value;
    
        if(tipoDeServicio == "S2Lavado_de_sillones_cant_selector_pieza1"){
            $("#S2Lavado_de_sillones_cant_selector_pieza1").show();
        } else {
            $("#S2Lavado_de_sillones_cant_selector_pieza1").hide();
        }
    
        if(tipoDeServicio == "S2Lavado_de_sillones_cant_selector_pieza2"){
            $("#S2Lavado_de_sillones_cant_selector_pieza2").show();
        } else {
            $("#S2Lavado_de_sillones_cant_selector_pieza2").hide();
        }
    
        if(tipoDeServicio == "S2Lavado_de_sillones_cant_selector_pieza3"){
            $("#S2Lavado_de_sillones_cant_selector_pieza3").show();
        } else {
            $("#S2Lavado_de_sillones_cant_selector_pieza3").hide();
        }
    
        if(tipoDeServicio == "S2Lavado_de_sillones_cant_selector_piezaOtra"){
            $("#S2Lavado_de_sillones_cant_selector_piezaOtra").show();
        } else {
            $("#S2Lavado_de_sillones_cant_selector_piezaOtra").hide();
        }
    })
}

window.addEventListener('change', S2sillones_cantSelector);

// Lavado de sillones
// S3Lavado_de_sillones
// S3Lavado_de_sillones_cant_selector
$("#S3Lavado_de_sillones_cant_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_sillones_cant_selector");
    var tipoDeServicio = e1.options[e1.selectedIndex].value;

    if(tipoDeServicio == "S3Lavado_de_sillones_cant_selector_pieza1"){
        $("#S3Lavado_de_sillones_cant_selector_pieza1").show();
    } else {
        $("#S3Lavado_de_sillones_cant_selector_pieza1").hide();
    }

    if(tipoDeServicio == "S3Lavado_de_sillones_cant_selector_pieza2"){
        $("#S3Lavado_de_sillones_cant_selector_pieza2").show();
    } else {
        $("#S3Lavado_de_sillones_cant_selector_pieza2").hide();
    }

    if(tipoDeServicio == "S3Lavado_de_sillones_cant_selector_pieza3"){
        $("#S3Lavado_de_sillones_cant_selector_pieza3").show();
    } else {
        $("#S3Lavado_de_sillones_cant_selector_pieza3").hide();
    }

    if(tipoDeServicio == "S3Lavado_de_sillones_cant_selector_piezaOtra"){
        $("#S3Lavado_de_sillones_cant_selector_piezaOtra").show();
    } else {
        $("#S3Lavado_de_sillones_cant_selector_piezaOtra").hide();
    }
})

function S3sillones_cantSelector(){
    $("#S3Lavado_de_sillones_cant_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_sillones_cant_selector");
        var tipoDeServicio = e1.options[e1.selectedIndex].value;
    
        if(tipoDeServicio == "S3Lavado_de_sillones_cant_selector_pieza1"){
            $("#S3Lavado_de_sillones_cant_selector_pieza1").show();
        } else {
            $("#S3Lavado_de_sillones_cant_selector_pieza1").hide();
        }
    
        if(tipoDeServicio == "S3Lavado_de_sillones_cant_selector_pieza2"){
            $("#S3Lavado_de_sillones_cant_selector_pieza2").show();
        } else {
            $("#S3Lavado_de_sillones_cant_selector_pieza2").hide();
        }
    
        if(tipoDeServicio == "S3Lavado_de_sillones_cant_selector_pieza3"){
            $("#S3Lavado_de_sillones_cant_selector_pieza3").show();
        } else {
            $("#S3Lavado_de_sillones_cant_selector_pieza3").hide();
        }
    
        if(tipoDeServicio == "S3Lavado_de_sillones_cant_selector_piezaOtra"){
            $("#S3Lavado_de_sillones_cant_selector_piezaOtra").show();
        } else {
            $("#S3Lavado_de_sillones_cant_selector_piezaOtra").hide();
        }
    })
}

window.addEventListener('change', S3sillones_cantSelector);

// Lavado de sillones
// S4Lavado_de_sillones
// S4Lavado_de_sillones_cant_selector
$("#S4Lavado_de_sillones_cant_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_sillones_cant_selector");
    var tipoDeServicio = e1.options[e1.selectedIndex].value;

    if(tipoDeServicio == "S4Lavado_de_sillones_cant_selector_pieza1"){
        $("#S4Lavado_de_sillones_cant_selector_pieza1").show();
    } else {
        $("#S4Lavado_de_sillones_cant_selector_pieza1").hide();
    }

    if(tipoDeServicio == "S4Lavado_de_sillones_cant_selector_pieza2"){
        $("#S4Lavado_de_sillones_cant_selector_pieza2").show();
    } else {
        $("#S4Lavado_de_sillones_cant_selector_pieza2").hide();
    }

    if(tipoDeServicio == "S4Lavado_de_sillones_cant_selector_pieza3"){
        $("#S4Lavado_de_sillones_cant_selector_pieza3").show();
    } else {
        $("#S4Lavado_de_sillones_cant_selector_pieza3").hide();
    }

    if(tipoDeServicio == "S4Lavado_de_sillones_cant_selector_piezaOtra"){
        $("#S4Lavado_de_sillones_cant_selector_piezaOtra").show();
    } else {
        $("#S4Lavado_de_sillones_cant_selector_piezaOtra").hide();
    }
})

function S4sillones_cantSelector(){
    $("#S4Lavado_de_sillones_cant_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_sillones_cant_selector");
        var tipoDeServicio = e1.options[e1.selectedIndex].value;
    
        if(tipoDeServicio == "S4Lavado_de_sillones_cant_selector_pieza1"){
            $("#S4Lavado_de_sillones_cant_selector_pieza1").show();
        } else {
            $("#S4Lavado_de_sillones_cant_selector_pieza1").hide();
        }
    
        if(tipoDeServicio == "S4Lavado_de_sillones_cant_selector_pieza2"){
            $("#S4Lavado_de_sillones_cant_selector_pieza2").show();
        } else {
            $("#S4Lavado_de_sillones_cant_selector_pieza2").hide();
        }
    
        if(tipoDeServicio == "S4Lavado_de_sillones_cant_selector_pieza3"){
            $("#S4Lavado_de_sillones_cant_selector_pieza3").show();
        } else {
            $("#S4Lavado_de_sillones_cant_selector_pieza3").hide();
        }
    
        if(tipoDeServicio == "S4Lavado_de_sillones_cant_selector_piezaOtra"){
            $("#S4Lavado_de_sillones_cant_selector_piezaOtra").show();
        } else {
            $("#S4Lavado_de_sillones_cant_selector_piezaOtra").hide();
        }
    })
}

window.addEventListener('change', S4sillones_cantSelector);

// Lavado de sillones
// S5Lavado_de_sillones
// S5Lavado_de_sillones_cant_selector
$("#S5Lavado_de_sillones_cant_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_sillones_cant_selector");
    var tipoDeServicio = e1.options[e1.selectedIndex].value;

    if(tipoDeServicio == "S5Lavado_de_sillones_cant_selector_pieza1"){
        $("#S5Lavado_de_sillones_cant_selector_pieza1").show();
    } else {
        $("#S5Lavado_de_sillones_cant_selector_pieza1").hide();
    }

    if(tipoDeServicio == "S5Lavado_de_sillones_cant_selector_pieza2"){
        $("#S5Lavado_de_sillones_cant_selector_pieza2").show();
    } else {
        $("#S5Lavado_de_sillones_cant_selector_pieza2").hide();
    }

    if(tipoDeServicio == "S5Lavado_de_sillones_cant_selector_pieza3"){
        $("#S5Lavado_de_sillones_cant_selector_pieza3").show();
    } else {
        $("#S5Lavado_de_sillones_cant_selector_pieza3").hide();
    }

    if(tipoDeServicio == "S5Lavado_de_sillones_cant_selector_piezaOtra"){
        $("#S5Lavado_de_sillones_cant_selector_piezaOtra").show();
    } else {
        $("#S5Lavado_de_sillones_cant_selector_piezaOtra").hide();
    }
})

function S5sillones_cantSelector(){
    $("#S5Lavado_de_sillones_cant_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_sillones_cant_selector");
        var tipoDeServicio = e1.options[e1.selectedIndex].value;
    
        if(tipoDeServicio == "S5Lavado_de_sillones_cant_selector_pieza1"){
            $("#S5Lavado_de_sillones_cant_selector_pieza1").show();
        } else {
            $("#S5Lavado_de_sillones_cant_selector_pieza1").hide();
        }
    
        if(tipoDeServicio == "S5Lavado_de_sillones_cant_selector_pieza2"){
            $("#S5Lavado_de_sillones_cant_selector_pieza2").show();
        } else {
            $("#S5Lavado_de_sillones_cant_selector_pieza2").hide();
        }
    
        if(tipoDeServicio == "S5Lavado_de_sillones_cant_selector_pieza3"){
            $("#S5Lavado_de_sillones_cant_selector_pieza3").show();
        } else {
            $("#S5Lavado_de_sillones_cant_selector_pieza3").hide();
        }
    
        if(tipoDeServicio == "S5Lavado_de_sillones_cant_selector_piezaOtra"){
            $("#S5Lavado_de_sillones_cant_selector_piezaOtra").show();
        } else {
            $("#S5Lavado_de_sillones_cant_selector_piezaOtra").hide();
        }
    })
}

window.addEventListener('change', S5sillones_cantSelector);

// Lavado de sillones
// S1Lavado_de_sillones
// S1Lavado_de_sillones_cant_selector_pieza1_type_selector
// Otro
$("#S1Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_sillones_cant_selector_pieza1_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
        $("#S1Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
    } else {
        $("#S1Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
    }
})

function S1sillonesPieza1Otro_cantSelector(){
    $("#S1Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_sillones_cant_selector_pieza1_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
            $("#S1Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
        } else {
            $("#S1Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S1sillonesPieza1Otro_cantSelector);

// Lavado de sillones
// S2Lavado_de_sillones
// S2Lavado_de_sillones_cant_selector_pieza1_type_selector
// Otro
$("#S2Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_sillones_cant_selector_pieza1_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
        $("#S2Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
    } else {
        $("#S2Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
    }
})

function S2sillonesPieza1Otro_cantSelector(){
    $("#S2Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_sillones_cant_selector_pieza1_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
            $("#S2Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
        } else {
            $("#S2Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S2sillonesPieza1Otro_cantSelector);

// Lavado de sillones
// S3Lavado_de_sillones
// S3Lavado_de_sillones_cant_selector_pieza1_type_selector
// Otro
$("#S3Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_sillones_cant_selector_pieza1_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
        $("#S3Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
    } else {
        $("#S3Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
    }
})

function S3sillonesPieza1Otro_cantSelector(){
    $("#S3Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_sillones_cant_selector_pieza1_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
            $("#S3Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
        } else {
            $("#S3Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S3sillonesPieza1Otro_cantSelector);

// Lavado de sillones
// S4Lavado_de_sillones
// S4Lavado_de_sillones_cant_selector_pieza1_type_selector
// Otro
$("#S4Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_sillones_cant_selector_pieza1_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
        $("#S4Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
    } else {
        $("#S4Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
    }
})

function S4sillonesPieza1Otro_cantSelector(){
    $("#S4Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_sillones_cant_selector_pieza1_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
            $("#S4Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
        } else {
            $("#S4Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S4sillonesPieza1Otro_cantSelector);

// Lavado de sillones
// S5Lavado_de_sillones
// S5Lavado_de_sillones_cant_selector_pieza1_type_selector
// Otro
$("#S5Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_sillones_cant_selector_pieza1_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
        $("#S5Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
    } else {
        $("#S5Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
    }
})

function S5sillonesPieza1Otro_cantSelector(){
    $("#S5Lavado_de_sillones_cant_selector_pieza1_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_sillones_cant_selector_pieza1_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro"){
            $("#S5Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").show();
        } else {
            $("#S5Lavado_de_sillones_cant_selector_pieza1_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S5sillonesPieza1Otro_cantSelector);

// Lavado de sillones
// S1Lavado_de_sillones
// S1Lavado_de_sillones_cant_selector_pieza2_type_selector
// Otro
$("#S1Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_sillones_cant_selector_pieza2_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
        $("#S1Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
    } else {
        $("#S1Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
    }
})

function S1sillonesPieza2Otro_cantSelector(){
    $("#S1Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_sillones_cant_selector_pieza2_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
            $("#S1Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
        } else {
            $("#S1Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S1sillonesPieza2Otro_cantSelector);

// Lavado de sillones
// S2Lavado_de_sillones
// S2Lavado_de_sillones_cant_selector_pieza2_type_selector
// Otro
$("#S2Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_sillones_cant_selector_pieza2_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
        $("#S2Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
    } else {
        $("#S2Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
    }
})

function S2sillonesPieza2Otro_cantSelector(){
    $("#S2Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_sillones_cant_selector_pieza2_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
            $("#S2Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
        } else {
            $("#S2Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S2sillonesPieza2Otro_cantSelector);

// Lavado de sillones
// S3Lavado_de_sillones
// S3Lavado_de_sillones_cant_selector_pieza2_type_selector
// Otro
$("#S3Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_sillones_cant_selector_pieza2_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
        $("#S3Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
    } else {
        $("#S3Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
    }
})

function S3sillonesPieza2Otro_cantSelector(){
    $("#S3Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_sillones_cant_selector_pieza2_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
            $("#S3Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
        } else {
            $("#S3Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S3sillonesPieza2Otro_cantSelector);

// Lavado de sillones
// S4Lavado_de_sillones
// S4Lavado_de_sillones_cant_selector_pieza2_type_selector
// Otro
$("#S4Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_sillones_cant_selector_pieza2_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
        $("#S4Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
    } else {
        $("#S4Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
    }
})

function S4sillonesPieza2Otro_cantSelector(){
    $("#S4Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_sillones_cant_selector_pieza2_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
            $("#S4Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
        } else {
            $("#S4Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S4sillonesPieza2Otro_cantSelector);

// Lavado de sillones
// S5Lavado_de_sillones
// S5Lavado_de_sillones_cant_selector_pieza2_type_selector
// Otro
$("#S5Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_sillones_cant_selector_pieza2_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
        $("#S5Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
    } else {
        $("#S5Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
    }
})

function S5sillonesPieza2Otro_cantSelector(){
    $("#S5Lavado_de_sillones_cant_selector_pieza2_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_sillones_cant_selector_pieza2_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro"){
            $("#S5Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").show();
        } else {
            $("#S5Lavado_de_sillones_cant_selector_pieza2_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S5sillonesPieza2Otro_cantSelector);

// Lavado de sillones
// S1Lavado_de_sillones
// S1Lavado_de_sillones_cant_selector_pieza3_type_selector
// Otro
$("#S1Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_sillones_cant_selector_pieza3_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
        $("#S1Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
    } else {
        $("#S1Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
    }
})

function S1sillonesPieza3Otro_cantSelector(){
    $("#S1Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_sillones_cant_selector_pieza3_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
            $("#S1Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
        } else {
            $("#S1Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S1sillonesPieza3Otro_cantSelector);

// Lavado de sillones
// S2Lavado_de_sillones
// S2Lavado_de_sillones_cant_selector_pieza3_type_selector
// Otro
$("#S2Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_sillones_cant_selector_pieza3_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
        $("#S2Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
    } else {
        $("#S2Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
    }
})

function S2sillonesPieza3Otro_cantSelector(){
    $("#S2Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_sillones_cant_selector_pieza3_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
            $("#S2Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
        } else {
            $("#S2Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S2sillonesPieza3Otro_cantSelector);

// Lavado de sillones
// S3Lavado_de_sillones
// S3Lavado_de_sillones_cant_selector_pieza3_type_selector
// Otro
$("#S3Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_sillones_cant_selector_pieza3_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
        $("#S3Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
    } else {
        $("#S3Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
    }
})

function S3sillonesPieza3Otro_cantSelector(){
    $("#S3Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_sillones_cant_selector_pieza3_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
            $("#S3Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
        } else {
            $("#S3Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S3sillonesPieza3Otro_cantSelector);

// Lavado de sillones
// S4Lavado_de_sillones
// S4Lavado_de_sillones_cant_selector_pieza3_type_selector
// Otro
$("#S4Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_sillones_cant_selector_pieza3_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
        $("#S4Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
    } else {
        $("#S4Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
    }
})

function S4sillonesPieza3Otro_cantSelector(){
    $("#S4Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_sillones_cant_selector_pieza3_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
            $("#S4Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
        } else {
            $("#S4Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S4sillonesPieza3Otro_cantSelector);

// Lavado de sillones
// S5Lavado_de_sillones
// S5Lavado_de_sillones_cant_selector_pieza3_type_selector
// Otro
$("#S5Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_sillones_cant_selector_pieza3_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
        $("#S5Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
    } else {
        $("#S5Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
    }
})

function S5sillonesPieza3Otro_cantSelector(){
    $("#S5Lavado_de_sillones_cant_selector_pieza3_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_sillones_cant_selector_pieza3_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro"){
            $("#S5Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").show();
        } else {
            $("#S5Lavado_de_sillones_cant_selector_pieza3_type_selector_asientoOtro").hide();
        }
    })
}

window.addEventListener('change', S5sillonesPieza3Otro_cantSelector);

// Lavado sillones 
// S2Lavado_de_sillones_cant_selector_piezaOtra
// Otro
function S1agregarCampos_sillones(){  
    $("#S1Lavado_de_sillones_cant_selector_piezaOtra .text").show();
    var number = document.getElementById("S1Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value;
    var container = document.getElementById("S1Lavado_de_sillones_cant_selector_piezaOtra_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S1Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "10";
        document.getElementById("S1Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "10";
    } else if (number < 3){
        number = 4;
        document.getElementById("S1Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "5";
        document.getElementById("S1Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Sillon " + (i+1) + ":  "));
        var input = document.createElement("input");
        input.type = "text";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

// Lavado sillones 
// S2Lavado_de_sillones_cant_selector_piezaOtra
// Otro
function S2agregarCampos_sillones(){  
    $("#S2Lavado_de_sillones_cant_selector_piezaOtra .text").show();
    var number = document.getElementById("S2Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value;
    var container = document.getElementById("S2Lavado_de_sillones_cant_selector_piezaOtra_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S2Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "10";
        document.getElementById("S2Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "10";
    } else if (number < 3){
        number = 4;
        document.getElementById("S2Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "5";
        document.getElementById("S2Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Sillon " + (i+1) + ":  "));
        var input = document.createElement("input");
        input.type = "text";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

// Lavado sillones 
// S3Lavado_de_sillones_cant_selector_piezaOtra
// Otro
function S3agregarCampos_sillones(){  
    $("#S3Lavado_de_sillones_cant_selector_piezaOtra .text").show();
    var number = document.getElementById("S3Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value;
    var container = document.getElementById("S3Lavado_de_sillones_cant_selector_piezaOtra_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S3Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "10";
        document.getElementById("S3Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "10";
    } else if (number < 3){
        number = 4;
        document.getElementById("S3Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "5";
        document.getElementById("S3Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Sillon " + (i+1) + ":  "));
        var input = document.createElement("input");
        input.type = "text";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

// Lavado sillones 
// S4Lavado_de_sillones_cant_selector_piezaOtra
// Otro
function S4agregarCampos_sillones(){  
    $("#S4Lavado_de_sillones_cant_selector_piezaOtra .text").show();
    var number = document.getElementById("S4Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value;
    var container = document.getElementById("S4Lavado_de_sillones_cant_selector_piezaOtra_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S4Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "10";
        document.getElementById("S4Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "10";
    } else if (number < 3){
        number = 4;
        document.getElementById("S4Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "5";
        document.getElementById("S4Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Sillon " + (i+1) + ":  "));
        var input = document.createElement("input");
        input.type = "text";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

// Lavado sillones 
// S5Lavado_de_sillones_cant_selector_piezaOtra
// Otro
function S5agregarCampos_sillones(){  
    $("#S5Lavado_de_sillones_cant_selector_piezaOtra .text").show();
    var number = document.getElementById("S5Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value;
    var container = document.getElementById("S5Lavado_de_sillones_cant_selector_piezaOtra_container");
    
    if(number > 10){
        number = 10;
        document.getElementById("S5Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "10";
        document.getElementById("S5Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "10";
    } else if (number < 3){
        number = 4;
        document.getElementById("S5Lavado_de_sillones_cant_selector_piezaOtra_cantServices").text = "5";
        document.getElementById("S5Lavado_de_sillones_cant_selector_piezaOtra_cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Sillon " + (i+1) + ":  "));
        var input = document.createElement("input");
        input.type = "text";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

/* ------------------------------------------------------------------------------------------------*/

// Lavado de sillas
// S1Lavado_de_sillas_tipo_selector
// Asiento
// Otro
$("#S1Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_sillas_tipo_selector_asiento"){
        $("#S1Lavado_de_sillas_tipo_selector_asiento").show();
    } else {
        $("#S1Lavado_de_sillas_tipo_selector_asiento").hide();
    }
})

function S1sillasAsientoOtro_cantSelector(){
    $("#S1Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_sillas_tipo_selector_asiento"){
            $("#S1Lavado_de_sillas_tipo_selector_asiento").show();
        } else {
            $("#S1Lavado_de_sillas_tipo_selector_asiento").hide();
        }
    })
}

window.addEventListener('change', S1sillasAsientoOtro_cantSelector);

// Lavado de sillas
// S2Lavado_de_sillas_tipo_selector
// Asiento
// Otro
$("#S2Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_sillas_tipo_selector_asiento"){
        $("#S2Lavado_de_sillas_tipo_selector_asiento").show();
    } else {
        $("#S2Lavado_de_sillas_tipo_selector_asiento").hide();
    }
})

function S2sillasAsientoOtro_cantSelector(){
    $("#S2Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_sillas_tipo_selector_asiento"){
            $("#S2Lavado_de_sillas_tipo_selector_asiento").show();
        } else {
            $("#S2Lavado_de_sillas_tipo_selector_asiento").hide();
        }
    })
}

window.addEventListener('change', S2sillasAsientoOtro_cantSelector);

// Lavado de sillas
// S3Lavado_de_sillas_tipo_selector
// Asiento
// Otro
$("#S3Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_sillas_tipo_selector_asiento"){
        $("#S3Lavado_de_sillas_tipo_selector_asiento").show();
    } else {
        $("#S3Lavado_de_sillas_tipo_selector_asiento").hide();
    }
})

function S3sillasAsientoOtro_cantSelector(){
    $("#S3Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_sillas_tipo_selector_asiento"){
            $("#S3Lavado_de_sillas_tipo_selector_asiento").show();
        } else {
            $("#S3Lavado_de_sillas_tipo_selector_asiento").hide();
        }
    })
}

window.addEventListener('change', S3sillasAsientoOtro_cantSelector);

// Lavado de sillas
// S4Lavado_de_sillas_tipo_selector
// Asiento
// Otro
$("#S4Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_sillas_tipo_selector_asiento"){
        $("#S4Lavado_de_sillas_tipo_selector_asiento").show();
    } else {
        $("#S4Lavado_de_sillas_tipo_selector_asiento").hide();
    }
})

function S4sillasAsientoOtro_cantSelector(){
    $("#S4Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_sillas_tipo_selector_asiento"){
            $("#S4Lavado_de_sillas_tipo_selector_asiento").show();
        } else {
            $("#S4Lavado_de_sillas_tipo_selector_asiento").hide();
        }
    })
}

window.addEventListener('change', S4sillasAsientoOtro_cantSelector);

// Lavado de sillas
// S5Lavado_de_sillas_tipo_selector
// Asiento
// Otro
$("#S5Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_sillas_tipo_selector_asiento"){
        $("#S5Lavado_de_sillas_tipo_selector_asiento").show();
    } else {
        $("#S5Lavado_de_sillas_tipo_selector_asiento").hide();
    }
})

function S5sillasAsientoOtro_cantSelector(){
    $("#S5Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_sillas_tipo_selector_asiento"){
            $("#S5Lavado_de_sillas_tipo_selector_asiento").show();
        } else {
            $("#S5Lavado_de_sillas_tipo_selector_asiento").hide();
        }
    })
}

window.addEventListener('change', S5sillasAsientoOtro_cantSelector);

// Lavado de sillas
// S1Lavado_de_sillas_tipo_selector
// Respaldo
// Otro
$("#S1Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_sillas_tipo_selector_respaldo"){
        $("#S1Lavado_de_sillas_tipo_selector_respaldo").show();
    } else {
        $("#S1Lavado_de_sillas_tipo_selector_respaldo").hide();
    }
})

function S1sillasRespaldoOtro_cantSelector(){
    $("#S1Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_sillas_tipo_selector_respaldo"){
            $("#S1Lavado_de_sillas_tipo_selector_respaldo").show();
        } else {
            $("#S1Lavado_de_sillas_tipo_selector_respaldo").hide();
        }
    })    
}

window.addEventListener('change', S1sillasRespaldoOtro_cantSelector);

// Lavado de sillas
// S2Lavado_de_sillas_tipo_selector
// Respaldo
// Otro
$("#S2Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_sillas_tipo_selector_respaldo"){
        $("#S2Lavado_de_sillas_tipo_selector_respaldo").show();
    } else {
        $("#S2Lavado_de_sillas_tipo_selector_respaldo").hide();
    }
})

function S2sillasRespaldoOtro_cantSelector(){
    $("#S2Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_sillas_tipo_selector_respaldo"){
            $("#S2Lavado_de_sillas_tipo_selector_respaldo").show();
        } else {
            $("#S2Lavado_de_sillas_tipo_selector_respaldo").hide();
        }
    })    
}

window.addEventListener('change', S2sillasRespaldoOtro_cantSelector);

// Lavado de sillas
// S3Lavado_de_sillas_tipo_selector
// Respaldo
// Otro
$("#S3Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_sillas_tipo_selector_respaldo"){
        $("#S3Lavado_de_sillas_tipo_selector_respaldo").show();
    } else {
        $("#S3Lavado_de_sillas_tipo_selector_respaldo").hide();
    }
})

function S3sillasRespaldoOtro_cantSelector(){
    $("#S3Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_sillas_tipo_selector_respaldo"){
            $("#S3Lavado_de_sillas_tipo_selector_respaldo").show();
        } else {
            $("#S3Lavado_de_sillas_tipo_selector_respaldo").hide();
        }
    })    
}

window.addEventListener('change', S3sillasRespaldoOtro_cantSelector);

// Lavado de sillas
// S4Lavado_de_sillas_tipo_selector
// Respaldo
// Otro
$("#S4Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_sillas_tipo_selector_respaldo"){
        $("#S4Lavado_de_sillas_tipo_selector_respaldo").show();
    } else {
        $("#S4Lavado_de_sillas_tipo_selector_respaldo").hide();
    }
})

function S4sillasRespaldoOtro_cantSelector(){
    $("#S4Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_sillas_tipo_selector_respaldo"){
            $("#S4Lavado_de_sillas_tipo_selector_respaldo").show();
        } else {
            $("#S4Lavado_de_sillas_tipo_selector_respaldo").hide();
        }
    })    
}

window.addEventListener('change', S4sillasRespaldoOtro_cantSelector);

// Lavado de sillas
// S5Lavado_de_sillas_tipo_selector
// Respaldo
// Otro
$("#S5Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_sillas_tipo_selector_respaldo"){
        $("#S5Lavado_de_sillas_tipo_selector_respaldo").show();
    } else {
        $("#S5Lavado_de_sillas_tipo_selector_respaldo").hide();
    }
})

function S5sillasRespaldoOtro_cantSelector(){
    $("#S5Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_sillas_tipo_selector_respaldo"){
            $("#S5Lavado_de_sillas_tipo_selector_respaldo").show();
        } else {
            $("#S5Lavado_de_sillas_tipo_selector_respaldo").hide();
        }
    })    
}

window.addEventListener('change', S5sillasRespaldoOtro_cantSelector);

// Lavado de sillas
// S1Lavado_de_sillas_tipo_selector
// Ambos
// Otro
$("#S1Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_sillas_tipo_selector_ambos"){
        $("#S1Lavado_de_sillas_tipo_selector_ambos").show();
    } else {
        $("#S1Lavado_de_sillas_tipo_selector_ambos").hide();
    }
})

function S1sillasAmbosOtro_cantSelector(){
    $("#S1Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_sillas_tipo_selector_ambos"){
            $("#S1Lavado_de_sillas_tipo_selector_ambos").show();
        } else {
            $("#S1Lavado_de_sillas_tipo_selector_ambos").hide();
        }
    })
}

window.addEventListener('change', S1sillasAmbosOtro_cantSelector);

// Lavado de sillas
// S2Lavado_de_sillas_tipo_selector
// Ambos
// Otro
$("#S2Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_sillas_tipo_selector_ambos"){
        $("#S2Lavado_de_sillas_tipo_selector_ambos").show();
    } else {
        $("#S2Lavado_de_sillas_tipo_selector_ambos").hide();
    }
})

function S2sillasAmbosOtro_cantSelector(){
    $("#S2Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_sillas_tipo_selector_ambos"){
            $("#S2Lavado_de_sillas_tipo_selector_ambos").show();
        } else {
            $("#S2Lavado_de_sillas_tipo_selector_ambos").hide();
        }
    })
}

window.addEventListener('change', S2sillasAmbosOtro_cantSelector);

// Lavado de sillas
// S3Lavado_de_sillas_tipo_selector
// Ambos
// Otro
$("#S3Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_sillas_tipo_selector_ambos"){
        $("#S3Lavado_de_sillas_tipo_selector_ambos").show();
    } else {
        $("#S3Lavado_de_sillas_tipo_selector_ambos").hide();
    }
})

function S3sillasAmbosOtro_cantSelector(){
    $("#S3Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_sillas_tipo_selector_ambos"){
            $("#S3Lavado_de_sillas_tipo_selector_ambos").show();
        } else {
            $("#S3Lavado_de_sillas_tipo_selector_ambos").hide();
        }
    })
}

window.addEventListener('change', S3sillasAmbosOtro_cantSelector);

// Lavado de sillas
// S4Lavado_de_sillas_tipo_selector
// Ambos
// Otro
$("#S4Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_sillas_tipo_selector_ambos"){
        $("#S4Lavado_de_sillas_tipo_selector_ambos").show();
    } else {
        $("#S4Lavado_de_sillas_tipo_selector_ambos").hide();
    }
})

function S4sillasAmbosOtro_cantSelector(){
    $("#S4Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_sillas_tipo_selector_ambos"){
            $("#S4Lavado_de_sillas_tipo_selector_ambos").show();
        } else {
            $("#S4Lavado_de_sillas_tipo_selector_ambos").hide();
        }
    })
}

window.addEventListener('change', S4sillasAmbosOtro_cantSelector);

// Lavado de sillas
// S5Lavado_de_sillas_tipo_selector
// Ambos
// Otro
$("#S5Lavado_de_sillas_tipo_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_sillas_tipo_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_sillas_tipo_selector_ambos"){
        $("#S5Lavado_de_sillas_tipo_selector_ambos").show();
    } else {
        $("#S5Lavado_de_sillas_tipo_selector_ambos").hide();
    }
})

function S5sillasAmbosOtro_cantSelector(){
    $("#S5Lavado_de_sillas_tipo_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_sillas_tipo_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_sillas_tipo_selector_ambos"){
            $("#S5Lavado_de_sillas_tipo_selector_ambos").show();
        } else {
            $("#S5Lavado_de_sillas_tipo_selector_ambos").hide();
        }
    })
}

window.addEventListener('change', S5sillasAmbosOtro_cantSelector);

/* ------------------------------------------------------------------------------------------------*/

// Lavado de colchones
// S1Lavado_de_colchones_type_selector
// Individual
$("#S1Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_colchones_type_selector_individual"){
        $("#S1Lavado_de_colchones_type_selector_individual").show();
    } else {
        $("#S1Lavado_de_colchones_type_selector_individual").hide();
    }
})

function S1colchonesIndividual_cantSelector(){
    $("#S1Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_colchones_type_selector_individual"){
            $("#S1Lavado_de_colchones_type_selector_individual").show();
        } else {
            $("#S1Lavado_de_colchones_type_selector_individual").hide();
        }
    })
}

window.addEventListener('change', S1colchonesIndividual_cantSelector);

// Lavado de colchones
// S2Lavado_de_colchones_type_selector
// Individual
$("#S2Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_colchones_type_selector_individual"){
        $("#S2Lavado_de_colchones_type_selector_individual").show();
    } else {
        $("#S2Lavado_de_colchones_type_selector_individual").hide();
    }
})

function S2colchonesIndividual_cantSelector(){
    $("#S2Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_colchones_type_selector_individual"){
            $("#S2Lavado_de_colchones_type_selector_individual").show();
        } else {
            $("#S2Lavado_de_colchones_type_selector_individual").hide();
        }
    })
}

window.addEventListener('change', S2colchonesIndividual_cantSelector);

// Lavado de colchones
// S3Lavado_de_colchones_type_selector
// Individual
$("#S3Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_colchones_type_selector_individual"){
        $("#S3Lavado_de_colchones_type_selector_individual").show();
    } else {
        $("#S3Lavado_de_colchones_type_selector_individual").hide();
    }
})

function S3colchonesIndividual_cantSelector(){
    $("#S3Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_colchones_type_selector_individual"){
            $("#S3Lavado_de_colchones_type_selector_individual").show();
        } else {
            $("#S3Lavado_de_colchones_type_selector_individual").hide();
        }
    })
}

window.addEventListener('change', S3colchonesIndividual_cantSelector);

// Lavado de colchones
// S4Lavado_de_colchones_type_selector
// Individual
$("#S4Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_colchones_type_selector_individual"){
        $("#S4Lavado_de_colchones_type_selector_individual").show();
    } else {
        $("#S4Lavado_de_colchones_type_selector_individual").hide();
    }
})

function S4colchonesIndividual_cantSelector(){
    $("#S4Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_colchones_type_selector_individual"){
            $("#S4Lavado_de_colchones_type_selector_individual").show();
        } else {
            $("#S4Lavado_de_colchones_type_selector_individual").hide();
        }
    })
}

window.addEventListener('change', S4colchonesIndividual_cantSelector);

// Lavado de colchones
// S5Lavado_de_colchones_type_selector
// Individual
$("#S5Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_colchones_type_selector_individual"){
        $("#S5Lavado_de_colchones_type_selector_individual").show();
    } else {
        $("#S5Lavado_de_colchones_type_selector_individual").hide();
    }
})

function S5colchonesIndividual_cantSelector(){
    $("#S5Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_colchones_type_selector_individual"){
            $("#S5Lavado_de_colchones_type_selector_individual").show();
        } else {
            $("#S5Lavado_de_colchones_type_selector_individual").hide();
        }
    })
}

window.addEventListener('change', S5colchonesIndividual_cantSelector);

// Lavado de colchones
// S1Lavado_de_colchones_type_selector
// Matrimonial
$("#S1Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_colchones_type_selector_matrimonial"){
        $("#S1Lavado_de_colchones_type_selector_matrimonial").show();
    } else {
        $("#S1Lavado_de_colchones_type_selector_matrimonial").hide();
    }
})

function S1colchonesMatrimonial_cantSelector(){
    $("#S1Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_colchones_type_selector_matrimonial"){
            $("#S1Lavado_de_colchones_type_selector_matrimonial").show();
        } else {
            $("#S1Lavado_de_colchones_type_selector_matrimonial").hide();
        }
    })
}

window.addEventListener('change', S1colchonesMatrimonial_cantSelector);

// Lavado de colchones
// S2Lavado_de_colchones_type_selector
// Matrimonial
$("#S2Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_colchones_type_selector_matrimonial"){
        $("#S2Lavado_de_colchones_type_selector_matrimonial").show();
    } else {
        $("#S2Lavado_de_colchones_type_selector_matrimonial").hide();
    }
})

function S2colchonesMatrimonial_cantSelector(){
    $("#S2Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_colchones_type_selector_matrimonial"){
            $("#S2Lavado_de_colchones_type_selector_matrimonial").show();
        } else {
            $("#S2Lavado_de_colchones_type_selector_matrimonial").hide();
        }
    })
}

window.addEventListener('change', S2colchonesMatrimonial_cantSelector);

// Lavado de colchones
// S3Lavado_de_colchones_type_selector
// Matrimonial
$("#S3Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_colchones_type_selector_matrimonial"){
        $("#S3Lavado_de_colchones_type_selector_matrimonial").show();
    } else {
        $("#S3Lavado_de_colchones_type_selector_matrimonial").hide();
    }
})

function S3colchonesMatrimonial_cantSelector(){
    $("#S3Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_colchones_type_selector_matrimonial"){
            $("#S3Lavado_de_colchones_type_selector_matrimonial").show();
        } else {
            $("#S3Lavado_de_colchones_type_selector_matrimonial").hide();
        }
    })
}

window.addEventListener('change', S3colchonesMatrimonial_cantSelector);

// Lavado de colchones
// S4Lavado_de_colchones_type_selector
// Matrimonial
$("#S4Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_colchones_type_selector_matrimonial"){
        $("#S4Lavado_de_colchones_type_selector_matrimonial").show();
    } else {
        $("#S4Lavado_de_colchones_type_selector_matrimonial").hide();
    }
})

function S4colchonesMatrimonial_cantSelector(){
    $("#S4Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_colchones_type_selector_matrimonial"){
            $("#S4Lavado_de_colchones_type_selector_matrimonial").show();
        } else {
            $("#S4Lavado_de_colchones_type_selector_matrimonial").hide();
        }
    })
}

window.addEventListener('change', S4colchonesMatrimonial_cantSelector);

// Lavado de colchones
// S5Lavado_de_colchones_type_selector
// Matrimonial
$("#S5Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_colchones_type_selector_matrimonial"){
        $("#S5Lavado_de_colchones_type_selector_matrimonial").show();
    } else {
        $("#S5Lavado_de_colchones_type_selector_matrimonial").hide();
    }
})

function S5colchonesMatrimonial_cantSelector(){
    $("#S5Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_colchones_type_selector_matrimonial"){
            $("#S5Lavado_de_colchones_type_selector_matrimonial").show();
        } else {
            $("#S5Lavado_de_colchones_type_selector_matrimonial").hide();
        }
    })
}

window.addEventListener('change', S5colchonesMatrimonial_cantSelector);

// Lavado de colchones
// S1Lavado_de_colchones_type_selector
// Queen
$("#S1Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_colchones_type_selector_queen"){
        $("#S1Lavado_de_colchones_type_selector_queen").show();
    } else {
        $("#S1Lavado_de_colchones_type_selector_queen").hide();
    }
})

function S1colchonesQueen_cantSelector(){
    $("#S1Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_colchones_type_selector_queen"){
            $("#S1Lavado_de_colchones_type_selector_queen").show();
        } else {
            $("#S1Lavado_de_colchones_type_selector_queen").hide();
        }
    })
}

window.addEventListener('change', S1colchonesQueen_cantSelector);

// Lavado de colchones
// S2Lavado_de_colchones_type_selector
// Queen
$("#S2Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_colchones_type_selector_queen"){
        $("#S2Lavado_de_colchones_type_selector_queen").show();
    } else {
        $("#S2Lavado_de_colchones_type_selector_queen").hide();
    }
})

function S2colchonesQueen_cantSelector(){
    $("#S2Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_colchones_type_selector_queen"){
            $("#S2Lavado_de_colchones_type_selector_queen").show();
        } else {
            $("#S2Lavado_de_colchones_type_selector_queen").hide();
        }
    })
}

window.addEventListener('change', S2colchonesQueen_cantSelector);

// Lavado de colchones
// S3Lavado_de_colchones_type_selector
// Queen
$("#S3Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_colchones_type_selector_queen"){
        $("#S3Lavado_de_colchones_type_selector_queen").show();
    } else {
        $("#S3Lavado_de_colchones_type_selector_queen").hide();
    }
})

function S3colchonesQueen_cantSelector(){
    $("#S3Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_colchones_type_selector_queen"){
            $("#S3Lavado_de_colchones_type_selector_queen").show();
        } else {
            $("#S3Lavado_de_colchones_type_selector_queen").hide();
        }
    })
}

window.addEventListener('change', S3colchonesQueen_cantSelector);

// Lavado de colchones
// S4Lavado_de_colchones_type_selector
// Queen
$("#S4Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_colchones_type_selector_queen"){
        $("#S4Lavado_de_colchones_type_selector_queen").show();
    } else {
        $("#S4Lavado_de_colchones_type_selector_queen").hide();
    }
})

function S4colchonesQueen_cantSelector(){
    $("#S4Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_colchones_type_selector_queen"){
            $("#S4Lavado_de_colchones_type_selector_queen").show();
        } else {
            $("#S4Lavado_de_colchones_type_selector_queen").hide();
        }
    })
}

window.addEventListener('change', S4colchonesQueen_cantSelector);

// Lavado de colchones
// S5Lavado_de_colchones_type_selector
// Queen
$("#S5Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_colchones_type_selector_queen"){
        $("#S5Lavado_de_colchones_type_selector_queen").show();
    } else {
        $("#S5Lavado_de_colchones_type_selector_queen").hide();
    }
})

function S5colchonesQueen_cantSelector(){
    $("#S5Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_colchones_type_selector_queen"){
            $("#S5Lavado_de_colchones_type_selector_queen").show();
        } else {
            $("#S5Lavado_de_colchones_type_selector_queen").hide();
        }
    })
}

window.addEventListener('change', S5colchonesQueen_cantSelector);

// Lavado de colchones
// S1Lavado_de_colchones_type_selector
// King
$("#S1Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_colchones_type_selector_king"){
        $("#S1Lavado_de_colchones_type_selector_king").show();
    } else {
        $("#S1Lavado_de_colchones_type_selector_king").hide();
    }
})

function S1colchonesKing_cantSelector(){
    $("#S1Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_colchones_type_selector_king"){
            $("#S1Lavado_de_colchones_type_selector_king").show();
        } else {
            $("#S1Lavado_de_colchones_type_selector_king").hide();
        }
    })
}

window.addEventListener('change', S1colchonesKing_cantSelector);

// Lavado de colchones
// S2Lavado_de_colchones_type_selector
// King
$("#S2Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_colchones_type_selector_king"){
        $("#S2Lavado_de_colchones_type_selector_king").show();
    } else {
        $("#S2Lavado_de_colchones_type_selector_king").hide();
    }
})

function S2colchonesKing_cantSelector(){
    $("#S2Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_colchones_type_selector_king"){
            $("#S2Lavado_de_colchones_type_selector_king").show();
        } else {
            $("#S2Lavado_de_colchones_type_selector_king").hide();
        }
    })
}

window.addEventListener('change', S2colchonesKing_cantSelector);

// Lavado de colchones
// S3Lavado_de_colchones_type_selector
// King
$("#S3Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_colchones_type_selector_king"){
        $("#S3Lavado_de_colchones_type_selector_king").show();
    } else {
        $("#S3Lavado_de_colchones_type_selector_king").hide();
    }
})

function S3colchonesKing_cantSelector(){
    $("#S3Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_colchones_type_selector_king"){
            $("#S3Lavado_de_colchones_type_selector_king").show();
        } else {
            $("#S3Lavado_de_colchones_type_selector_king").hide();
        }
    })
}

window.addEventListener('change', S3colchonesKing_cantSelector);

// Lavado de colchones
// S4Lavado_de_colchones_type_selector
// King
$("#S4Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_colchones_type_selector_king"){
        $("#S4Lavado_de_colchones_type_selector_king").show();
    } else {
        $("#S4Lavado_de_colchones_type_selector_king").hide();
    }
})

function S4colchonesKing_cantSelector(){
    $("#S4Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_colchones_type_selector_king"){
            $("#S4Lavado_de_colchones_type_selector_king").show();
        } else {
            $("#S4Lavado_de_colchones_type_selector_king").hide();
        }
    })
}

window.addEventListener('change', S4colchonesKing_cantSelector);

// Lavado de colchones
// S5Lavado_de_colchones_type_selector
// King
$("#S5Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_colchones_type_selector_king"){
        $("#S5Lavado_de_colchones_type_selector_king").show();
    } else {
        $("#S5Lavado_de_colchones_type_selector_king").hide();
    }
})

function S5colchonesKing_cantSelector(){
    $("#S5Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_colchones_type_selector_king"){
            $("#S5Lavado_de_colchones_type_selector_king").show();
        } else {
            $("#S5Lavado_de_colchones_type_selector_king").hide();
        }
    })
}

window.addEventListener('change', S5colchonesKing_cantSelector);

// Lavado de colchones
// S1Lavado_de_colchones_type_selector
// California King
$("#S1Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_colchones_type_selector_calKing"){
        $("#S1Lavado_de_colchones_type_selector_calKing").show();
    } else {
        $("#S1Lavado_de_colchones_type_selector_calKing").hide();
    }
})

function S1colchonesCKing_cantSelector(){
    $("#S1Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_colchones_type_selector_calKing"){
            $("#S1Lavado_de_colchones_type_selector_calKing").show();
        } else {
            $("#S1Lavado_de_colchones_type_selector_calKing").hide();
        }
    })
}

window.addEventListener('change', S1colchonesCKing_cantSelector);

// Lavado de colchones
// S2Lavado_de_colchones_type_selector
// California King
$("#S2Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_colchones_type_selector_calKing"){
        $("#S2Lavado_de_colchones_type_selector_calKing").show();
    } else {
        $("#S2Lavado_de_colchones_type_selector_calKing").hide();
    }
})

function S2colchonesCKing_cantSelector(){
    $("#S2Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_colchones_type_selector_calKing"){
            $("#S2Lavado_de_colchones_type_selector_calKing").show();
        } else {
            $("#S2Lavado_de_colchones_type_selector_calKing").hide();
        }
    })
}

window.addEventListener('change', S2colchonesCKing_cantSelector);

// Lavado de colchones
// S3Lavado_de_colchones_type_selector
// California King
$("#S3Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_colchones_type_selector_calKing"){
        $("#S3Lavado_de_colchones_type_selector_calKing").show();
    } else {
        $("#S3Lavado_de_colchones_type_selector_calKing").hide();
    }
})

function S3colchonesCKing_cantSelector(){
    $("#S3Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_colchones_type_selector_calKing"){
            $("#S3Lavado_de_colchones_type_selector_calKing").show();
        } else {
            $("#S3Lavado_de_colchones_type_selector_calKing").hide();
        }
    })
}

window.addEventListener('change', S3colchonesCKing_cantSelector);

// Lavado de colchones
// S4Lavado_de_colchones_type_selector
// California King
$("#S4Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_colchones_type_selector_calKing"){
        $("#S4Lavado_de_colchones_type_selector_calKing").show();
    } else {
        $("#S4Lavado_de_colchones_type_selector_calKing").hide();
    }
})

function S4colchonesCKing_cantSelector(){
    $("#S4Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_colchones_type_selector_calKing"){
            $("#S4Lavado_de_colchones_type_selector_calKing").show();
        } else {
            $("#S4Lavado_de_colchones_type_selector_calKing").hide();
        }
    })
}

window.addEventListener('change', S4colchonesCKing_cantSelector);

// Lavado de colchones
// S5Lavado_de_colchones_type_selector
// California King
$("#S5Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_colchones_type_selector_calKing"){
        $("#S5Lavado_de_colchones_type_selector_calKing").show();
    } else {
        $("#S5Lavado_de_colchones_type_selector_calKing").hide();
    }
})

function S5colchonesCKing_cantSelector(){
    $("#S5Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_colchones_type_selector_calKing"){
            $("#S5Lavado_de_colchones_type_selector_calKing").show();
        } else {
            $("#S5Lavado_de_colchones_type_selector_calKing").hide();
        }
    })
}

window.addEventListener('change', S5colchonesCKing_cantSelector);

// Lavado de colchones
// S1Lavado_de_colchones_type_selector
// Sofa cama
$("#S1Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_colchones_type_selector_sofaCama"){
        $("#S1Lavado_de_colchones_type_selector_sofaCama").show();
    } else {
        $("#S1Lavado_de_colchones_type_selector_sofaCama").hide();
    }
})

function S1colchonesSCama_cantSelector(){
    $("#S1Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_colchones_type_selector_sofaCama"){
            $("#S1Lavado_de_colchones_type_selector_sofaCama").show();
        } else {
            $("#S1Lavado_de_colchones_type_selector_sofaCama").hide();
        }
    })
}

window.addEventListener('change', S1colchonesSCama_cantSelector);

// Lavado de colchones
// S2Lavado_de_colchones_type_selector
// Sofa cama
$("#S2Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_colchones_type_selector_sofaCama"){
        $("#S2Lavado_de_colchones_type_selector_sofaCama").show();
    } else {
        $("#S2Lavado_de_colchones_type_selector_sofaCama").hide();
    }
})

function S2colchonesSCama_cantSelector(){
    $("#S2Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_colchones_type_selector_sofaCama"){
            $("#S2Lavado_de_colchones_type_selector_sofaCama").show();
        } else {
            $("#S2Lavado_de_colchones_type_selector_sofaCama").hide();
        }
    })
}

window.addEventListener('change', S2colchonesSCama_cantSelector);

// Lavado de colchones
// S3Lavado_de_colchones_type_selector
// Sofa cama
$("#S3Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_colchones_type_selector_sofaCama"){
        $("#S3Lavado_de_colchones_type_selector_sofaCama").show();
    } else {
        $("#S3Lavado_de_colchones_type_selector_sofaCama").hide();
    }
})

function S3colchonesSCama_cantSelector(){
    $("#S3Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_colchones_type_selector_sofaCama"){
            $("#S3Lavado_de_colchones_type_selector_sofaCama").show();
        } else {
            $("#S3Lavado_de_colchones_type_selector_sofaCama").hide();
        }
    })
}

window.addEventListener('change', S3colchonesSCama_cantSelector);

// Lavado de colchones
// S4Lavado_de_colchones_type_selector
// Sofa cama
$("#S4Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_colchones_type_selector_sofaCama"){
        $("#S4Lavado_de_colchones_type_selector_sofaCama").show();
    } else {
        $("#S4Lavado_de_colchones_type_selector_sofaCama").hide();
    }
})

function S4colchonesSCama_cantSelector(){
    $("#S4Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_colchones_type_selector_sofaCama"){
            $("#S4Lavado_de_colchones_type_selector_sofaCama").show();
        } else {
            $("#S4Lavado_de_colchones_type_selector_sofaCama").hide();
        }
    })
}

window.addEventListener('change', S4colchonesSCama_cantSelector);

// Lavado de colchones
// S5Lavado_de_colchones_type_selector
// Sofa cama
$("#S5Lavado_de_colchones_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_colchones_type_selector_sofaCama"){
        $("#S5Lavado_de_colchones_type_selector_sofaCama").show();
    } else {
        $("#S5Lavado_de_colchones_type_selector_sofaCama").hide();
    }
})

function S5colchonesSCama_cantSelector(){
    $("#S5Lavado_de_colchones_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_colchones_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_colchones_type_selector_sofaCama"){
            $("#S5Lavado_de_colchones_type_selector_sofaCama").show();
        } else {
            $("#S5Lavado_de_colchones_type_selector_sofaCama").hide();
        }
    })
}

window.addEventListener('change', S5colchonesSCama_cantSelector);

/* ------------------------------------------------------------------------------------------------*/

// Lavado de auto
// S1Lavado_de_int_de_autos_type_selector
// Chico
$("#S1Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_int_de_autos_type_selector_chico"){
        $("#S1Lavado_de_int_de_autos_type_selector_chico").show();
    } else {
        $("#S1Lavado_de_int_de_autos_type_selector_chico").hide();
    }
})

function S1autoChico_cantSelector(){
    $("#S1Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_int_de_autos_type_selector_chico"){
            $("#S1Lavado_de_int_de_autos_type_selector_chico").show();
        } else {
            $("#S1Lavado_de_int_de_autos_type_selector_chico").hide();
        }
    })
    
}

window.addEventListener('change', S1autoChico_cantSelector);

// Lavado de auto
// S2Lavado_de_int_de_autos_type_selector
// Chico
$("#S2Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_int_de_autos_type_selector_chico"){
        $("#S2Lavado_de_int_de_autos_type_selector_chico").show();
    } else {
        $("#S2Lavado_de_int_de_autos_type_selector_chico").hide();
    }
})

function S2autoChico_cantSelector(){
    $("#S2Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_int_de_autos_type_selector_chico"){
            $("#S2Lavado_de_int_de_autos_type_selector_chico").show();
        } else {
            $("#S2Lavado_de_int_de_autos_type_selector_chico").hide();
        }
    })
    
}

window.addEventListener('change', S2autoChico_cantSelector);

// Lavado de auto
// S3Lavado_de_int_de_autos_type_selector
// Chico
$("#S3Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_int_de_autos_type_selector_chico"){
        $("#S3Lavado_de_int_de_autos_type_selector_chico").show();
    } else {
        $("#S3Lavado_de_int_de_autos_type_selector_chico").hide();
    }
})

function S3autoChico_cantSelector(){
    $("#S3Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_int_de_autos_type_selector_chico"){
            $("#S3Lavado_de_int_de_autos_type_selector_chico").show();
        } else {
            $("#S3Lavado_de_int_de_autos_type_selector_chico").hide();
        }
    })
    
}

window.addEventListener('change', S3autoChico_cantSelector);

// Lavado de auto
// S4Lavado_de_int_de_autos_type_selector
// Chico
$("#S4Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_int_de_autos_type_selector_chico"){
        $("#S4Lavado_de_int_de_autos_type_selector_chico").show();
    } else {
        $("#S4Lavado_de_int_de_autos_type_selector_chico").hide();
    }
})

function S4autoChico_cantSelector(){
    $("#S4Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_int_de_autos_type_selector_chico"){
            $("#S4Lavado_de_int_de_autos_type_selector_chico").show();
        } else {
            $("#S4Lavado_de_int_de_autos_type_selector_chico").hide();
        }
    })
    
}

window.addEventListener('change', S4autoChico_cantSelector);

// Lavado de auto
// S5Lavado_de_int_de_autos_type_selector
// Chico
$("#S5Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_int_de_autos_type_selector_chico"){
        $("#S5Lavado_de_int_de_autos_type_selector_chico").show();
    } else {
        $("#S5Lavado_de_int_de_autos_type_selector_chico").hide();
    }
})

function S5autoChico_cantSelector(){
    $("#S5Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_int_de_autos_type_selector_chico"){
            $("#S5Lavado_de_int_de_autos_type_selector_chico").show();
        } else {
            $("#S5Lavado_de_int_de_autos_type_selector_chico").hide();
        }
    })
    
}

window.addEventListener('change', S5autoChico_cantSelector);

// Lavado de auto
// S1Lavado_de_int_de_autos_type_selector
// Regular
$("#S1Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_int_de_autos_type_selector_regular"){
        $("#S1Lavado_de_int_de_autos_type_selector_regular").show();
    } else {
        $("#S1Lavado_de_int_de_autos_type_selector_regular").hide();
    }
})

function S1autoRegular_cantSelector(){
    $("#S1Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_int_de_autos_type_selector_regular"){
            $("#S1Lavado_de_int_de_autos_type_selector_regular").show();
        } else {
            $("#S1Lavado_de_int_de_autos_type_selector_regular").hide();
        }
    })
}

window.addEventListener('change', S1autoRegular_cantSelector);

// Lavado de auto
// S2Lavado_de_int_de_autos_type_selector
// Regular
$("#S2Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_int_de_autos_type_selector_regular"){
        $("#S2Lavado_de_int_de_autos_type_selector_regular").show();
    } else {
        $("#S2Lavado_de_int_de_autos_type_selector_regular").hide();
    }
})

function S2autoRegular_cantSelector(){
    $("#S2Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_int_de_autos_type_selector_regular"){
            $("#S2Lavado_de_int_de_autos_type_selector_regular").show();
        } else {
            $("#S2Lavado_de_int_de_autos_type_selector_regular").hide();
        }
    })
}

window.addEventListener('change', S2autoRegular_cantSelector);

// Lavado de auto
// S3Lavado_de_int_de_autos_type_selector
// Regular
$("#S3Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_int_de_autos_type_selector_regular"){
        $("#S3Lavado_de_int_de_autos_type_selector_regular").show();
    } else {
        $("#S3Lavado_de_int_de_autos_type_selector_regular").hide();
    }
})

function S3autoRegular_cantSelector(){
    $("#S3Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_int_de_autos_type_selector_regular"){
            $("#S3Lavado_de_int_de_autos_type_selector_regular").show();
        } else {
            $("#S3Lavado_de_int_de_autos_type_selector_regular").hide();
        }
    })
}

window.addEventListener('change', S3autoRegular_cantSelector);

// Lavado de auto
// S4Lavado_de_int_de_autos_type_selector
// Regular
$("#S4Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_int_de_autos_type_selector_regular"){
        $("#S4Lavado_de_int_de_autos_type_selector_regular").show();
    } else {
        $("#S4Lavado_de_int_de_autos_type_selector_regular").hide();
    }
})

function S4autoRegular_cantSelector(){
    $("#S4Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_int_de_autos_type_selector_regular"){
            $("#S4Lavado_de_int_de_autos_type_selector_regular").show();
        } else {
            $("#S4Lavado_de_int_de_autos_type_selector_regular").hide();
        }
    })
}

window.addEventListener('change', S4autoRegular_cantSelector);

// Lavado de auto
// S5Lavado_de_int_de_autos_type_selector
// Regular
$("#S5Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_int_de_autos_type_selector_regular"){
        $("#S5Lavado_de_int_de_autos_type_selector_regular").show();
    } else {
        $("#S5Lavado_de_int_de_autos_type_selector_regular").hide();
    }
})

function S5autoRegular_cantSelector(){
    $("#S5Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_int_de_autos_type_selector_regular"){
            $("#S5Lavado_de_int_de_autos_type_selector_regular").show();
        } else {
            $("#S5Lavado_de_int_de_autos_type_selector_regular").hide();
        }
    })
}

window.addEventListener('change', S5autoRegular_cantSelector);

// Lavado de auto
// S1Lavado_de_int_de_autos_type_selector
// Grande
$("#S1Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_int_de_autos_type_selector_grande"){
        $("#S1Lavado_de_int_de_autos_type_selector_grande").show();
    } else {
        $("#S1Lavado_de_int_de_autos_type_selector_grande").hide();
    }
})

function S1autoGrande_cantSelector(){
    $("#S1Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_int_de_autos_type_selector_grande"){
            $("#S1Lavado_de_int_de_autos_type_selector_grande").show();
        } else {
            $("#S1Lavado_de_int_de_autos_type_selector_grande").hide();
        }
    })
}

window.addEventListener('change', S1autoGrande_cantSelector);

// Lavado de auto
// S2Lavado_de_int_de_autos_type_selector
// Grande
$("#S2Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_int_de_autos_type_selector_grande"){
        $("#S2Lavado_de_int_de_autos_type_selector_grande").show();
    } else {
        $("#S2Lavado_de_int_de_autos_type_selector_grande").hide();
    }
})

function S2autoGrande_cantSelector(){
    $("#S2Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_int_de_autos_type_selector_grande"){
            $("#S2Lavado_de_int_de_autos_type_selector_grande").show();
        } else {
            $("#S2Lavado_de_int_de_autos_type_selector_grande").hide();
        }
    })
}

window.addEventListener('change', S2autoGrande_cantSelector);

// Lavado de auto
// S3Lavado_de_int_de_autos_type_selector
// Grande
$("#S3Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_int_de_autos_type_selector_grande"){
        $("#S3Lavado_de_int_de_autos_type_selector_grande").show();
    } else {
        $("#S3Lavado_de_int_de_autos_type_selector_grande").hide();
    }
})

function S3autoGrande_cantSelector(){
    $("#S3Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_int_de_autos_type_selector_grande"){
            $("#S3Lavado_de_int_de_autos_type_selector_grande").show();
        } else {
            $("#S3Lavado_de_int_de_autos_type_selector_grande").hide();
        }
    })
}

window.addEventListener('change', S3autoGrande_cantSelector);

// Lavado de auto
// S4Lavado_de_int_de_autos_type_selector
// Grande
$("#S4Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_int_de_autos_type_selector_grande"){
        $("#S4Lavado_de_int_de_autos_type_selector_grande").show();
    } else {
        $("#S4Lavado_de_int_de_autos_type_selector_grande").hide();
    }
})

function S4autoGrande_cantSelector(){
    $("#S4Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_int_de_autos_type_selector_grande"){
            $("#S4Lavado_de_int_de_autos_type_selector_grande").show();
        } else {
            $("#S4Lavado_de_int_de_autos_type_selector_grande").hide();
        }
    })
}

window.addEventListener('change', S4autoGrande_cantSelector);

// Lavado de auto
// S5Lavado_de_int_de_autos_type_selector
// Grande
$("#S5Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_int_de_autos_type_selector_grande"){
        $("#S5Lavado_de_int_de_autos_type_selector_grande").show();
    } else {
        $("#S5Lavado_de_int_de_autos_type_selector_grande").hide();
    }
})

function S5autoGrande_cantSelector(){
    $("#S5Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_int_de_autos_type_selector_grande"){
            $("#S5Lavado_de_int_de_autos_type_selector_grande").show();
        } else {
            $("#S5Lavado_de_int_de_autos_type_selector_grande").hide();
        }
    })
}

window.addEventListener('change', S5autoGrande_cantSelector);

// Lavado de auto
// S1Lavado_de_int_de_autos_type_selector
// Extra grande 
$("#S1Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_int_de_autos_type_selector_extraGrande"){
        $("#S1Lavado_de_int_de_autos_type_selector_extraGrande").show();
    } else {
        $("#S1Lavado_de_int_de_autos_type_selector_extraGrande").hide();
    }
})

function S1autoEGrande_cantSelector(){
    $("#S1Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_int_de_autos_type_selector_extraGrande"){
            $("#S1Lavado_de_int_de_autos_type_selector_extraGrande").show();
        } else {
            $("#S1Lavado_de_int_de_autos_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S1autoEGrande_cantSelector);

// Lavado de auto
// S2Lavado_de_int_de_autos_type_selector
// Extra grande 
$("#S2Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_int_de_autos_type_selector_extraGrande"){
        $("#S2Lavado_de_int_de_autos_type_selector_extraGrande").show();
    } else {
        $("#S2Lavado_de_int_de_autos_type_selector_extraGrande").hide();
    }
})

function S2autoEGrande_cantSelector(){
    $("#S2Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_int_de_autos_type_selector_extraGrande"){
            $("#S2Lavado_de_int_de_autos_type_selector_extraGrande").show();
        } else {
            $("#S2Lavado_de_int_de_autos_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S2autoEGrande_cantSelector);

// Lavado de auto
// S3Lavado_de_int_de_autos_type_selector
// Extra grande 
$("#S3Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_int_de_autos_type_selector_extraGrande"){
        $("#S3Lavado_de_int_de_autos_type_selector_extraGrande").show();
    } else {
        $("#S3Lavado_de_int_de_autos_type_selector_extraGrande").hide();
    }
})

function S3autoEGrande_cantSelector(){
    $("#S3Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_int_de_autos_type_selector_extraGrande"){
            $("#S3Lavado_de_int_de_autos_type_selector_extraGrande").show();
        } else {
            $("#S3Lavado_de_int_de_autos_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S3autoEGrande_cantSelector);

// Lavado de auto
// S4Lavado_de_int_de_autos_type_selector
// Extra grande 
$("#S4Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_int_de_autos_type_selector_extraGrande"){
        $("#S4Lavado_de_int_de_autos_type_selector_extraGrande").show();
    } else {
        $("#S4Lavado_de_int_de_autos_type_selector_extraGrande").hide();
    }
})

function S4autoEGrande_cantSelector(){
    $("#S4Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_int_de_autos_type_selector_extraGrande"){
            $("#S4Lavado_de_int_de_autos_type_selector_extraGrande").show();
        } else {
            $("#S4Lavado_de_int_de_autos_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S4autoEGrande_cantSelector);

// Lavado de auto
// S5Lavado_de_int_de_autos_type_selector
// Extra grande 
$("#S5Lavado_de_int_de_autos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_int_de_autos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_int_de_autos_type_selector_extraGrande"){
        $("#S5Lavado_de_int_de_autos_type_selector_extraGrande").show();
    } else {
        $("#S5Lavado_de_int_de_autos_type_selector_extraGrande").hide();
    }
})

function S5autoEGrande_cantSelector(){
    $("#S5Lavado_de_int_de_autos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_int_de_autos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_int_de_autos_type_selector_extraGrande"){
            $("#S5Lavado_de_int_de_autos_type_selector_extraGrande").show();
        } else {
            $("#S5Lavado_de_int_de_autos_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S5autoEGrande_cantSelector);

/* ------------------------------------------------------------------------------------------------*/

// Lavado de piso
// S1Lavado_de_pisos_type_selector
// Ceramica 
$("#S1Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_pisos_type_selector_pisoCeramica"){
        $("#S1Lavado_de_pisos_type_selector_pisoCeramica").show();
    } else {
        $("#S1Lavado_de_pisos_type_selector_pisoCeramica").hide();
    }
})

function S1LavadoPisoCeramica_cantSelector(){
    $("#S1Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_pisos_type_selector_pisoCeramica"){
            $("#S1Lavado_de_pisos_type_selector_pisoCeramica").show();
        } else {
            $("#S1Lavado_de_pisos_type_selector_pisoCeramica").hide();
        }
    })
}

window.addEventListener('change', S1LavadoPisoCeramica_cantSelector);

// Lavado de piso
// S2Lavado_de_pisos_type_selector
// Ceramica 
$("#S2Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_pisos_type_selector_pisoCeramica"){
        $("#S2Lavado_de_pisos_type_selector_pisoCeramica").show();
    } else {
        $("#S2Lavado_de_pisos_type_selector_pisoCeramica").hide();
    }
})

function S2LavadoPisoCeramica_cantSelector(){
    $("#S2Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_pisos_type_selector_pisoCeramica"){
            $("#S2Lavado_de_pisos_type_selector_pisoCeramica").show();
        } else {
            $("#S2Lavado_de_pisos_type_selector_pisoCeramica").hide();
        }
    })
}

window.addEventListener('change', S2LavadoPisoCeramica_cantSelector);

// Lavado de piso
// S3Lavado_de_pisos_type_selector
// Ceramica 
$("#S3Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_pisos_type_selector_pisoCeramica"){
        $("#S3Lavado_de_pisos_type_selector_pisoCeramica").show();
    } else {
        $("#S3Lavado_de_pisos_type_selector_pisoCeramica").hide();
    }
})

function S3LavadoPisoCeramica_cantSelector(){
    $("#S3Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_pisos_type_selector_pisoCeramica"){
            $("#S3Lavado_de_pisos_type_selector_pisoCeramica").show();
        } else {
            $("#S3Lavado_de_pisos_type_selector_pisoCeramica").hide();
        }
    })
}

window.addEventListener('change', S3LavadoPisoCeramica_cantSelector);

// Lavado de piso
// S4Lavado_de_pisos_type_selector
// Ceramica 
$("#S4Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_pisos_type_selector_pisoCeramica"){
        $("#S4Lavado_de_pisos_type_selector_pisoCeramica").show();
    } else {
        $("#S4Lavado_de_pisos_type_selector_pisoCeramica").hide();
    }
})

function S4LavadoPisoCeramica_cantSelector(){
    $("#S4Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_pisos_type_selector_pisoCeramica"){
            $("#S4Lavado_de_pisos_type_selector_pisoCeramica").show();
        } else {
            $("#S4Lavado_de_pisos_type_selector_pisoCeramica").hide();
        }
    })
}

window.addEventListener('change', S4LavadoPisoCeramica_cantSelector);

// Lavado de piso
// S5Lavado_de_pisos_type_selector
// Ceramica 
$("#S5Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_pisos_type_selector_pisoCeramica"){
        $("#S5Lavado_de_pisos_type_selector_pisoCeramica").show();
    } else {
        $("#S5Lavado_de_pisos_type_selector_pisoCeramica").hide();
    }
})

function S5LavadoPisoCeramica_cantSelector(){
    $("#S5Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_pisos_type_selector_pisoCeramica"){
            $("#S5Lavado_de_pisos_type_selector_pisoCeramica").show();
        } else {
            $("#S5Lavado_de_pisos_type_selector_pisoCeramica").hide();
        }
    })
}

window.addEventListener('change', S5LavadoPisoCeramica_cantSelector);

// Lavado de piso
// S1Lavado_de_pisos_type_selector
// Liso
$("#S1Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_pisos_type_selector_pisoLiso"){
        $("#S1Lavado_de_pisos_type_selector_pisoLiso").show();
    } else {
        $("#S1Lavado_de_pisos_type_selector_pisoLiso").hide();
    }
})

function S1LavadoPisoLiso_cantSelector(){
    $("#S1Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_pisos_type_selector_pisoLiso"){
            $("#S1Lavado_de_pisos_type_selector_pisoLiso").show();
        } else {
            $("#S1Lavado_de_pisos_type_selector_pisoLiso").hide();
        }
    })
}

window.addEventListener('change', S1LavadoPisoLiso_cantSelector);

// Lavado de piso
// S2Lavado_de_pisos_type_selector
// Liso
$("#S2Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_pisos_type_selector_pisoLiso"){
        $("#S2Lavado_de_pisos_type_selector_pisoLiso").show();
    } else {
        $("#S2Lavado_de_pisos_type_selector_pisoLiso").hide();
    }
})

function S2LavadoPisoLiso_cantSelector(){
    $("#S2Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_pisos_type_selector_pisoLiso"){
            $("#S2Lavado_de_pisos_type_selector_pisoLiso").show();
        } else {
            $("#S2Lavado_de_pisos_type_selector_pisoLiso").hide();
        }
    })
}

window.addEventListener('change', S2LavadoPisoLiso_cantSelector);

// Lavado de piso
// S3Lavado_de_pisos_type_selector
// Liso
$("#S3Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_pisos_type_selector_pisoLiso"){
        $("#S3Lavado_de_pisos_type_selector_pisoLiso").show();
    } else {
        $("#S3Lavado_de_pisos_type_selector_pisoLiso").hide();
    }
})

function S3LavadoPisoLiso_cantSelector(){
    $("#S3Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_pisos_type_selector_pisoLiso"){
            $("#S3Lavado_de_pisos_type_selector_pisoLiso").show();
        } else {
            $("#S3Lavado_de_pisos_type_selector_pisoLiso").hide();
        }
    })
}

window.addEventListener('change', S3LavadoPisoLiso_cantSelector);

// Lavado de piso
// S4Lavado_de_pisos_type_selector
// Liso
$("#S4Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_pisos_type_selector_pisoLiso"){
        $("#S4Lavado_de_pisos_type_selector_pisoLiso").show();
    } else {
        $("#S4Lavado_de_pisos_type_selector_pisoLiso").hide();
    }
})

function S4LavadoPisoLiso_cantSelector(){
    $("#S4Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_pisos_type_selector_pisoLiso"){
            $("#S4Lavado_de_pisos_type_selector_pisoLiso").show();
        } else {
            $("#S4Lavado_de_pisos_type_selector_pisoLiso").hide();
        }
    })
}

window.addEventListener('change', S4LavadoPisoLiso_cantSelector);

// Lavado de piso
// S5Lavado_de_pisos_type_selector
// Liso
$("#S5Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_pisos_type_selector_pisoLiso"){
        $("#S5Lavado_de_pisos_type_selector_pisoLiso").show();
    } else {
        $("#S5Lavado_de_pisos_type_selector_pisoLiso").hide();
    }
})

function S5LavadoPisoLiso_cantSelector(){
    $("#S5Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_pisos_type_selector_pisoLiso"){
            $("#S5Lavado_de_pisos_type_selector_pisoLiso").show();
        } else {
            $("#S5Lavado_de_pisos_type_selector_pisoLiso").hide();
        }
    })
}

window.addEventListener('change', S5LavadoPisoLiso_cantSelector);

// Lavado de piso
// S1Lavado_de_pisos_type_selector
// Rustico 
$("#S1Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_pisos_type_selector_pisoRustico"){
        $("#S1Lavado_de_pisos_type_selector_pisoRustico").show();
    } else {
        $("#S1Lavado_de_pisos_type_selector_pisoRustico").hide();
    }
})

function S1LavadoPisoRustico_cantSelector(){
    $("#S1Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_pisos_type_selector_pisoRustico"){
            $("#S1Lavado_de_pisos_type_selector_pisoRustico").show();
        } else {
            $("#S1Lavado_de_pisos_type_selector_pisoRustico").hide();
        }
    })
}

window.addEventListener('change', S1LavadoPisoRustico_cantSelector);

// Lavado de piso
// S2Lavado_de_pisos_type_selector
// Rustico 
$("#S2Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_pisos_type_selector_pisoRustico"){
        $("#S2Lavado_de_pisos_type_selector_pisoRustico").show();
    } else {
        $("#S2Lavado_de_pisos_type_selector_pisoRustico").hide();
    }
})

function S2LavadoPisoRustico_cantSelector(){
    $("#S2Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_pisos_type_selector_pisoRustico"){
            $("#S2Lavado_de_pisos_type_selector_pisoRustico").show();
        } else {
            $("#S2Lavado_de_pisos_type_selector_pisoRustico").hide();
        }
    })
}

window.addEventListener('change', S2LavadoPisoRustico_cantSelector);

// Lavado de piso
// S3Lavado_de_pisos_type_selector
// Rustico 
$("#S3Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_pisos_type_selector_pisoRustico"){
        $("#S3Lavado_de_pisos_type_selector_pisoRustico").show();
    } else {
        $("#S3Lavado_de_pisos_type_selector_pisoRustico").hide();
    }
})

function S3LavadoPisoRustico_cantSelector(){
    $("#S3Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_pisos_type_selector_pisoRustico"){
            $("#S3Lavado_de_pisos_type_selector_pisoRustico").show();
        } else {
            $("#S3Lavado_de_pisos_type_selector_pisoRustico").hide();
        }
    })
}

window.addEventListener('change', S3LavadoPisoRustico_cantSelector);

// Lavado de piso
// S4Lavado_de_pisos_type_selector
// Rustico 
$("#S4Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_pisos_type_selector_pisoRustico"){
        $("#S4Lavado_de_pisos_type_selector_pisoRustico").show();
    } else {
        $("#S4Lavado_de_pisos_type_selector_pisoRustico").hide();
    }
})

function S4LavadoPisoRustico_cantSelector(){
    $("#S4Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_pisos_type_selector_pisoRustico"){
            $("#S4Lavado_de_pisos_type_selector_pisoRustico").show();
        } else {
            $("#S4Lavado_de_pisos_type_selector_pisoRustico").hide();
        }
    })
}

window.addEventListener('change', S4LavadoPisoRustico_cantSelector);

// Lavado de piso
// S5Lavado_de_pisos_type_selector
// Rustico 
$("#S5Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_pisos_type_selector_pisoRustico"){
        $("#S5Lavado_de_pisos_type_selector_pisoRustico").show();
    } else {
        $("#S5Lavado_de_pisos_type_selector_pisoRustico").hide();
    }
})

function S5LavadoPisoRustico_cantSelector(){
    $("#S5Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_pisos_type_selector_pisoRustico"){
            $("#S5Lavado_de_pisos_type_selector_pisoRustico").show();
        } else {
            $("#S5Lavado_de_pisos_type_selector_pisoRustico").hide();
        }
    })
}

window.addEventListener('change', S5LavadoPisoRustico_cantSelector);

// Lavado de piso
// S1Lavado_de_pisos_type_selector
// Cemento 
$("#S1Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_pisos_type_selector_pisoCemento"){
        $("#S1Lavado_de_pisos_type_selector_pisoCemento").show();
    } else {
        $("#S1Lavado_de_pisos_type_selector_pisoCemento").hide();
    }
})

function S1LavadoPisoCemento_cantSelector(){
    $("#S1Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_pisos_type_selector_pisoCemento"){
            $("#S1Lavado_de_pisos_type_selector_pisoCemento").show();
        } else {
            $("#S1Lavado_de_pisos_type_selector_pisoCemento").hide();
        }
    })
}

window.addEventListener('change', S1LavadoPisoCemento_cantSelector);

// Lavado de piso
// S2Lavado_de_pisos_type_selector
// Cemento 
$("#S2Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_pisos_type_selector_pisoCemento"){
        $("#S2Lavado_de_pisos_type_selector_pisoCemento").show();
    } else {
        $("#S2Lavado_de_pisos_type_selector_pisoCemento").hide();
    }
})

function S2LavadoPisoCemento_cantSelector(){
    $("#S2Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_pisos_type_selector_pisoCemento"){
            $("#S2Lavado_de_pisos_type_selector_pisoCemento").show();
        } else {
            $("#S2Lavado_de_pisos_type_selector_pisoCemento").hide();
        }
    })
}

window.addEventListener('change', S2LavadoPisoCemento_cantSelector);

// Lavado de piso
// S3Lavado_de_pisos_type_selector
// Cemento 
$("#S3Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_pisos_type_selector_pisoCemento"){
        $("#S3Lavado_de_pisos_type_selector_pisoCemento").show();
    } else {
        $("#S3Lavado_de_pisos_type_selector_pisoCemento").hide();
    }
})

function S3LavadoPisoCemento_cantSelector(){
    $("#S3Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_pisos_type_selector_pisoCemento"){
            $("#S3Lavado_de_pisos_type_selector_pisoCemento").show();
        } else {
            $("#S3Lavado_de_pisos_type_selector_pisoCemento").hide();
        }
    })
}

window.addEventListener('change', S3LavadoPisoCemento_cantSelector);

// Lavado de piso
// S4Lavado_de_pisos_type_selector
// Cemento 
$("#S4Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_pisos_type_selector_pisoCemento"){
        $("#S4Lavado_de_pisos_type_selector_pisoCemento").show();
    } else {
        $("#S4Lavado_de_pisos_type_selector_pisoCemento").hide();
    }
})

function S4LavadoPisoCemento_cantSelector(){
    $("#S4Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_pisos_type_selector_pisoCemento"){
            $("#S4Lavado_de_pisos_type_selector_pisoCemento").show();
        } else {
            $("#S4Lavado_de_pisos_type_selector_pisoCemento").hide();
        }
    })
}

window.addEventListener('change', S4LavadoPisoCemento_cantSelector);

// Lavado de piso
// S5Lavado_de_pisos_type_selector
// Cemento 
$("#S5Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_pisos_type_selector_pisoCemento"){
        $("#S5Lavado_de_pisos_type_selector_pisoCemento").show();
    } else {
        $("#S5Lavado_de_pisos_type_selector_pisoCemento").hide();
    }
})

function S5LavadoPisoCemento_cantSelector(){
    $("#S5Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_pisos_type_selector_pisoCemento"){
            $("#S5Lavado_de_pisos_type_selector_pisoCemento").show();
        } else {
            $("#S5Lavado_de_pisos_type_selector_pisoCemento").hide();
        }
    })
}

window.addEventListener('change', S5LavadoPisoCemento_cantSelector);

// Lavado de piso
// S1Lavado_de_pisos_type_selector
// Pintado 
$("#S1Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_pisos_type_selector_pisoPintado"){
        $("#S1Lavado_de_pisos_type_selector_pisoPintado").show();
    } else {
        $("#S1Lavado_de_pisos_type_selector_pisoPintado").hide();
    }
})

function S1LavadoPisoPintado_cantSelector(){
    $("#S1Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_pisos_type_selector_pisoPintado"){
            $("#S1Lavado_de_pisos_type_selector_pisoPintado").show();
        } else {
            $("#S1Lavado_de_pisos_type_selector_pisoPintado").hide();
        }
    })
    
}

window.addEventListener('change', S1LavadoPisoPintado_cantSelector);

// Lavado de piso
// S2Lavado_de_pisos_type_selector
// Pintado 
$("#S2Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_pisos_type_selector_pisoPintado"){
        $("#S2Lavado_de_pisos_type_selector_pisoPintado").show();
    } else {
        $("#S2Lavado_de_pisos_type_selector_pisoPintado").hide();
    }
})

function S2LavadoPisoPintado_cantSelector(){
    $("#S2Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_pisos_type_selector_pisoPintado"){
            $("#S2Lavado_de_pisos_type_selector_pisoPintado").show();
        } else {
            $("#S2Lavado_de_pisos_type_selector_pisoPintado").hide();
        }
    })
    
}

window.addEventListener('change', S2LavadoPisoPintado_cantSelector);

// Lavado de piso
// S3Lavado_de_pisos_type_selector
// Pintado 
$("#S3Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_pisos_type_selector_pisoPintado"){
        $("#S3Lavado_de_pisos_type_selector_pisoPintado").show();
    } else {
        $("#S3Lavado_de_pisos_type_selector_pisoPintado").hide();
    }
})

function S3LavadoPisoPintado_cantSelector(){
    $("#S3Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_pisos_type_selector_pisoPintado"){
            $("#S3Lavado_de_pisos_type_selector_pisoPintado").show();
        } else {
            $("#S3Lavado_de_pisos_type_selector_pisoPintado").hide();
        }
    })
    
}

window.addEventListener('change', S3LavadoPisoPintado_cantSelector);

// Lavado de piso
// S4Lavado_de_pisos_type_selector
// Pintado 
$("#S4Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_pisos_type_selector_pisoPintado"){
        $("#S4Lavado_de_pisos_type_selector_pisoPintado").show();
    } else {
        $("#S4Lavado_de_pisos_type_selector_pisoPintado").hide();
    }
})

function S4LavadoPisoPintado_cantSelector(){
    $("#S4Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_pisos_type_selector_pisoPintado"){
            $("#S4Lavado_de_pisos_type_selector_pisoPintado").show();
        } else {
            $("#S4Lavado_de_pisos_type_selector_pisoPintado").hide();
        }
    })
    
}

window.addEventListener('change', S4LavadoPisoPintado_cantSelector);

// Lavado de piso
// S5Lavado_de_pisos_type_selector
// Pintado 
$("#S5Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_pisos_type_selector_pisoPintado"){
        $("#S5Lavado_de_pisos_type_selector_pisoPintado").show();
    } else {
        $("#S5Lavado_de_pisos_type_selector_pisoPintado").hide();
    }
})

function S5LavadoPisoPintado_cantSelector(){
    $("#S5Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_pisos_type_selector_pisoPintado"){
            $("#S5Lavado_de_pisos_type_selector_pisoPintado").show();
        } else {
            $("#S5Lavado_de_pisos_type_selector_pisoPintado").hide();
        }
    })
    
}

window.addEventListener('change', S5LavadoPisoPintado_cantSelector);

// Lavado de piso
// S1Lavado_de_pisos_type_selector
// Laminado 
$("#S1Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_pisos_type_selector_psioLaminado"){
        $("#S1Lavado_de_pisos_type_selector_psioLaminado").show();
    } else {
        $("#S1Lavado_de_pisos_type_selector_psioLaminado").hide();
    }
})

function S1LavadoPisoLaminado_cantSelector(){
    $("#S1Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_pisos_type_selector_psioLaminado"){
            $("#S1Lavado_de_pisos_type_selector_psioLaminado").show();
        } else {
            $("#S1Lavado_de_pisos_type_selector_psioLaminado").hide();
        }
    })
}

window.addEventListener('change', S1LavadoPisoLaminado_cantSelector);

// Lavado de piso
// S2Lavado_de_pisos_type_selector
// Laminado 
$("#S2Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_pisos_type_selector_psioLaminado"){
        $("#S2Lavado_de_pisos_type_selector_psioLaminado").show();
    } else {
        $("#S2Lavado_de_pisos_type_selector_psioLaminado").hide();
    }
})

function S2LavadoPisoLaminado_cantSelector(){
    $("#S2Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_pisos_type_selector_psioLaminado"){
            $("#S2Lavado_de_pisos_type_selector_psioLaminado").show();
        } else {
            $("#S2Lavado_de_pisos_type_selector_psioLaminado").hide();
        }
    })
}

window.addEventListener('change', S2LavadoPisoLaminado_cantSelector);


// Lavado de piso
// S3Lavado_de_pisos_type_selector
// Laminado 
$("#S3Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_pisos_type_selector_psioLaminado"){
        $("#S3Lavado_de_pisos_type_selector_psioLaminado").show();
    } else {
        $("#S3Lavado_de_pisos_type_selector_psioLaminado").hide();
    }
})

function S3LavadoPisoLaminado_cantSelector(){
    $("#S3Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_pisos_type_selector_psioLaminado"){
            $("#S3Lavado_de_pisos_type_selector_psioLaminado").show();
        } else {
            $("#S3Lavado_de_pisos_type_selector_psioLaminado").hide();
        }
    })
}

window.addEventListener('change', S3LavadoPisoLaminado_cantSelector);

// Lavado de piso
// S4Lavado_de_pisos_type_selector
// Laminado 
$("#S4Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_pisos_type_selector_psioLaminado"){
        $("#S4Lavado_de_pisos_type_selector_psioLaminado").show();
    } else {
        $("#S4Lavado_de_pisos_type_selector_psioLaminado").hide();
    }
})

function S4LavadoPisoLaminado_cantSelector(){
    $("#S4Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_pisos_type_selector_psioLaminado"){
            $("#S4Lavado_de_pisos_type_selector_psioLaminado").show();
        } else {
            $("#S4Lavado_de_pisos_type_selector_psioLaminado").hide();
        }
    })
}

window.addEventListener('change', S4LavadoPisoLaminado_cantSelector);

// Lavado de piso
// S5Lavado_de_pisos_type_selector
// Laminado 
$("#S5Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_pisos_type_selector_psioLaminado"){
        $("#S5Lavado_de_pisos_type_selector_psioLaminado").show();
    } else {
        $("#S5Lavado_de_pisos_type_selector_psioLaminado").hide();
    }
})

function S5LavadoPisoLaminado_cantSelector(){
    $("#S5Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_pisos_type_selector_psioLaminado"){
            $("#S5Lavado_de_pisos_type_selector_psioLaminado").show();
        } else {
            $("#S5Lavado_de_pisos_type_selector_psioLaminado").hide();
        }
    })
}

window.addEventListener('change', S5LavadoPisoLaminado_cantSelector);

// Lavado de piso
// S1Lavado_de_pisos_type_selector
// Madera 
$("#S1Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Lavado_de_pisos_type_selector_pisoMadera"){
        $("#S1Lavado_de_pisos_type_selector_pisoMadera").show();
    } else {
        $("#S1Lavado_de_pisos_type_selector_pisoMadera").hide();
    }
})

function S1LavadoPisoMadera_cantSelector(){
    $("#S1Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Lavado_de_pisos_type_selector_pisoMadera"){
            $("#S1Lavado_de_pisos_type_selector_pisoMadera").show();
        } else {
            $("#S1Lavado_de_pisos_type_selector_pisoMadera").hide();
        }
    })
}

window.addEventListener('change', S1LavadoPisoMadera_cantSelector);

// Lavado de piso
// S2Lavado_de_pisos_type_selector
// Madera 
$("#S2Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Lavado_de_pisos_type_selector_pisoMadera"){
        $("#S2Lavado_de_pisos_type_selector_pisoMadera").show();
    } else {
        $("#S2Lavado_de_pisos_type_selector_pisoMadera").hide();
    }
})

function S2LavadoPisoMadera_cantSelector(){
    $("#S2Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Lavado_de_pisos_type_selector_pisoMadera"){
            $("#S2Lavado_de_pisos_type_selector_pisoMadera").show();
        } else {
            $("#S2Lavado_de_pisos_type_selector_pisoMadera").hide();
        }
    })
}

window.addEventListener('change', S2LavadoPisoMadera_cantSelector);

// Lavado de piso
// S3Lavado_de_pisos_type_selector
// Madera 
$("#S3Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Lavado_de_pisos_type_selector_pisoMadera"){
        $("#S3Lavado_de_pisos_type_selector_pisoMadera").show();
    } else {
        $("#S3Lavado_de_pisos_type_selector_pisoMadera").hide();
    }
})

function S3LavadoPisoMadera_cantSelector(){
    $("#S3Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Lavado_de_pisos_type_selector_pisoMadera"){
            $("#S3Lavado_de_pisos_type_selector_pisoMadera").show();
        } else {
            $("#S3Lavado_de_pisos_type_selector_pisoMadera").hide();
        }
    })
}

window.addEventListener('change', S3LavadoPisoMadera_cantSelector);

// Lavado de piso
// S4Lavado_de_pisos_type_selector
// Madera 
$("#S4Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Lavado_de_pisos_type_selector_pisoMadera"){
        $("#S4Lavado_de_pisos_type_selector_pisoMadera").show();
    } else {
        $("#S4Lavado_de_pisos_type_selector_pisoMadera").hide();
    }
})

function S4LavadoPisoMadera_cantSelector(){
    $("#S4Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Lavado_de_pisos_type_selector_pisoMadera"){
            $("#S4Lavado_de_pisos_type_selector_pisoMadera").show();
        } else {
            $("#S4Lavado_de_pisos_type_selector_pisoMadera").hide();
        }
    })
}

window.addEventListener('change', S4LavadoPisoMadera_cantSelector);

// Lavado de piso
// S5Lavado_de_pisos_type_selector
// Madera 
$("#S5Lavado_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Lavado_de_pisos_type_selector_pisoMadera"){
        $("#S5Lavado_de_pisos_type_selector_pisoMadera").show();
    } else {
        $("#S5Lavado_de_pisos_type_selector_pisoMadera").hide();
    }
})

function S5LavadoPisoMadera_cantSelector(){
    $("#S5Lavado_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Lavado_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Lavado_de_pisos_type_selector_pisoMadera"){
            $("#S5Lavado_de_pisos_type_selector_pisoMadera").show();
        } else {
            $("#S5Lavado_de_pisos_type_selector_pisoMadera").hide();
        }
    })
}

window.addEventListener('change', S5LavadoPisoMadera_cantSelector);

/* ------------------------------------------------------------------------------------------------*/
// Lavado de piso 
// S1Pulido_de_pisos_type_selector
// Marmol 
$("#S1Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Pulido_de_pisos_type_selector_marmol"){
        $("#S1Pulido_de_pisos_type_selector_marmol").show();
    } else {
        $("#S1Pulido_de_pisos_type_selector_marmol").hide();
    }
})

function S1PulidoPisoMarmol_cantSelector(){
    $("#S1Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Pulido_de_pisos_type_selector_marmol"){
            $("#S1Pulido_de_pisos_type_selector_marmol").show();
        } else {
            $("#S1Pulido_de_pisos_type_selector_marmol").hide();
        }
    })
}

window.addEventListener('change', S1PulidoPisoMarmol_cantSelector);

// Lavado de piso 
// S2Pulido_de_pisos_type_selector
// Marmol 
$("#S2Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Pulido_de_pisos_type_selector_marmol"){
        $("#S2Pulido_de_pisos_type_selector_marmol").show();
    } else {
        $("#S2Pulido_de_pisos_type_selector_marmol").hide();
    }
})

function S2PulidoPisoMarmol_cantSelector(){
    $("#S2Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Pulido_de_pisos_type_selector_marmol"){
            $("#S2Pulido_de_pisos_type_selector_marmol").show();
        } else {
            $("#S2Pulido_de_pisos_type_selector_marmol").hide();
        }
    })
}

window.addEventListener('change', S2PulidoPisoMarmol_cantSelector);

// Lavado de piso 
// S3Pulido_de_pisos_type_selector
// Marmol 
$("#S3Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Pulido_de_pisos_type_selector_marmol"){
        $("#S3Pulido_de_pisos_type_selector_marmol").show();
    } else {
        $("#S3Pulido_de_pisos_type_selector_marmol").hide();
    }
})

function S3PulidoPisoMarmol_cantSelector(){
    $("#S3Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Pulido_de_pisos_type_selector_marmol"){
            $("#S3Pulido_de_pisos_type_selector_marmol").show();
        } else {
            $("#S3Pulido_de_pisos_type_selector_marmol").hide();
        }
    })
}

window.addEventListener('change', S3PulidoPisoMarmol_cantSelector);

// Lavado de piso 
// S4Pulido_de_pisos_type_selector
// Marmol 
$("#S4Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Pulido_de_pisos_type_selector_marmol"){
        $("#S4Pulido_de_pisos_type_selector_marmol").show();
    } else {
        $("#S4Pulido_de_pisos_type_selector_marmol").hide();
    }
})

function S4PulidoPisoMarmol_cantSelector(){
    $("#S4Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Pulido_de_pisos_type_selector_marmol"){
            $("#S4Pulido_de_pisos_type_selector_marmol").show();
        } else {
            $("#S4Pulido_de_pisos_type_selector_marmol").hide();
        }
    })
}

window.addEventListener('change', S4PulidoPisoMarmol_cantSelector);

// Lavado de piso 
// S5Pulido_de_pisos_type_selector
// Marmol 
$("#S5Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Pulido_de_pisos_type_selector_marmol"){
        $("#S5Pulido_de_pisos_type_selector_marmol").show();
    } else {
        $("#S5Pulido_de_pisos_type_selector_marmol").hide();
    }
})

function S5PulidoPisoMarmol_cantSelector(){
    $("#S5Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Pulido_de_pisos_type_selector_marmol"){
            $("#S5Pulido_de_pisos_type_selector_marmol").show();
        } else {
            $("#S5Pulido_de_pisos_type_selector_marmol").hide();
        }
    })
}

window.addEventListener('change', S5PulidoPisoMarmol_cantSelector);


// Lavado de piso 
// S1Pulido_de_pisos_type_selector
// Mosaico 
$("#S1Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Pulido_de_pisos_type_selector_mosaico"){
        $("#S1Pulido_de_pisos_type_selector_mosaico").show();
    } else {
        $("#S1Pulido_de_pisos_type_selector_mosaico").hide();
    }
})

function S1PulidoPisoMosaico_cantSelector(){
    $("#S1Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Pulido_de_pisos_type_selector_mosaico"){
            $("#S1Pulido_de_pisos_type_selector_mosaico").show();
        } else {
            $("#S1Pulido_de_pisos_type_selector_mosaico").hide();
        }
    })
}

window.addEventListener('change', S1PulidoPisoMosaico_cantSelector);

// Lavado de piso 
// S2Pulido_de_pisos_type_selector
// Mosaico 
$("#S2Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Pulido_de_pisos_type_selector_mosaico"){
        $("#S2Pulido_de_pisos_type_selector_mosaico").show();
    } else {
        $("#S2Pulido_de_pisos_type_selector_mosaico").hide();
    }
})

function S2PulidoPisoMosaico_cantSelector(){
    $("#S2Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Pulido_de_pisos_type_selector_mosaico"){
            $("#S2Pulido_de_pisos_type_selector_mosaico").show();
        } else {
            $("#S2Pulido_de_pisos_type_selector_mosaico").hide();
        }
    })
}

window.addEventListener('change', S2PulidoPisoMosaico_cantSelector);

// Lavado de piso 
// S3Pulido_de_pisos_type_selector
// Mosaico 
$("#S3Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Pulido_de_pisos_type_selector_mosaico"){
        $("#S3Pulido_de_pisos_type_selector_mosaico").show();
    } else {
        $("#S3Pulido_de_pisos_type_selector_mosaico").hide();
    }
})

function S3PulidoPisoMosaico_cantSelector(){
    $("#S3Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Pulido_de_pisos_type_selector_mosaico"){
            $("#S3Pulido_de_pisos_type_selector_mosaico").show();
        } else {
            $("#S3Pulido_de_pisos_type_selector_mosaico").hide();
        }
    })
}

window.addEventListener('change', S3PulidoPisoMosaico_cantSelector);

// Lavado de piso 
// S4Pulido_de_pisos_type_selector
// Mosaico 
$("#S4Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Pulido_de_pisos_type_selector_mosaico"){
        $("#S4Pulido_de_pisos_type_selector_mosaico").show();
    } else {
        $("#S4Pulido_de_pisos_type_selector_mosaico").hide();
    }
})

function S4PulidoPisoMosaico_cantSelector(){
    $("#S4Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Pulido_de_pisos_type_selector_mosaico"){
            $("#S4Pulido_de_pisos_type_selector_mosaico").show();
        } else {
            $("#S4Pulido_de_pisos_type_selector_mosaico").hide();
        }
    })
}

window.addEventListener('change', S4PulidoPisoMosaico_cantSelector);

// Lavado de piso 
// S5Pulido_de_pisos_type_selector
// Mosaico 
$("#S5Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Pulido_de_pisos_type_selector_mosaico"){
        $("#S5Pulido_de_pisos_type_selector_mosaico").show();
    } else {
        $("#S5Pulido_de_pisos_type_selector_mosaico").hide();
    }
})

function S5PulidoPisoMosaico_cantSelector(){
    $("#S5Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Pulido_de_pisos_type_selector_mosaico"){
            $("#S5Pulido_de_pisos_type_selector_mosaico").show();
        } else {
            $("#S5Pulido_de_pisos_type_selector_mosaico").hide();
        }
    })
}

window.addEventListener('change', S5PulidoPisoMosaico_cantSelector);

// Lavado de piso 
// S1Pulido_de_pisos_type_selector
// Terrazo 
$("#S1Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Pulido_de_pisos_type_selector_terrazo"){
        $("#S1Pulido_de_pisos_type_selector_terrazo").show();
    } else {
        $("#S1Pulido_de_pisos_type_selector_terrazo").hide();
    }
})

function S1PulidoPisoTerrazo_cantSelector(){
    $("#S1Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Pulido_de_pisos_type_selector_terrazo"){
            $("#S1Pulido_de_pisos_type_selector_terrazo").show();
        } else {
            $("#S1Pulido_de_pisos_type_selector_terrazo").hide();
        }
    })
}

window.addEventListener('change', S1PulidoPisoTerrazo_cantSelector);

// Lavado de piso 
// S2Pulido_de_pisos_type_selector
// Terrazo 
$("#S2Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Pulido_de_pisos_type_selector_terrazo"){
        $("#S2Pulido_de_pisos_type_selector_terrazo").show();
    } else {
        $("#S2Pulido_de_pisos_type_selector_terrazo").hide();
    }
})

function S2PulidoPisoTerrazo_cantSelector(){
    $("#S2Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Pulido_de_pisos_type_selector_terrazo"){
            $("#S2Pulido_de_pisos_type_selector_terrazo").show();
        } else {
            $("#S2Pulido_de_pisos_type_selector_terrazo").hide();
        }
    })
}

window.addEventListener('change', S2PulidoPisoTerrazo_cantSelector);

// Lavado de piso 
// S3Pulido_de_pisos_type_selector
// Terrazo 
$("#S3Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Pulido_de_pisos_type_selector_terrazo"){
        $("#S3Pulido_de_pisos_type_selector_terrazo").show();
    } else {
        $("#S3Pulido_de_pisos_type_selector_terrazo").hide();
    }
})

function S3PulidoPisoTerrazo_cantSelector(){
    $("#S3Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Pulido_de_pisos_type_selector_terrazo"){
            $("#S3Pulido_de_pisos_type_selector_terrazo").show();
        } else {
            $("#S3Pulido_de_pisos_type_selector_terrazo").hide();
        }
    })
}

window.addEventListener('change', S3PulidoPisoTerrazo_cantSelector);

// Lavado de piso 
// S4Pulido_de_pisos_type_selector
// Terrazo 
$("#S4Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Pulido_de_pisos_type_selector_terrazo"){
        $("#S4Pulido_de_pisos_type_selector_terrazo").show();
    } else {
        $("#S4Pulido_de_pisos_type_selector_terrazo").hide();
    }
})

function S4PulidoPisoTerrazo_cantSelector(){
    $("#S4Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Pulido_de_pisos_type_selector_terrazo"){
            $("#S4Pulido_de_pisos_type_selector_terrazo").show();
        } else {
            $("#S4Pulido_de_pisos_type_selector_terrazo").hide();
        }
    })
}

window.addEventListener('change', S4PulidoPisoTerrazo_cantSelector);

// Lavado de piso 
// S5Pulido_de_pisos_type_selector
// Terrazo 
$("#S5Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Pulido_de_pisos_type_selector_terrazo"){
        $("#S5Pulido_de_pisos_type_selector_terrazo").show();
    } else {
        $("#S5Pulido_de_pisos_type_selector_terrazo").hide();
    }
})

function S5PulidoPisoTerrazo_cantSelector(){
    $("#S5Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Pulido_de_pisos_type_selector_terrazo"){
            $("#S5Pulido_de_pisos_type_selector_terrazo").show();
        } else {
            $("#S5Pulido_de_pisos_type_selector_terrazo").hide();
        }
    })
}

window.addEventListener('change', S5PulidoPisoTerrazo_cantSelector);


// Lavado de piso 
// S1Pulido_de_pisos_type_selector
// Granito 
$("#S1Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Pulido_de_pisos_type_selector_granito"){
        $("#S1Pulido_de_pisos_type_selector_granito").show();
    } else {
        $("#S1Pulido_de_pisos_type_selector_granito").hide();
    }
})

function S1PulidoPisoGranito_cantSelector(){
    $("#S1Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Pulido_de_pisos_type_selector_granito"){
            $("#S1Pulido_de_pisos_type_selector_granito").show();
        } else {
            $("#S1Pulido_de_pisos_type_selector_granito").hide();
        }
    })
}

window.addEventListener('change', S1PulidoPisoGranito_cantSelector);

// Lavado de piso 
// S2Pulido_de_pisos_type_selector
// Granito 
$("#S2Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Pulido_de_pisos_type_selector_granito"){
        $("#S2Pulido_de_pisos_type_selector_granito").show();
    } else {
        $("#S2Pulido_de_pisos_type_selector_granito").hide();
    }
})

function S2PulidoPisoGranito_cantSelector(){
    $("#S2Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Pulido_de_pisos_type_selector_granito"){
            $("#S2Pulido_de_pisos_type_selector_granito").show();
        } else {
            $("#S2Pulido_de_pisos_type_selector_granito").hide();
        }
    })
}

window.addEventListener('change', S2PulidoPisoGranito_cantSelector);

// Lavado de piso 
// S3Pulido_de_pisos_type_selector
// Granito 
$("#S3Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Pulido_de_pisos_type_selector_granito"){
        $("#S3Pulido_de_pisos_type_selector_granito").show();
    } else {
        $("#S3Pulido_de_pisos_type_selector_granito").hide();
    }
})

function S3PulidoPisoGranito_cantSelector(){
    $("#S3Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Pulido_de_pisos_type_selector_granito"){
            $("#S3Pulido_de_pisos_type_selector_granito").show();
        } else {
            $("#S3Pulido_de_pisos_type_selector_granito").hide();
        }
    })
}

window.addEventListener('change', S3PulidoPisoGranito_cantSelector);

// Lavado de piso 
// S4Pulido_de_pisos_type_selector
// Granito 
$("#S4Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Pulido_de_pisos_type_selector_granito"){
        $("#S4Pulido_de_pisos_type_selector_granito").show();
    } else {
        $("#S4Pulido_de_pisos_type_selector_granito").hide();
    }
})

function S4PulidoPisoGranito_cantSelector(){
    $("#S4Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Pulido_de_pisos_type_selector_granito"){
            $("#S4Pulido_de_pisos_type_selector_granito").show();
        } else {
            $("#S4Pulido_de_pisos_type_selector_granito").hide();
        }
    })
}

window.addEventListener('change', S4PulidoPisoGranito_cantSelector);

// Lavado de piso 
// S5Pulido_de_pisos_type_selector
// Granito 
$("#S5Pulido_de_pisos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Pulido_de_pisos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Pulido_de_pisos_type_selector_granito"){
        $("#S5Pulido_de_pisos_type_selector_granito").show();
    } else {
        $("#S5Pulido_de_pisos_type_selector_granito").hide();
    }
})

function S5PulidoPisoGranito_cantSelector(){
    $("#S5Pulido_de_pisos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Pulido_de_pisos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Pulido_de_pisos_type_selector_granito"){
            $("#S5Pulido_de_pisos_type_selector_granito").show();
        } else {
            $("#S5Pulido_de_pisos_type_selector_granito").hide();
        }
    })
}

window.addEventListener('change', S5PulidoPisoGranito_cantSelector);

/* ------------------------------------------------------------------------------------------------*/
// Sanitizacion 
// S1Sanitizacion_type_selector
// Casa chica
$("#S1Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Sanitizacion_type_selector_casaChica"){
        $("#S1Sanitizacion_type_selector_casaChica").show();
    } else {
        $("#S1Sanitizacion_type_selector_casaChica").hide();
    }
})

function S1SanitizacionCasaChica_cantSelector(){
    $("#S1Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Sanitizacion_type_selector_casaChica"){
            $("#S1Sanitizacion_type_selector_casaChica").show();
        } else {
            $("#S1Sanitizacion_type_selector_casaChica").hide();
        }
    })
}

window.addEventListener('change', S1SanitizacionCasaChica_cantSelector);

// Sanitizacion 
// S2Sanitizacion_type_selector
// Casa chica
$("#S2Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Sanitizacion_type_selector_casaChica"){
        $("#S2Sanitizacion_type_selector_casaChica").show();
    } else {
        $("#S2Sanitizacion_type_selector_casaChica").hide();
    }
})

function S2SanitizacionCasaChica_cantSelector(){
    $("#S2Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Sanitizacion_type_selector_casaChica"){
            $("#S2Sanitizacion_type_selector_casaChica").show();
        } else {
            $("#S2Sanitizacion_type_selector_casaChica").hide();
        }
    })
}

window.addEventListener('change', S2SanitizacionCasaChica_cantSelector);

// Sanitizacion 
// S3Sanitizacion_type_selector
// Casa chica
$("#S3Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Sanitizacion_type_selector_casaChica"){
        $("#S3Sanitizacion_type_selector_casaChica").show();
    } else {
        $("#S3Sanitizacion_type_selector_casaChica").hide();
    }
})

function S3SanitizacionCasaChica_cantSelector(){
    $("#S3Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Sanitizacion_type_selector_casaChica"){
            $("#S3Sanitizacion_type_selector_casaChica").show();
        } else {
            $("#S3Sanitizacion_type_selector_casaChica").hide();
        }
    })
}

window.addEventListener('change', S3SanitizacionCasaChica_cantSelector);

// Sanitizacion 
// S4Sanitizacion_type_selector
// Casa chica
$("#S4Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Sanitizacion_type_selector_casaChica"){
        $("#S4Sanitizacion_type_selector_casaChica").show();
    } else {
        $("#S4Sanitizacion_type_selector_casaChica").hide();
    }
})

function S4SanitizacionCasaChica_cantSelector(){
    $("#S4Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Sanitizacion_type_selector_casaChica"){
            $("#S4Sanitizacion_type_selector_casaChica").show();
        } else {
            $("#S4Sanitizacion_type_selector_casaChica").hide();
        }
    })
}

window.addEventListener('change', S4SanitizacionCasaChica_cantSelector);

// Sanitizacion 
// S5Sanitizacion_type_selector
// Casa chica
$("#S5Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Sanitizacion_type_selector_casaChica"){
        $("#S5Sanitizacion_type_selector_casaChica").show();
    } else {
        $("#S5Sanitizacion_type_selector_casaChica").hide();
    }
})

function S5SanitizacionCasaChica_cantSelector(){
    $("#S5Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Sanitizacion_type_selector_casaChica"){
            $("#S5Sanitizacion_type_selector_casaChica").show();
        } else {
            $("#S5Sanitizacion_type_selector_casaChica").hide();
        }
    })
}

window.addEventListener('change', S5SanitizacionCasaChica_cantSelector);

// Sanitizacion 
// S1Sanitizacion_type_selector
// Casa mediana
$("#S1Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Sanitizacion_type_selector_casaMediana"){
        $("#S1Sanitizacion_type_selector_casaMediana").show();
    } else {
        $("#S1Sanitizacion_type_selector_casaMediana").hide();
    }
})

function S1SanitizacionCasaMediana_cantSelector(){
    $("#S1Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Sanitizacion_type_selector_casaMediana"){
            $("#S1Sanitizacion_type_selector_casaMediana").show();
        } else {
            $("#S1Sanitizacion_type_selector_casaMediana").hide();
        }
    })
}

window.addEventListener('change', S1SanitizacionCasaMediana_cantSelector);

// Sanitizacion 
// S2Sanitizacion_type_selector
// Casa mediana
$("#S2Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Sanitizacion_type_selector_casaMediana"){
        $("#S2Sanitizacion_type_selector_casaMediana").show();
    } else {
        $("#S2Sanitizacion_type_selector_casaMediana").hide();
    }
})

function S2SanitizacionCasaMediana_cantSelector(){
    $("#S2Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Sanitizacion_type_selector_casaMediana"){
            $("#S2Sanitizacion_type_selector_casaMediana").show();
        } else {
            $("#S2Sanitizacion_type_selector_casaMediana").hide();
        }
    })
}

window.addEventListener('change', S2SanitizacionCasaMediana_cantSelector);

// Sanitizacion 
// S3Sanitizacion_type_selector
// Casa mediana
$("#S3Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Sanitizacion_type_selector_casaMediana"){
        $("#S3Sanitizacion_type_selector_casaMediana").show();
    } else {
        $("#S3Sanitizacion_type_selector_casaMediana").hide();
    }
})

function S3SanitizacionCasaMediana_cantSelector(){
    $("#S3Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Sanitizacion_type_selector_casaMediana"){
            $("#S3Sanitizacion_type_selector_casaMediana").show();
        } else {
            $("#S3Sanitizacion_type_selector_casaMediana").hide();
        }
    })
}

window.addEventListener('change', S3SanitizacionCasaMediana_cantSelector);

// Sanitizacion 
// S4Sanitizacion_type_selector
// Casa mediana
$("#S4Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Sanitizacion_type_selector_casaMediana"){
        $("#S4Sanitizacion_type_selector_casaMediana").show();
    } else {
        $("#S4Sanitizacion_type_selector_casaMediana").hide();
    }
})

function S4SanitizacionCasaMediana_cantSelector(){
    $("#S4Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Sanitizacion_type_selector_casaMediana"){
            $("#S4Sanitizacion_type_selector_casaMediana").show();
        } else {
            $("#S4Sanitizacion_type_selector_casaMediana").hide();
        }
    })
}

window.addEventListener('change', S4SanitizacionCasaMediana_cantSelector);

// Sanitizacion 
// S5Sanitizacion_type_selector
// Casa mediana
$("#S5Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Sanitizacion_type_selector_casaMediana"){
        $("#S5Sanitizacion_type_selector_casaMediana").show();
    } else {
        $("#S5Sanitizacion_type_selector_casaMediana").hide();
    }
})

function S5SanitizacionCasaMediana_cantSelector(){
    $("#S5Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Sanitizacion_type_selector_casaMediana"){
            $("#S5Sanitizacion_type_selector_casaMediana").show();
        } else {
            $("#S5Sanitizacion_type_selector_casaMediana").hide();
        }
    })
}

window.addEventListener('change', S5SanitizacionCasaMediana_cantSelector);

// Sanitizacion 
// S1Sanitizacion_type_selector
// Casa grande
$("#S1Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Sanitizacion_type_selector_casaGrande"){
        $("#S1Sanitizacion_type_selector_casaGrande").show();
    } else {
        $("#S1Sanitizacion_type_selector_casaGrande").hide();
    }
})

function S1SanitizacionCasaGrande_cantSelector(){
    $("#S1Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Sanitizacion_type_selector_casaGrande"){
            $("#S1Sanitizacion_type_selector_casaGrande").show();
        } else {
            $("#S1Sanitizacion_type_selector_casaGrande").hide();
        }
    })
}

window.addEventListener('change', S1SanitizacionCasaGrande_cantSelector);

// Sanitizacion 
// S2Sanitizacion_type_selector
// Casa grande
$("#S2Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Sanitizacion_type_selector_casaGrande"){
        $("#S2Sanitizacion_type_selector_casaGrande").show();
    } else {
        $("#S2Sanitizacion_type_selector_casaGrande").hide();
    }
})

function S2SanitizacionCasaGrande_cantSelector(){
    $("#S2Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Sanitizacion_type_selector_casaGrande"){
            $("#S2Sanitizacion_type_selector_casaGrande").show();
        } else {
            $("#S2Sanitizacion_type_selector_casaGrande").hide();
        }
    })
}

window.addEventListener('change', S2SanitizacionCasaGrande_cantSelector);

// Sanitizacion 
// S3Sanitizacion_type_selector
// Casa grande
$("#S3Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Sanitizacion_type_selector_casaGrande"){
        $("#S3Sanitizacion_type_selector_casaGrande").show();
    } else {
        $("#S3Sanitizacion_type_selector_casaGrande").hide();
    }
})

function S3SanitizacionCasaGrande_cantSelector(){
    $("#S3Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Sanitizacion_type_selector_casaGrande"){
            $("#S3Sanitizacion_type_selector_casaGrande").show();
        } else {
            $("#S3Sanitizacion_type_selector_casaGrande").hide();
        }
    })
}

window.addEventListener('change', S3SanitizacionCasaGrande_cantSelector);

// Sanitizacion 
// S4Sanitizacion_type_selector
// Casa grande
$("#S4Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Sanitizacion_type_selector_casaGrande"){
        $("#S4Sanitizacion_type_selector_casaGrande").show();
    } else {
        $("#S4Sanitizacion_type_selector_casaGrande").hide();
    }
})

function S4SanitizacionCasaGrande_cantSelector(){
    $("#S4Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Sanitizacion_type_selector_casaGrande"){
            $("#S4Sanitizacion_type_selector_casaGrande").show();
        } else {
            $("#S4Sanitizacion_type_selector_casaGrande").hide();
        }
    })
}

window.addEventListener('change', S4SanitizacionCasaGrande_cantSelector);

// Sanitizacion 
// S5Sanitizacion_type_selector
// Casa grande
$("#S5Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Sanitizacion_type_selector_casaGrande"){
        $("#S5Sanitizacion_type_selector_casaGrande").show();
    } else {
        $("#S5Sanitizacion_type_selector_casaGrande").hide();
    }
})

function S5SanitizacionCasaGrande_cantSelector(){
    $("#S5Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Sanitizacion_type_selector_casaGrande"){
            $("#S5Sanitizacion_type_selector_casaGrande").show();
        } else {
            $("#S5Sanitizacion_type_selector_casaGrande").hide();
        }
    })
}

window.addEventListener('change', S5SanitizacionCasaGrande_cantSelector);

// Sanitizacion 
// S1Sanitizacion_type_selector
// Casa extra grande
$("#S1Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Sanitizacion_type_selector_casaExtraGrande"){
        $("#S1Sanitizacion_type_selector_casaExtraGrande").show();
    } else {
        $("#S1Sanitizacion_type_selector_casaExtraGrande").hide();
    }
})

function S1SanitizacionCasaExtraGrande_cantSelector(){
    $("#S1Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Sanitizacion_type_selector_casaExtraGrande"){
            $("#S1Sanitizacion_type_selector_casaExtraGrande").show();
        } else {
            $("#S1Sanitizacion_type_selector_casaExtraGrande").hide();
        }
    })
}

window.addEventListener('change', S1SanitizacionCasaExtraGrande_cantSelector);

// Sanitizacion 
// S2Sanitizacion_type_selector
// Casa extra grande
$("#S2Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Sanitizacion_type_selector_casaExtraGrande"){
        $("#S2Sanitizacion_type_selector_casaExtraGrande").show();
    } else {
        $("#S2Sanitizacion_type_selector_casaExtraGrande").hide();
    }
})

function S2SanitizacionCasaExtraGrande_cantSelector(){
    $("#S2Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Sanitizacion_type_selector_casaExtraGrande"){
            $("#S2Sanitizacion_type_selector_casaExtraGrande").show();
        } else {
            $("#S2Sanitizacion_type_selector_casaExtraGrande").hide();
        }
    })
}

window.addEventListener('change', S2SanitizacionCasaExtraGrande_cantSelector);

// Sanitizacion 
// S3Sanitizacion_type_selector
// Casa extra grande
$("#S3Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Sanitizacion_type_selector_casaExtraGrande"){
        $("#S3Sanitizacion_type_selector_casaExtraGrande").show();
    } else {
        $("#S3Sanitizacion_type_selector_casaExtraGrande").hide();
    }
})

function S3SanitizacionCasaExtraGrande_cantSelector(){
    $("#S3Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Sanitizacion_type_selector_casaExtraGrande"){
            $("#S3Sanitizacion_type_selector_casaExtraGrande").show();
        } else {
            $("#S3Sanitizacion_type_selector_casaExtraGrande").hide();
        }
    })
}

window.addEventListener('change', S3SanitizacionCasaExtraGrande_cantSelector);

// Sanitizacion 
// S4Sanitizacion_type_selector
// Casa extra grande
$("#S4Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Sanitizacion_type_selector_casaExtraGrande"){
        $("#S4Sanitizacion_type_selector_casaExtraGrande").show();
    } else {
        $("#S4Sanitizacion_type_selector_casaExtraGrande").hide();
    }
})

function S4SanitizacionCasaExtraGrande_cantSelector(){
    $("#S4Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Sanitizacion_type_selector_casaExtraGrande"){
            $("#S4Sanitizacion_type_selector_casaExtraGrande").show();
        } else {
            $("#S4Sanitizacion_type_selector_casaExtraGrande").hide();
        }
    })
}

window.addEventListener('change', S4SanitizacionCasaExtraGrande_cantSelector);

// Sanitizacion 
// S5Sanitizacion_type_selector
// Casa extra grande
$("#S5Sanitizacion_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Sanitizacion_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Sanitizacion_type_selector_casaExtraGrande"){
        $("#S5Sanitizacion_type_selector_casaExtraGrande").show();
    } else {
        $("#S5Sanitizacion_type_selector_casaExtraGrande").hide();
    }
})

function S5SanitizacionCasaExtraGrande_cantSelector(){
    $("#S5Sanitizacion_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Sanitizacion_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Sanitizacion_type_selector_casaExtraGrande"){
            $("#S5Sanitizacion_type_selector_casaExtraGrande").show();
        } else {
            $("#S5Sanitizacion_type_selector_casaExtraGrande").hide();
        }
    })
}

window.addEventListener('change', S5SanitizacionCasaExtraGrande_cantSelector);

/* ------------------------------------------------------------------------------------------------*/
// Limpieza de vidrios 
// S1Limpieza_de_vidrios_type_selector
// Chica 
$("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_vidrios_type_selector_chica"){
        $("#S1Limpieza_de_vidrios_type_selector_chica").show();
    } else {
        $("#S1Limpieza_de_vidrios_type_selector_chica").hide();
    }
})

function S1LimpiezaVidriosChica_cantSelector(){
    $("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_vidrios_type_selector_chica"){
            $("#S1Limpieza_de_vidrios_type_selector_chica").show();
        } else {
            $("#S1Limpieza_de_vidrios_type_selector_chica").hide();
        }
    })
}

window.addEventListener('change', S1LimpiezaVidriosChica_cantSelector);

// Limpieza de vidrios 
// S2Limpieza_de_vidrios_type_selector
// Chica 
$("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_vidrios_type_selector_chica"){
        $("#S2Limpieza_de_vidrios_type_selector_chica").show();
    } else {
        $("#S2Limpieza_de_vidrios_type_selector_chica").hide();
    }
})

function S2LimpiezaVidriosChica_cantSelector(){
    $("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_vidrios_type_selector_chica"){
            $("#S2Limpieza_de_vidrios_type_selector_chica").show();
        } else {
            $("#S2Limpieza_de_vidrios_type_selector_chica").hide();
        }
    })
}

window.addEventListener('change', S2LimpiezaVidriosChica_cantSelector);

// Limpieza de vidrios 
// S3Limpieza_de_vidrios_type_selector
// Chica 
$("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_vidrios_type_selector_chica"){
        $("#S3Limpieza_de_vidrios_type_selector_chica").show();
    } else {
        $("#S3Limpieza_de_vidrios_type_selector_chica").hide();
    }
})

function S3LimpiezaVidriosChica_cantSelector(){
    $("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_vidrios_type_selector_chica"){
            $("#S3Limpieza_de_vidrios_type_selector_chica").show();
        } else {
            $("#S3Limpieza_de_vidrios_type_selector_chica").hide();
        }
    })
}

window.addEventListener('change', S3LimpiezaVidriosChica_cantSelector);

// Limpieza de vidrios 
// S4Limpieza_de_vidrios_type_selector
// Chica 
$("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_vidrios_type_selector_chica"){
        $("#S4Limpieza_de_vidrios_type_selector_chica").show();
    } else {
        $("#S4Limpieza_de_vidrios_type_selector_chica").hide();
    }
})

function S4LimpiezaVidriosChica_cantSelector(){
    $("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_vidrios_type_selector_chica"){
            $("#S4Limpieza_de_vidrios_type_selector_chica").show();
        } else {
            $("#S4Limpieza_de_vidrios_type_selector_chica").hide();
        }
    })
}

window.addEventListener('change', S4LimpiezaVidriosChica_cantSelector);

// Limpieza de vidrios 
// S5Limpieza_de_vidrios_type_selector
// Chica 
$("#S5Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_vidrios_type_selector_chica"){
        $("#S5Limpieza_de_vidrios_type_selector_chica").show();
    } else {
        $("#S5Limpieza_de_vidrios_type_selector_chica").hide();
    }
})

function S5LimpiezaVidriosChica_cantSelector(){
    $("#S5Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_vidrios_type_selector_chica"){
            $("#S5Limpieza_de_vidrios_type_selector_chica").show();
        } else {
            $("#S5Limpieza_de_vidrios_type_selector_chica").hide();
        }
    })
}

window.addEventListener('change', S5LimpiezaVidriosChica_cantSelector);

// Limpieza de vidrios 
// S1Limpieza_de_vidrios_type_selector
// Mediana 
$("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_vidrios_type_selector_mediana"){
        $("#S1Limpieza_de_vidrios_type_selector_mediana").show();
    } else {
        $("#S1Limpieza_de_vidrios_type_selector_mediana").hide();
    }
})

function S1LimpiezaVidriosMediana_cantSelector(){
    $("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_vidrios_type_selector_mediana"){
            $("#S1Limpieza_de_vidrios_type_selector_mediana").show();
        } else {
            $("#S1Limpieza_de_vidrios_type_selector_mediana").hide();
        }
    })
}

window.addEventListener('change', S1LimpiezaVidriosMediana_cantSelector);

// Limpieza de vidrios 
// S2Limpieza_de_vidrios_type_selector
// Mediana 
$("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_vidrios_type_selector_mediana"){
        $("#S2Limpieza_de_vidrios_type_selector_mediana").show();
    } else {
        $("#S2Limpieza_de_vidrios_type_selector_mediana").hide();
    }
})

function S2LimpiezaVidriosMediana_cantSelector(){
    $("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_vidrios_type_selector_mediana"){
            $("#S2Limpieza_de_vidrios_type_selector_mediana").show();
        } else {
            $("#S2Limpieza_de_vidrios_type_selector_mediana").hide();
        }
    })
}

window.addEventListener('change', S2LimpiezaVidriosMediana_cantSelector);

// Limpieza de vidrios 
// S3Limpieza_de_vidrios_type_selector
// Mediana 
$("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_vidrios_type_selector_mediana"){
        $("#S3Limpieza_de_vidrios_type_selector_mediana").show();
    } else {
        $("#S3Limpieza_de_vidrios_type_selector_mediana").hide();
    }
})

function S3LimpiezaVidriosMediana_cantSelector(){
    $("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_vidrios_type_selector_mediana"){
            $("#S3Limpieza_de_vidrios_type_selector_mediana").show();
        } else {
            $("#S3Limpieza_de_vidrios_type_selector_mediana").hide();
        }
    })
}

window.addEventListener('change', S3LimpiezaVidriosMediana_cantSelector);

// Limpieza de vidrios 
// S4Limpieza_de_vidrios_type_selector
// Mediana 
$("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_vidrios_type_selector_mediana"){
        $("#S4Limpieza_de_vidrios_type_selector_mediana").show();
    } else {
        $("#S4Limpieza_de_vidrios_type_selector_mediana").hide();
    }
})

function S4LimpiezaVidriosMediana_cantSelector(){
    $("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_vidrios_type_selector_mediana"){
            $("#S4Limpieza_de_vidrios_type_selector_mediana").show();
        } else {
            $("#S4Limpieza_de_vidrios_type_selector_mediana").hide();
        }
    })
}

window.addEventListener('change', S4LimpiezaVidriosMediana_cantSelector);

// Limpieza de vidrios 
// S5Limpieza_de_vidrios_type_selector
// Mediana 
$("#S5Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_vidrios_type_selector_mediana"){
        $("#S5Limpieza_de_vidrios_type_selector_mediana").show();
    } else {
        $("#S5Limpieza_de_vidrios_type_selector_mediana").hide();
    }
})

function S5LimpiezaVidriosMediana_cantSelector(){
    $("#S5Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_vidrios_type_selector_mediana"){
            $("#S5Limpieza_de_vidrios_type_selector_mediana").show();
        } else {
            $("#S5Limpieza_de_vidrios_type_selector_mediana").hide();
        }
    })
}

window.addEventListener('change', S5LimpiezaVidriosMediana_cantSelector);

// Limpieza de vidrios 
// S1Limpieza_de_vidrios_type_selector
// Grande 
$("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_vidrios_type_selector_grande"){
        $("#S1Limpieza_de_vidrios_type_selector_grande").show();
    } else {
        $("#S1Limpieza_de_vidrios_type_selector_grande").hide();
    }
})

function S1LimpiezaVidriosGrande_cantSelector(){
    $("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_vidrios_type_selector_grande"){
            $("#S1Limpieza_de_vidrios_type_selector_grande").show();
        } else {
            $("#S1Limpieza_de_vidrios_type_selector_grande").hide();
        }
    })
    
}

window.addEventListener('change', S1LimpiezaVidriosGrande_cantSelector);

// Limpieza de vidrios 
// S2Limpieza_de_vidrios_type_selector
// Grande 
$("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_vidrios_type_selector_grande"){
        $("#S2Limpieza_de_vidrios_type_selector_grande").show();
    } else {
        $("#S2Limpieza_de_vidrios_type_selector_grande").hide();
    }
})

function S2LimpiezaVidriosGrande_cantSelector(){
    $("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_vidrios_type_selector_grande"){
            $("#S2Limpieza_de_vidrios_type_selector_grande").show();
        } else {
            $("#S2Limpieza_de_vidrios_type_selector_grande").hide();
        }
    })
}

window.addEventListener('change', S2LimpiezaVidriosGrande_cantSelector);

// Limpieza de vidrios 
// S3Limpieza_de_vidrios_type_selector
// Grande 
$("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_vidrios_type_selector_grande"){
        $("#S3Limpieza_de_vidrios_type_selector_grande").show();
    } else {
        $("#S3Limpieza_de_vidrios_type_selector_grande").hide();
    }
})

function S3LimpiezaVidriosGrande_cantSelector(){
    $("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_vidrios_type_selector_grande"){
            $("#S3Limpieza_de_vidrios_type_selector_grande").show();
        } else {
            $("#S3Limpieza_de_vidrios_type_selector_grande").hide();
        }
    })
    
}

window.addEventListener('change', S3LimpiezaVidriosGrande_cantSelector);

// Limpieza de vidrios 
// S4Limpieza_de_vidrios_type_selector
// Grande 
$("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_vidrios_type_selector_grande"){
        $("#S4Limpieza_de_vidrios_type_selector_grande").show();
    } else {
        $("#S4Limpieza_de_vidrios_type_selector_grande").hide();
    }
})

function S4LimpiezaVidriosGrande_cantSelector(){
    $("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_vidrios_type_selector_grande"){
            $("#S4Limpieza_de_vidrios_type_selector_grande").show();
        } else {
            $("#S4Limpieza_de_vidrios_type_selector_grande").hide();
        }
    })
}

window.addEventListener('change', S4LimpiezaVidriosGrande_cantSelector);

// Limpieza de vidrios 
// S1Limpieza_de_vidrios_type_selector
// Extra Grande 
$("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_vidrios_type_selector_extraGrande"){
        $("#S1Limpieza_de_vidrios_type_selector_extraGrande").show();
    } else {
        $("#S1Limpieza_de_vidrios_type_selector_extraGrande").hide();
    }
})

function S1LimpiezaVidriosExtraGrande_cantSelector(){
    $("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_vidrios_type_selector_extraGrande"){
            $("#S1Limpieza_de_vidrios_type_selector_extraGrande").show();
        } else {
            $("#S1Limpieza_de_vidrios_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S1LimpiezaVidriosExtraGrande_cantSelector);

// Limpieza de vidrios 
// S2Limpieza_de_vidrios_type_selector
// Extra Grande 
$("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_vidrios_type_selector_extraGrande"){
        $("#S2Limpieza_de_vidrios_type_selector_extraGrande").show();
    } else {
        $("#S2Limpieza_de_vidrios_type_selector_extraGrande").hide();
    }
})

function S2LimpiezaVidriosExtraGrande_cantSelector(){
    $("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_vidrios_type_selector_extraGrande"){
            $("#S2Limpieza_de_vidrios_type_selector_extraGrande").show();
        } else {
            $("#S2Limpieza_de_vidrios_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S2LimpiezaVidriosExtraGrande_cantSelector);

// Limpieza de vidrios 
// S3Limpieza_de_vidrios_type_selector
// Extra Grande 
$("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_vidrios_type_selector_extraGrande"){
        $("#S3Limpieza_de_vidrios_type_selector_extraGrande").show();
    } else {
        $("#S3Limpieza_de_vidrios_type_selector_extraGrande").hide();
    }
})

function S3LimpiezaVidriosExtraGrande_cantSelector(){
    $("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_vidrios_type_selector_extraGrande"){
            $("#S3Limpieza_de_vidrios_type_selector_extraGrande").show();
        } else {
            $("#S3Limpieza_de_vidrios_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S3LimpiezaVidriosExtraGrande_cantSelector);

// Limpieza de vidrios 
// S4Limpieza_de_vidrios_type_selector
// Extra Grande 
$("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_vidrios_type_selector_extraGrande"){
        $("#S4Limpieza_de_vidrios_type_selector_extraGrande").show();
    } else {
        $("#S4Limpieza_de_vidrios_type_selector_extraGrande").hide();
    }
})

function S4LimpiezaVidriosExtraGrande_cantSelector(){
    $("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_vidrios_type_selector_extraGrande"){
            $("#S4Limpieza_de_vidrios_type_selector_extraGrande").show();
        } else {
            $("#S4Limpieza_de_vidrios_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S4LimpiezaVidriosExtraGrande_cantSelector);

// Limpieza de vidrios 
// S5Limpieza_de_vidrios_type_selector
// Extra Grande 
$("#S5Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_vidrios_type_selector_extraGrande"){
        $("#S5Limpieza_de_vidrios_type_selector_extraGrande").show();
    } else {
        $("#S5Limpieza_de_vidrios_type_selector_extraGrande").hide();
    }
})

function S5LimpiezaVidriosExtraGrande_cantSelector(){
    $("#S5Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_vidrios_type_selector_extraGrande"){
            $("#S5Limpieza_de_vidrios_type_selector_extraGrande").show();
        } else {
            $("#S5Limpieza_de_vidrios_type_selector_extraGrande").hide();
        }
    })
}

window.addEventListener('change', S5LimpiezaVidriosExtraGrande_cantSelector);

// Limpieza de vidrios 
// S1Limpieza_de_vidrios_type_selector
// Personalizado
$("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_vidrios_type_selector_personalizado"){
        $("#S1Limpieza_de_vidrios_type_selector_personalizado").show();
    } else {
        $("#S1Limpieza_de_vidrios_type_selector_personalizado").hide();
    }
})

function S1LimpiezaVidriosPersonalizado_cantSelector(){
    $("#S1Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_vidrios_type_selector_personalizado"){
            $("#S1Limpieza_de_vidrios_type_selector_personalizado").show();
        } else {
            $("#S1Limpieza_de_vidrios_type_selector_personalizado").hide();
        }
    })
    
}

window.addEventListener('change', S1LimpiezaVidriosPersonalizado_cantSelector);

// Limpieza de vidrios 
// S2Limpieza_de_vidrios_type_selector
// Personalizado
$("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_vidrios_type_selector_personalizado"){
        $("#S2Limpieza_de_vidrios_type_selector_personalizado").show();
    } else {
        $("#S2Limpieza_de_vidrios_type_selector_personalizado").hide();
    }
})

function S2LimpiezaVidriosPersonalizado_cantSelector(){
    $("#S2Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_vidrios_type_selector_personalizado"){
            $("#S2Limpieza_de_vidrios_type_selector_personalizado").show();
        } else {
            $("#S2Limpieza_de_vidrios_type_selector_personalizado").hide();
        }
    })
    
}

window.addEventListener('change', S2LimpiezaVidriosPersonalizado_cantSelector);

// Limpieza de vidrios 
// S3Limpieza_de_vidrios_type_selector
// Personalizado
$("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_vidrios_type_selector_personalizado"){
        $("#S3Limpieza_de_vidrios_type_selector_personalizado").show();
    } else {
        $("#S3Limpieza_de_vidrios_type_selector_personalizado").hide();
    }
})

function S3LimpiezaVidriosPersonalizado_cantSelector(){
    $("#S3Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_vidrios_type_selector_personalizado"){
            $("#S3Limpieza_de_vidrios_type_selector_personalizado").show();
        } else {
            $("#S3Limpieza_de_vidrios_type_selector_personalizado").hide();
        }
    })
    
}

window.addEventListener('change', S3LimpiezaVidriosPersonalizado_cantSelector);

// Limpieza de vidrios 
// S4Limpieza_de_vidrios_type_selector
// Personalizado
$("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_vidrios_type_selector_personalizado"){
        $("#S4Limpieza_de_vidrios_type_selector_personalizado").show();
    } else {
        $("#S4Limpieza_de_vidrios_type_selector_personalizado").hide();
    }
})

function S4LimpiezaVidriosPersonalizado_cantSelector(){
    $("#S4Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_vidrios_type_selector_personalizado"){
            $("#S4Limpieza_de_vidrios_type_selector_personalizado").show();
        } else {
            $("#S4Limpieza_de_vidrios_type_selector_personalizado").hide();
        }
    })
    
}

window.addEventListener('change', S4LimpiezaVidriosPersonalizado_cantSelector);

// Limpieza de vidrios 
// S5Limpieza_de_vidrios_type_selector
// Personalizado
$("#S5Limpieza_de_vidrios_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_vidrios_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_vidrios_type_selector_personalizado"){
        $("#S5Limpieza_de_vidrios_type_selector_personalizado").show();
    } else {
        $("#S5Limpieza_de_vidrios_type_selector_personalizado").hide();
    }
})

function S5LimpiezaVidriosPersonalizado_cantSelector(){
    $("#S5Limpieza_de_vidrios_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_vidrios_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_vidrios_type_selector_personalizado"){
            $("#S5Limpieza_de_vidrios_type_selector_personalizado").show();
        } else {
            $("#S5Limpieza_de_vidrios_type_selector_personalizado").hide();
        }
    })
    
}

window.addEventListener('change', S5LimpiezaVidriosPersonalizado_cantSelector);

/* ------------------------------------------------------------------------------------------------*/

// Limpieza de ductos 
// S1Limpieza_de_ductos_type_selector
// Chica
$("#S1Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaChica"){
        $("#S1Limpieza_de_ductos_type_selector_rejillaChica").show();
    } else {
        $("#S1Limpieza_de_ductos_type_selector_rejillaChica").hide();
    }
})

function S1LimpiezaDuctosRChica_cantSelector(){
    $("#S1Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaChica"){
            $("#S1Limpieza_de_ductos_type_selector_rejillaChica").show();
        } else {
            $("#S1Limpieza_de_ductos_type_selector_rejillaChica").hide();
        }
    })
}

window.addEventListener('change', S1LimpiezaDuctosRChica_cantSelector);

// Limpieza de ductos 
// S2Limpieza_de_ductos_type_selector
// Chica
$("#S2Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaChica"){
        $("#S2Limpieza_de_ductos_type_selector_rejillaChica").show();
    } else {
        $("#S2Limpieza_de_ductos_type_selector_rejillaChica").hide();
    }
})

function S2LimpiezaDuctosRChica_cantSelector(){
    $("#S2Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaChica"){
            $("#S2Limpieza_de_ductos_type_selector_rejillaChica").show();
        } else {
            $("#S2Limpieza_de_ductos_type_selector_rejillaChica").hide();
        }
    })
}

window.addEventListener('change', S2LimpiezaDuctosRChica_cantSelector);

// Limpieza de ductos 
// S3Limpieza_de_ductos_type_selector
// Chica
$("#S3Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaChica"){
        $("#S3Limpieza_de_ductos_type_selector_rejillaChica").show();
    } else {
        $("#S3Limpieza_de_ductos_type_selector_rejillaChica").hide();
    }
})

function S3LimpiezaDuctosRChica_cantSelector(){
    $("#S3Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaChica"){
            $("#S3Limpieza_de_ductos_type_selector_rejillaChica").show();
        } else {
            $("#S3Limpieza_de_ductos_type_selector_rejillaChica").hide();
        }
    })
}

window.addEventListener('change', S3LimpiezaDuctosRChica_cantSelector);

// Limpieza de ductos 
// S4Limpieza_de_ductos_type_selector
// Chica
$("#S4Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaChica"){
        $("#S4Limpieza_de_ductos_type_selector_rejillaChica").show();
    } else {
        $("#S4Limpieza_de_ductos_type_selector_rejillaChica").hide();
    }
})

function S4LimpiezaDuctosRChica_cantSelector(){
    $("#S4Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaChica"){
            $("#S4Limpieza_de_ductos_type_selector_rejillaChica").show();
        } else {
            $("#S4Limpieza_de_ductos_type_selector_rejillaChica").hide();
        }
    })
}

window.addEventListener('change', S4LimpiezaDuctosRChica_cantSelector);

// Limpieza de ductos 
// S5Limpieza_de_ductos_type_selector
// Chica
$("#S5Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaChica"){
        $("#S5Limpieza_de_ductos_type_selector_rejillaChica").show();
    } else {
        $("#S5Limpieza_de_ductos_type_selector_rejillaChica").hide();
    }
})

function S5LimpiezaDuctosRChica_cantSelector(){
    $("#S5Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaChica"){
            $("#S5Limpieza_de_ductos_type_selector_rejillaChica").show();
        } else {
            $("#S5Limpieza_de_ductos_type_selector_rejillaChica").hide();
        }
    })
}

window.addEventListener('change', S5LimpiezaDuctosRChica_cantSelector);

// Limpieza de ductos 
// S1Limpieza_de_ductos_type_selector
// Mediana
$("#S1Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaMediana"){
        $("#S1Limpieza_de_ductos_type_selector_rejillaMediana").show();
    } else {
        $("#S1Limpieza_de_ductos_type_selector_rejillaMediana").hide();
    }
})

function S1LimpiezaDuctosRMediana_cantSelector(){
    $("#S1Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaMediana"){
            $("#S1Limpieza_de_ductos_type_selector_rejillaMediana").show();
        } else {
            $("#S1Limpieza_de_ductos_type_selector_rejillaMediana").hide();
        }
    })
}

window.addEventListener('change', S1LimpiezaDuctosRMediana_cantSelector);

// Limpieza de ductos 
// S2Limpieza_de_ductos_type_selector
// Mediana
$("#S2Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaMediana"){
        $("#S2Limpieza_de_ductos_type_selector_rejillaMediana").show();
    } else {
        $("#S2Limpieza_de_ductos_type_selector_rejillaMediana").hide();
    }
})

function S2LimpiezaDuctosRMediana_cantSelector(){
    $("#S2Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaMediana"){
            $("#S2Limpieza_de_ductos_type_selector_rejillaMediana").show();
        } else {
            $("#S2Limpieza_de_ductos_type_selector_rejillaMediana").hide();
        }
    })
}

window.addEventListener('change', S2LimpiezaDuctosRMediana_cantSelector);

// Limpieza de ductos 
// S3Limpieza_de_ductos_type_selector
// Mediana
$("#S3Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaMediana"){
        $("#S3Limpieza_de_ductos_type_selector_rejillaMediana").show();
    } else {
        $("#S3Limpieza_de_ductos_type_selector_rejillaMediana").hide();
    }
})

function S3LimpiezaDuctosRMediana_cantSelector(){
    $("#S3Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaMediana"){
            $("#S3Limpieza_de_ductos_type_selector_rejillaMediana").show();
        } else {
            $("#S3Limpieza_de_ductos_type_selector_rejillaMediana").hide();
        }
    })
}

window.addEventListener('change', S3LimpiezaDuctosRMediana_cantSelector);

// Limpieza de ductos 
// S4Limpieza_de_ductos_type_selector
// Mediana
$("#S4Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaMediana"){
        $("#S4Limpieza_de_ductos_type_selector_rejillaMediana").show();
    } else {
        $("#S4Limpieza_de_ductos_type_selector_rejillaMediana").hide();
    }
})

function S4LimpiezaDuctosRMediana_cantSelector(){
    $("#S4Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaMediana"){
            $("#S4Limpieza_de_ductos_type_selector_rejillaMediana").show();
        } else {
            $("#S4Limpieza_de_ductos_type_selector_rejillaMediana").hide();
        }
    })
}

window.addEventListener('change', S4LimpiezaDuctosRMediana_cantSelector);

// Limpieza de ductos 
// S5Limpieza_de_ductos_type_selector
// Mediana
$("#S5Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaMediana"){
        $("#S5Limpieza_de_ductos_type_selector_rejillaMediana").show();
    } else {
        $("#S5Limpieza_de_ductos_type_selector_rejillaMediana").hide();
    }
})

function S5LimpiezaDuctosRMediana_cantSelector(){
    $("#S5Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaMediana"){
            $("#S5Limpieza_de_ductos_type_selector_rejillaMediana").show();
        } else {
            $("#S5Limpieza_de_ductos_type_selector_rejillaMediana").hide();
        }
    })
}

window.addEventListener('change', S5LimpiezaDuctosRMediana_cantSelector);

// Limpieza de ductos 
// S1Limpieza_de_ductos_type_selector
// Grande
$("#S1Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaGrande"){
        $("#S1Limpieza_de_ductos_type_selector_rejillaGrande").show();
    } else {
        $("#S1Limpieza_de_ductos_type_selector_rejillaGrande").hide();
    }
})

function S1LimpiezaDuctosRGrande_cantSelector(){
    $("#S1Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaGrande"){
            $("#S1Limpieza_de_ductos_type_selector_rejillaGrande").show();
        } else {
            $("#S1Limpieza_de_ductos_type_selector_rejillaGrande").hide();
        }
    })
    
}

window.addEventListener('change', S1LimpiezaDuctosRGrande_cantSelector);

// Limpieza de ductos 
// S2Limpieza_de_ductos_type_selector
// Grande
$("#S2Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaGrande"){
        $("#S2Limpieza_de_ductos_type_selector_rejillaGrande").show();
    } else {
        $("#S2Limpieza_de_ductos_type_selector_rejillaGrande").hide();
    }
})

function S2LimpiezaDuctosRGrande_cantSelector(){
    $("#S2Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaGrande"){
            $("#S2Limpieza_de_ductos_type_selector_rejillaGrande").show();
        } else {
            $("#S2Limpieza_de_ductos_type_selector_rejillaGrande").hide();
        }
    })
    
}

window.addEventListener('change', S2LimpiezaDuctosRGrande_cantSelector);

// Limpieza de ductos 
// S3Limpieza_de_ductos_type_selector
// Grande
$("#S3Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaGrande"){
        $("#S3Limpieza_de_ductos_type_selector_rejillaGrande").show();
    } else {
        $("#S3Limpieza_de_ductos_type_selector_rejillaGrande").hide();
    }
})

function S3LimpiezaDuctosRGrande_cantSelector(){
    $("#S3Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaGrande"){
            $("#S3Limpieza_de_ductos_type_selector_rejillaGrande").show();
        } else {
            $("#S3Limpieza_de_ductos_type_selector_rejillaGrande").hide();
        }
    })
    
}

window.addEventListener('change', S3LimpiezaDuctosRGrande_cantSelector);

// Limpieza de ductos 
// S4Limpieza_de_ductos_type_selector
// Grande
$("#S4Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaGrande"){
        $("#S4Limpieza_de_ductos_type_selector_rejillaGrande").show();
    } else {
        $("#S4Limpieza_de_ductos_type_selector_rejillaGrande").hide();
    }
})

function S4LimpiezaDuctosRGrande_cantSelector(){
    $("#S4Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaGrande"){
            $("#S4Limpieza_de_ductos_type_selector_rejillaGrande").show();
        } else {
            $("#S4Limpieza_de_ductos_type_selector_rejillaGrande").hide();
        }
    })
    
}

window.addEventListener('change', S4LimpiezaDuctosRGrande_cantSelector);

// Limpieza de ductos 
// S5Limpieza_de_ductos_type_selector
// Grande
$("#S5Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaGrande"){
        $("#S5Limpieza_de_ductos_type_selector_rejillaGrande").show();
    } else {
        $("#S5Limpieza_de_ductos_type_selector_rejillaGrande").hide();
    }
})

function S5LimpiezaDuctosRGrande_cantSelector(){
    $("#S5Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaGrande"){
            $("#S5Limpieza_de_ductos_type_selector_rejillaGrande").show();
        } else {
            $("#S5Limpieza_de_ductos_type_selector_rejillaGrande").hide();
        }
    })
    
}

window.addEventListener('change', S5LimpiezaDuctosRGrande_cantSelector);

// Limpieza de ductos 
// S1Limpieza_de_ductos_type_selector
// Extra Grande
$("#S1Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
        $("#S1Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
    } else {
        $("#S1Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
    }
})

function S1LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S1Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
            $("#S1Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
        } else {
            $("#S1Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
        }
    })    
}

window.addEventListener('change', S1LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S2Limpieza_de_ductos_type_selector
// Extra Grande
$("#S2Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
        $("#S2Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
    } else {
        $("#S2Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
    }
})

function S2LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S2Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
            $("#S2Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
        } else {
            $("#S2Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
        }
    })    
}

window.addEventListener('change', S2LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S3Limpieza_de_ductos_type_selector
// Extra Grande
$("#S3Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
        $("#S3Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
    } else {
        $("#S3Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
    }
})

function S3LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S3Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
            $("#S3Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
        } else {
            $("#S3Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
        }
    })    
}

window.addEventListener('change', S3LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S4Limpieza_de_ductos_type_selector
// Extra Grande
$("#S4Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
        $("#S4Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
    } else {
        $("#S4Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
    }
})

function S4LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S4Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
            $("#S4Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
        } else {
            $("#S4Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
        }
    })    
}

window.addEventListener('change', S4LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S5Limpieza_de_ductos_type_selector
// Extra Grande
$("#S5Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
        $("#S5Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
    } else {
        $("#S5Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
    }
})

function S5LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S5Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaExtraGrande"){
            $("#S5Limpieza_de_ductos_type_selector_rejillaExtraGrande").show();
        } else {
            $("#S5Limpieza_de_ductos_type_selector_rejillaExtraGrande").hide();
        }
    })    
}

window.addEventListener('change', S5LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S1Limpieza_de_ductos_type_selector
// Personalizado
$("#S1Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
        $("#S1Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
    } else {
        $("#S1Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
    }
})

function S1LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S1Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
            $("#S1Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
        } else {
            $("#S1Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
        }
    })
      
}

window.addEventListener('change', S1LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S2Limpieza_de_ductos_type_selector
// Personalizado
$("#S2Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
        $("#S2Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
    } else {
        $("#S2Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
    }
})

function S2LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S2Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
            $("#S2Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
        } else {
            $("#S2Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
        }
    })
      
}

window.addEventListener('change', S2LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S3Limpieza_de_ductos_type_selector
// Personalizado
$("#S3Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
        $("#S3Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
    } else {
        $("#S3Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
    }
})

function S3LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S3Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
            $("#S3Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
        } else {
            $("#S3Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
        }
    })
      
}

window.addEventListener('change', S3LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S4Limpieza_de_ductos_type_selector
// Personalizado
$("#S4Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
        $("#S4Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
    } else {
        $("#S4Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
    }
})

function S4LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S4Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
            $("#S4Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
        } else {
            $("#S4Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
        }
    })
      
}

window.addEventListener('change', S4LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S5Limpieza_de_ductos_type_selector
// Personalizado
$("#S5Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
        $("#S5Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
    } else {
        $("#S5Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
    }
})

function S5LimpiezaDuctosRExtraGrande_cantSelector(){
    $("#S5Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_de_ductos_type_selector_rejillaPersonalizado"){
            $("#S5Limpieza_de_ductos_type_selector_rejillaPersonalizado").show();
        } else {
            $("#S5Limpieza_de_ductos_type_selector_rejillaPersonalizado").hide();
        }
    })
      
}

window.addEventListener('change', S5LimpiezaDuctosRExtraGrande_cantSelector);

// Limpieza de ductos 
// S1Limpieza_profunda
// Personalizado
$("#S1Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_profunda"){
        $("#S1Limpieza_profunda").show();
    } else {
        $("#S1Limpieza_profunda").hide();
    }
})

function S1LimpiezaProfunda_cantSelector(){
    $("#S1Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_profunda"){
            $("#S1Limpieza_profunda").show();
        } else {
            $("#S1Limpieza_profunda").hide();
        }
    })
      
}

window.addEventListener('change', S1LimpiezaProfunda_cantSelector);

// Limpieza de ductos 
// S2Limpieza_profunda
// Personalizado
$("#S2Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S2Limpieza_profunda"){
        $("#S2Limpieza_profunda").show();
    } else {
        $("#S2Limpieza_profunda").hide();
    }
})

function S2LimpiezaProfunda_cantSelector(){
    $("#S2Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S2Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S2Limpieza_profunda"){
            $("#S2Limpieza_profunda").show();
        } else {
            $("#S2Limpieza_profunda").hide();
        }
    })
      
}

window.addEventListener('change', S2LimpiezaProfunda_cantSelector);

// Limpieza de ductos 
// S3Limpieza_profunda
// Personalizado
$("#S3Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S3Limpieza_profunda"){
        $("#S3Limpieza_profunda").show();
    } else {
        $("#S3Limpieza_profunda").hide();
    }
})

function S3LimpiezaProfunda_cantSelector(){
    $("#S3Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S3Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S3Limpieza_profunda"){
            $("#S3Limpieza_profunda").show();
        } else {
            $("#S3Limpieza_profunda").hide();
        }
    })
      
}

window.addEventListener('change', S3LimpiezaProfunda_cantSelector);

// Limpieza de ductos 
// S4Limpieza_profunda
// Personalizado
$("#S4Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S4Limpieza_profunda"){
        $("#S4Limpieza_profunda").show();
    } else {
        $("#S4Limpieza_profunda").hide();
    }
})

function S4LimpiezaProfunda_cantSelector(){
    $("#S4Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S4Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S4Limpieza_profunda"){
            $("#S4Limpieza_profunda").show();
        } else {
            $("#S4Limpieza_profunda").hide();
        }
    })
      
}

window.addEventListener('change', S4LimpiezaProfunda_cantSelector);

// Limpieza de ductos 
// S5Limpieza_profunda
// Personalizado
$("#S5Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S5Limpieza_profunda"){
        $("#S5Limpieza_profunda").show();
    } else {
        $("#S5Limpieza_profunda").hide();
    }
})

function S5LimpiezaProfunda_cantSelector(){
    $("#S5Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S5Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S5Limpieza_profunda"){
            $("#S5Limpieza_profunda").show();
        } else {
            $("#S5Limpieza_profunda").hide();
        }
    })
      
}

window.addEventListener('change', S5LimpiezaProfunda_cantSelector);


// Limpieza de ductos 
// S1Limpieza_profunda
// Personalizado
$("#S1Limpieza_de_ductos_type_selector").on("change", function() {
    var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "S1Limpieza_general"){
        $("#S1Limpieza_general").show();
    } else {
        $("#S1Limpieza_general").hide();
    }
})

function S1LimpiezaProfunda_cantSelector(){
    $("#S1Limpieza_de_ductos_type_selector").on("change", function() {
        var e1 = document.getElementById("S1Limpieza_de_ductos_type_selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "S1Limpieza_general"){
            $("#S1Limpieza_general").show();
        } else {
            $("#S1Limpieza_general").hide();
        }
    })
      
}

window.addEventListener('change', S1LimpiezaProfunda_cantSelector);






/* ------------------------------------------------------------------------------------------------*/

