console.log("cot.js is connected");
$("#Lavado_de_alfombra").hide();

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

function cambioHorarioDeServicio(){
    //Value
    //var e = document.getElementById("ddlViewBy");
    //var strUser = e.options[e.selectedIndex].value;
    //Text
    var e = document.getElementById("calendarioHorario");
    var horarioServicio = e.options[e.selectedIndex].text;
}

window.addEventListener('change', cambioHorarioDeServicio);




//Servicio
$("#service-selector").on("change", function() {
    var e = document.getElementById("service-selector");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "Lavado_de_alfombra"){
        $("#Lavado_de_alfombra").show();
    } else {
        $("#Lavado_de_alfombra").hide();
    }

    if(cant == "Lavado_de_sillones"){
        $("#Lavado_de_sillones").show();
    } else {
        $("#Lavado_de_sillones").hide();
    }

    if(cant == "Lavado_de_sillas"){
        $("#Lavado_de_sillas").show();
    } else {
        $("#Lavado_de_sillas").hide();
    }

    if(cant == "Lavado_de_colchones"){
        $("#Lavado_de_colchones").show();
    } else {
        $("#Lavado_de_colchones").hide();
    }

    if(cant == "Lavado_de_int_de_autos"){
        $("#Lavado_de_int_de_autos").show();
    } else {
        $("#Lavado_de_int_de_autos").hide();
    }

    if(cant == "Lavado_de_pisos"){
        $("#Lavado_de_pisos").show();
    } else {
        $("#Lavado_de_pisos").hide();
    }

    if(cant == "Pulido_de_pisos"){
        $("#Pulido_de_pisos").show();
    } else{
        $("Pulido_de_pisos").hide();
    }

    if(cant == "Sanitizacion"){
        $("#Sanitizacion").show();
    } else {
        $("#Sanitizacion").hide();
    }

    if(cant == "Limpieza_de_vidrios"){
        $("#Limpieza_de_vidrios").show();
    } else {
        $("#Limpieza_de_vidrios").hide();
    }

    if(cant == "Limpieza_profunda"){
        $("#Limpieza_profunda").show();
    } else {
        $("#Limpieza_profunda").hide();
    }

    if(cant == "Limpieza_general"){
        $("#Limpieza_general").show();
    } else {
        $("#Limpieza_general").hide();
    }

    if(cant == "Limpieza_de_ductos"){
        $("#Limpieza_de_ductos").show();
    } else {
        $("#Limpieza_de_ductos").hide();
    }
})

function serviceSelector(){
    $("#service-selector").on("change", function() {
        var e = document.getElementById("service-selector");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "Lavado_de_alfombra"){
            $("#Lavado_de_alfombra").show();
        } else {
            $("#Lavado_de_alfombra").hide();
        }
    
        if(cant == "Lavado_de_sillones"){
            $("#Lavado_de_sillones").show();
        } else {
            $("#Lavado_de_sillones").hide();
        }
    
        if(cant == "Lavado_de_sillas"){
            $("#Lavado_de_sillas").show();
        } else {
            $("#Lavado_de_sillas").hide();
        }
    
        if(cant == "Lavado_de_colchones"){
            $("#Lavado_de_colchones").show();
        } else {
            $("#Lavado_de_colchones").hide();
        }
    
        if(cant == "Lavado_de_int_de_autos"){
            $("#Lavado_de_int_de_autos").show();
        } else {
            $("#Lavado_de_int_de_autos").hide();
        }
    
        if(cant == "Lavado_de_pisos"){
            $("#Lavado_de_pisos").show();
        } else {
            $("#Lavado_de_pisos").hide();
        }
    
        if(cant == "Pulido_de_pisos"){
            $("#Pulido_de_pisos").show();
        } else{
            $("Pulido_de_pisos").hide();
        }
    
        if(cant == "Sanitizacion"){
            $("#Sanitizacion").show();
        } else {
            $("#Sanitizacion").hide();
        }
    
        if(cant == "Limpieza_de_vidrios"){
            $("#Limpieza_de_vidrios").show();
        } else {
            $("#Limpieza_de_vidrios").hide();
        }
    
        if(cant == "Limpieza_profunda"){
            $("#Limpieza_profunda").show();
        } else {
            $("#Limpieza_profunda").hide();
        }
    
        if(cant == "Limpieza_general"){
            $("#Limpieza_general").show();
        } else {
            $("#Limpieza_general").hide();
        }
    
        if(cant == "Limpieza_de_ductos"){
            $("#Limpieza_de_ductos").show();
        } else {
            $("#Limpieza_de_ductos").hide();
        }
    })
}

window.addEventListener('change', serviceSelector);




//Lavado de alfombra cant
$("#alfombra-cant-selector").on("change", function(){
    var e = document.getElementById("alfombra-cant-selector");
    var tipoDeServicio = e.options[e.selectedIndex].value;
    
    if(tipoDeServicio == "cantOtra"){
        $("#" + $(this).val()).show();
    } else{
        $("#cantOtra").hide();
    }
})

function alfombraCantSelect(){
    $("#alfombra-cant-selector").on("change", function(){
        var e = document.getElementById("alfombra-cant-selector");
        var tipoDeServicio = e.options[e.selectedIndex].value;
        console.log(tipoDeServicio);
        if(tipoDeServicio == "alfombra1"){
            $("#" + $(this).val()).show();
        } else{
            $("#alfombra1").hide();
        } 
        
        if(tipoDeServicio == "alfombras2"){
            $("#" + $(this).val()).show();
        } else{
            $("#alfombras2").hide();
        }
        
        if(tipoDeServicio == "alfombras3"){
            $("#" + $(this).val()).show();
        } else {
            $("#alfombras3").hide();
        }
        
        if(tipoDeServicio == "alfombras4"){
            $("#" + $(this).val()).show();
        } else {
            $("#alfombras4").hide();
        } 
        
        if(tipoDeServicio == "alfombras5"){
            $("#" + $(this).val()).show();
        } else{
            $("#alfombras5").hide();
        }
        
        if (tipoDeServicio == "cantOtra"){
            $("#" + $(this).val()).show();
        } else{
            $("#cantOtra").hide();
        }
    })
}

window.addEventListener('change', alfombraCantSelect);



// Lavado alfombra agregar campos en base al campo de #cantOtra
function agregarCampos(){
    $("#cantOtra .text").show();
    var number = document.getElementById("cantServices").value;
    var container = document.getElementById("container");
    
    if(number > 10){
        number = 10;
        document.getElementById("cantServices").text = "10";
        document.getElementById("cantServices").value = "10";
    } else if (number < 5){
        number = 5;
        document.getElementById("cantServices").text = "5";
        document.getElementById("cantServices").value = "5";
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Alfombra " + (i+1) + ": "));
        var input = document.createElement("input");
        var input2 = document.createElement("input");
        input.type = "text";
        input2.type = "text";
        container.appendChild(input);
        container.append(" X ")
        container.appendChild(input2);
        container.appendChild(document.createElement("br"));
    }
}




//Lavado de alfombra - alfombra1 - cantOtra
$("#alfombra1-type-selector").on("change", function() {
    var e = document.getElementById("alfombra1-type-selector");
    var cant = e.options[e.selectedIndex].value;
    if(cant == "Otro"){
        $("#" + $(this).val()).show();
    } else {
        $("#Otro1").hide();
    }
})

function alfombra1CantOtra(){
    $("#alfombra1-type-selector").on("change", function() {
        var e = document.getElementById("alfombra1-type-selector");
        var cant = e.options[e.selectedIndex].value;
        if(cant == "Otro1"){
            $("#" + $(this).val()).show();
        } else {
            $("#Otro1").hide();
        }
    })
}

window.addEventListener('change', alfombra1CantOtra);




//Lavado de alfombra - alfombra2 - cantOtra
$("#alfombra2-1-type-selector").on("change", function() {
    var e1 = document.getElementById("alfombra2-1-type-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    console.log(cant1);
    if(cant1 == "Otro2"){
        $("#Otro2").show();
    } else {
        $("#Otro2").hide();
    }
})

$("#alfombra2-2-type-selector").on("change", function() {
    var e2 = document.getElementById("alfombra2-2-type-selector");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "Otro2-2"){
        $("#Otro2-2").show();
    } else {
        $("#Otro2-2").hide();
    }
})


function alfombra2_1CantOtra(){
    $("#alfombra2-1-type-selector").on("change", function() {
        var e1 = document.getElementById("alfombra2-1-type-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        console.log(cant1);
        if(cant1 == "Otro2"){
            $("#Otro2").show();
        } else {
            $("#Otro2").hide();
        }
    })
}

function alfombra2_2CantOtra(){
    $("#alfombra2-2-type-selector").on("change", function() {
        var e2 = document.getElementById("alfombra2-2-type-selector");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "Otro2-2"){
            $("#Otro2-2").show();
        } else {
            $("#Otro2-2").hide();
        }
    })
}

window.addEventListener('change', alfombra2_1CantOtra);
window.addEventListener('change', alfombra2_2CantOtra);




//Lavado de alfombra - alfombra3 - cantOtra
$("#alfombra3-1-type-selector").on("change", function() {
    var e1 = document.getElementById("alfombra3-1-type-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    console.log(cant1);
    if(cant1 == "Otro3"){
        $("#Otro3").show();
    } else {
        $("#Otro3").hide();
    }
})

$("#alfombra3-2-type-selector").on("change", function() {
    var e2 = document.getElementById("alfombra3-2-type-selector");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "Otro3-2"){
        $("#Otro3-2").show();
    } else {
        $("#Otro3-2").hide();
    }
})

$("#alfombra3-3-type-selector").on("change", function() {
    var e3 = document.getElementById("alfombra3-3-type-selector");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "Otro3-3"){
        $("#Otro3-3").show();
    } else {
        $("#Otro3-3").hide();
    }
})

function alfombra3_1CantOtra(){
    $("#alfombra3-1-type-selector").on("change", function() {
        var e1 = document.getElementById("alfombra3-1-type-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        console.log(cant1);
        if(cant1 == "Otro3"){
            $("#Otro3").show();
        } else {
            $("#Otro3").hide();
        }
    })
}

function alfombra3_2CantOtra(){
    $("#alfombra3-2-type-selector").on("change", function() {
        var e2 = document.getElementById("alfombra3-2-type-selector");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "Otro3-2"){
            $("#Otro3-2").show();
        } else {
            $("#Otro3-2").hide();
        }
    })
}

function alfombra3_3CantOtra(){
    $("#alfombra3-3-type-selector").on("change", function() {
        var e3 = document.getElementById("alfombra3-3-type-selector");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "Otro3-3"){
            $("#Otro3-3").show();
        } else {
            $("#Otro3-3").hide();
        }
    })    
}

window.addEventListener('change', alfombra2_1CantOtra);
window.addEventListener('change', alfombra2_2CantOtra);
window.addEventListener('change', alfombra3_3CantOtra);




//Lavado de alfombra - alfombra4 - cantOtra
$("#alfombra4-1-type-selector").on("change", function() {
    var e1 = document.getElementById("alfombra4-1-type-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    console.log(cant1);
    if(cant1 == "Otro4"){
        $("#Otro4").show();
    } else {
        $("#Otro4").hide();
    }
})

$("#alfombra4-2-type-selector").on("change", function() {
    var e2 = document.getElementById("alfombra4-2-type-selector");
    var cant2 = e2.options[e2.selectedIndex].value;
    if(cant2 == "Otro4-2"){
        $("#Otro4-2").show();
    } else {
        $("#Otro4-2").hide();
    }
})

$("#alfombra4-3-type-selector").on("change", function() {
    var e3 = document.getElementById("alfombra4-3-type-selector");
    var cant3 = e3.options[e3.selectedIndex].value;
    if(cant3 == "Otro4-3"){
        $("#Otro4-3").show();
    } else {
        $("#Otro4-3").hide();
    }
})

$("#alfombra4-4-type-selector").on("change", function() {
    var e4 = document.getElementById("alfombra4-4-type-selector");
    var cant4 = e4.options[e4.selectedIndex].value;
    if(cant4 == "Otro4-4"){
        $("#Otro4-4").show();
    } else {
        $("#Otro4-4").hide();
    }
})

function alfombra4_1CantOtra(){
    $("#alfombra4-1-type-selector").on("change", function() {
        var e1 = document.getElementById("alfombra4-1-type-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        console.log(cant1);
        if(cant1 == "Otro4"){
            $("#Otro4").show();
        } else {
            $("#Otro4").hide();
        }
    })
}

function alfombra4_2CantOtra(){
    $("#alfombra4-2-type-selector").on("change", function() {
        var e2 = document.getElementById("alfombra4-2-type-selector");
        var cant2 = e2.options[e2.selectedIndex].value;
        if(cant2 == "Otro4-2"){
            $("#Otro4-2").show();
        } else {
            $("#Otro4-2").hide();
        }
    })
}

function alfombra4_3CantOtra(){
    $("#alfombra4-3-type-selector").on("change", function() {
        var e3 = document.getElementById("alfombra4-3-type-selector");
        var cant3 = e3.options[e3.selectedIndex].value;
        if(cant3 == "Otro4-3"){
            $("#Otro4-3").show();
        } else {
            $("#Otro4-3").hide();
        }
    })  
}

function alfombra4_4CantOtra(){
    $("#alfombra4-4-type-selector").on("change", function() {
        var e4 = document.getElementById("alfombra4-4-type-selector");
        var cant4 = e4.options[e4.selectedIndex].value;
        if(cant4 == "Otro4-4"){
            $("#Otro4-4").show();
        } else {
            $("#Otro4-4").hide();
        }
    })
}

window.addEventListener('change', alfombra4_1CantOtra);
window.addEventListener('change', alfombra4_2CantOtra);
window.addEventListener('change', alfombra4_3CantOtra);
window.addEventListener('change', alfombra4_4CantOtra);

/* Lavado de sillones - 1 pieza */
$("#sillones-cant-selector").on("change", function() {
    var e1 = document.getElementById("sillones-cant-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "pieza1"){
        $("#pieza1").show();
    } else {
        $("#pieza1").hide();
    }
})


function sillones_cantSelector(){
    $("#sillones-cant-selector").on("change", function() {
        var e1 = document.getElementById("sillones-cant-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "pieza1"){
            $("#pieza1").show();
        } else {
            $("#pieza1").hide();
        }
    })
}

window.addEventListener('change', sillones_cantSelector);


/* Lavado de sillones - 1 pieza - Otro */
$("#pieza1-type-selector").on("change", function() {
    var e1 = document.getElementById("pieza1-type-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "pieza1Otro"){
        $("#pieza1Otro").show();
    } else {
        $("#pieza1Otro").hide();
    }
})

function sillonesPieza1Otro_cantSelector(){
    $("#pieza1-type-selector").on("change", function() {
        var e1 = document.getElementById("pieza1-type-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "pieza1Otro"){
            $("#pieza1Otro").show();
        } else {
            $("#pieza1Otro").hide();
        }
    })
}

window.addEventListener('change', sillonesPieza1Otro_cantSelector);

/* Lavado de sillones - 2 piezas */
$("#sillones-cant-selector").on("change", function() {
    var e1 = document.getElementById("sillones-cant-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "piezas2"){
        $("#piezas2").show();
    } else {
        $("#piezas2").hide();
    }
})


function sillones2_cantSelector(){
    $("#sillones-cant-selector").on("change", function() {
        var e1 = document.getElementById("sillones-cant-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "piezas2"){
            $("#piezas2").show();
        } else {
            $("#piezas2").hide();
        }
    })
}

window.addEventListener('change', sillones2_cantSelector);


/* Lavado de sillones - 2 piezas - Otro */
$("#piezas2-type-selector").on("change", function() {
    var e1 = document.getElementById("piezas2-type-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "pieza2Otro"){
        $("#pieza2Otro").show();
    } else {
        $("#pieza2Otro").hide();
    }
})

function sillonesPieza2Otro_cantSelector(){
    $("#piezas2-type-selector").on("change", function() {
        var e1 = document.getElementById("piezas2-type-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "pieza2Otro"){
            $("#pieza2Otro").show();
        } else {
            $("#pieza2Otro").hide();
        }
    })
}

window.addEventListener('change', sillonesPieza2Otro_cantSelector);


/* Lavado de sillones - 3 piezas */
$("#sillones-cant-selector").on("change", function() {
    var e1 = document.getElementById("sillones-cant-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "piezas3"){
        $("#piezas3").show();
    } else {
        $("#piezas3").hide();
    }
})


function sillones3_cantSelector(){
    $("#sillones-cant-selector").on("change", function() {
        var e1 = document.getElementById("sillones-cant-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "piezas3"){
            $("#piezas3").show();
        } else {
            $("#piezas3").hide();
        }
    })
}

window.addEventListener('change', sillones3_cantSelector);

/* Lavado de sillones - 3 piezas - Otro */
$("#piezas3-type-selector").on("change", function() {
    var e1 = document.getElementById("piezas3-type-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "pieza3Otro"){
        $("#pieza3Otro").show();
    } else {
        $("#pieza3Otro").hide();
    }
})

function sillonesPieza3Otro_cantSelector(){
    var e1 = document.getElementById("piezas3-type-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "pieza3Otro"){
        $("#pieza3Otro").show();
    } else {
        $("#pieza3Otro").hide();
    }
}

window.addEventListener('change', sillonesPieza3Otro_cantSelector);

/* Lavado de sillas - asiento - Otro */
$("#sillas-tipo-selector").on("change", function() {
    var e1 = document.getElementById("sillas-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "asiento"){
        $("#asiento").show();
    } else {
        $("#asiento").hide();
    }
})

function sillasAsientoOtro_cantSelector(){
    $("#sillas-tipo-selector").on("change", function() {
        var e1 = document.getElementById("sillas-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "asiento"){
            $("#asiento").show();
        } else {
            $("#asiento").hide();
        }
    })
    
}

window.addEventListener('change', sillasAsientoOtro_cantSelector);


/* Lavado de sillas - respaldo - Otro */
$("#sillas-tipo-selector").on("change", function() {
    var e1 = document.getElementById("sillas-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "respaldo"){
        $("#respaldo").show();
    } else {
        $("#respaldo").hide();
    }
})

function sillasRespaldoOtro_cantSelector(){
    $("#sillas-tipo-selector").on("change", function() {
        var e1 = document.getElementById("sillas-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "respaldo"){
            $("#respaldo").show();
        } else {
            $("#respaldo").hide();
        }
    })
    
}

window.addEventListener('change', sillasRespaldoOtro_cantSelector);

/* Lavado de sillas - ambos - Otro */
$("#sillas-tipo-selector").on("change", function() {
    var e1 = document.getElementById("sillas-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "ambos"){
        $("#ambos").show();
    } else {
        $("#ambos").hide();
    }
})

function sillasRespaldoOtro_cantSelector(){
    $("#sillas-tipo-selector").on("change", function() {
        var e1 = document.getElementById("sillas-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "ambos"){
            $("#ambos").show();
        } else {
            $("#ambos").hide();
        }
    })
    
}

window.addEventListener('change', sillasRespaldoOtro_cantSelector);

/* Lavado de colchones - Individual */
$("#colchon-tipo-selector").on("change", function() {
    var e1 = document.getElementById("colchon-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "individual"){
        $("#individual").show();
    } else {
        $("#individual").hide();
    }
})

function colchonesIndividual_cantSelector(){
    $("#colchon-tipo-selector").on("change", function() {
        var e1 = document.getElementById("colchon-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "individual"){
            $("#individual").show();
        } else {
            $("#individual").hide();
        }
    })
    
}

window.addEventListener('change', colchonesIndividual_cantSelector);


/* Lavado de colchones - Matrimonial */
$("#colchon-tipo-selector").on("change", function() {
    var e1 = document.getElementById("colchon-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "matrimonial"){
        $("#matrimonial").show();
    } else {
        $("#matrimonial").hide();
    }
})

function colchonesMatrimonial_cantSelector(){
    $("#colchon-tipo-selector").on("change", function() {
        var e1 = document.getElementById("colchon-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "matrimonial"){
            $("#matrimonial").show();
        } else {
            $("#matrimonial").hide();
        }
    })
}

window.addEventListener('change', colchonesMatrimonial_cantSelector);


/* Lavado de colchones - Queen */
$("#colchon-tipo-selector").on("change", function() {
    var e1 = document.getElementById("colchon-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "queen"){
        $("#queen").show();
    } else {
        $("#queen").hide();
    }
})

function colchonesQueen_cantSelector(){
    $("#colchon-tipo-selector").on("change", function() {
        var e1 = document.getElementById("colchon-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "queen"){
            $("#queen").show();
        } else {
            $("#queen").hide();
        }
    })
}

window.addEventListener('change', colchonesQueen_cantSelector);


/* Lavado de colchones - King */
$("#colchon-tipo-selector").on("change", function() {
    var e1 = document.getElementById("colchon-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "king"){
        $("#king").show();
    } else {
        $("#king").hide();
    }
})

function colchonesKing_cantSelector(){
    $("#colchon-tipo-selector").on("change", function() {
        var e1 = document.getElementById("colchon-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "king"){
            $("#king").show();
        } else {
            $("#king").hide();
        }
    })
}

window.addEventListener('change', colchonesKing_cantSelector);


/* Lavado de colchones - CKing */
$("#colchon-tipo-selector").on("change", function() {
    var e1 = document.getElementById("colchon-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "cking"){
        $("#cking").show();
    } else {
        $("#cking").hide();
    }
})

function colchonesCKing_cantSelector(){
    $("#colchon-tipo-selector").on("change", function() {
        var e1 = document.getElementById("colchon-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "cking"){
            $("#cking").show();
        } else {
            $("#cking").hide();
        }
    })
}

window.addEventListener('change', colchonesCKing_cantSelector);

/* Lavado de colchones - SCama */
$("#colchon-tipo-selector").on("change", function() {
    var e1 = document.getElementById("colchon-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "scama"){
        $("#scama").show();
    } else {
        $("#scama").hide();
    }
})

function colchonesSCama_cantSelector(){
    $("#colchon-tipo-selector").on("change", function() {
        var e1 = document.getElementById("colchon-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "scama"){
            $("#scama").show();
        } else {
            $("#scama").hide();
        }
    })
}

window.addEventListener('change', colchonesSCama_cantSelector);

/* Lavado de auto - Extra chico */
$("#auto-tipo-selector").on("change", function() {
    var e1 = document.getElementById("auto-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "echico"){
        $("#echico").show();
    } else {
        $("#echico").hide();
    }
})

function autoEChico_cantSelector(){
    $("#auto-tipo-selector").on("change", function() {
        var e1 = document.getElementById("auto-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "echico"){
            $("#echico").show();
        } else {
            $("#echico").hide();
        }
    })
}

window.addEventListener('change', autoEChico_cantSelector);

/* Lavado de auto - Chico */
$("#auto-tipo-selector").on("change", function() {
    var e1 = document.getElementById("auto-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "chico"){
        $("#chico").show();
    } else {
        $("#chico").hide();
    }
})

function autoChico_cantSelector(){
    $("#auto-tipo-selector").on("change", function() {
        var e1 = document.getElementById("auto-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "chico"){
            $("#chico").show();
        } else {
            $("#chico").hide();
        }
    })
}

window.addEventListener('change', autoChico_cantSelector);

/* Lavado de auto - Regular */
$("#auto-tipo-selector").on("change", function() {
    var e1 = document.getElementById("auto-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "regular"){
        $("#regular").show();
    } else {
        $("#regular").hide();
    }
})

function autoRegular_cantSelector(){
    $("#auto-tipo-selector").on("change", function() {
        var e1 = document.getElementById("auto-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "regular"){
            $("#regular").show();
        } else {
            $("#regular").hide();
        }
    })
}

window.addEventListener('change', autoRegular_cantSelector);

/* Lavado de auto - Grande */
$("#auto-tipo-selector").on("change", function() {
    var e1 = document.getElementById("auto-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "grande"){
        $("#grande").show();
    } else {
        $("#grande").hide();
    }
})

function autoGrande_cantSelector(){
    $("#auto-tipo-selector").on("change", function() {
        var e1 = document.getElementById("auto-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "grande"){
            $("#grande").show();
        } else {
            $("#grande").hide();
        }
    })
}

window.addEventListener('change', autoGrande_cantSelector);

/* Lavado de auto - Extra grande */
$("#auto-tipo-selector").on("change", function() {
    var e1 = document.getElementById("auto-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "egrande"){
        $("#egrande").show();
    } else {
        $("#egrande").hide();
    }
})

function autoEGrande_cantSelector(){
    $("#auto-tipo-selector").on("change", function() {
        var e1 = document.getElementById("auto-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "egrande"){
            $("#egrande").show();
        } else {
            $("#egrande").hide();
        }
    })
}

window.addEventListener('change', autoEGrande_cantSelector);

/* Lavado de piso - Ceramica */
$("#pisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("pisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "ceramica"){
        $("#ceramica").show();
    } else {
        $("#ceramica").hide();
    }
})

function pisoCeramica_cantSelector(){
    $("#pisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("pisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "ceramica"){
            $("#ceramica").show();
        } else {
            $("#ceramica").hide();
        }
    })
}

window.addEventListener('change', pisoCeramica_cantSelector);

/* Lavado de piso - Liso */
$("#pisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("pisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "liso"){
        $("#liso").show();
    } else {
        $("#liso").hide();
    }
})

function pisoLiso_cantSelector(){
    $("#pisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("pisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "liso"){
            $("#liso").show();
        } else {
            $("#liso").hide();
        }
    })
}

window.addEventListener('change', pisoLiso_cantSelector);

/* Lavado de piso - Rustico */
$("#pisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("pisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "rustico"){
        $("#rustico").show();
    } else {
        $("#rustico").hide();
    }
})

function pisoRustico_cantSelector(){
    $("#pisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("pisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "rustico"){
            $("#rustico").show();
        } else {
            $("#rustico").hide();
        }
    })
}

window.addEventListener('change', pisoRustico_cantSelector);

/* Lavado de piso - Cemento */
$("#pisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("pisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "cemento"){
        $("#cemento").show();
    } else {
        $("#cemento").hide();
    }
})

function pisoCemento_cantSelector(){
    $("#pisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("pisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "cemento"){
            $("#cemento").show();
        } else {
            $("#cemento").hide();
        }
    })
}

window.addEventListener('change', pisoCemento_cantSelector);

/* Lavado de piso - Pintado */
$("#pisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("pisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "pintado"){
        $("#pintado").show();
    } else {
        $("#pintado").hide();
    }
})

function pisoPintado_cantSelector(){
    $("#pisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("pisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "pintado"){
            $("#pintado").show();
        } else {
            $("#pintado").hide();
        }
    })
}

window.addEventListener('change', pisoPintado_cantSelector);

/* Lavado de piso - Laminado */
$("#pisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("pisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "laminado"){
        $("#laminado").show();
    } else {
        $("#laminado").hide();
    }
})

function pisoLaminado_cantSelector(){
    $("#pisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("pisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "laminado"){
            $("#laminado").show();
        } else {
            $("#laminado").hide();
        }
    })
}

window.addEventListener('change', pisoLaminado_cantSelector);


/* Lavado de piso - Madera */
$("#pisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("pisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "madera"){
        $("#madera").show();
    } else {
        $("#madera").hide();
    }
})

function pisoMadera_cantSelector(){
    $("#pisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("pisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "madera"){
            $("#madera").show();
        } else {
            $("#madera").hide();
        }
    })
}

window.addEventListener('change', pisoMadera_cantSelector);

/* Lavado de piso - Marmol */
$("#ppisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("ppisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "marmol"){
        $("#marmol").show();
    } else {
        $("#marmol").hide();
    }
})

function ppisoMarmol_cantSelector(){
    $("#ppisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("ppisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "marmol"){
            $("#marmol").show();
        } else {
            $("#marmol").hide();
        }
    })
}

window.addEventListener('change', ppisoMarmol_cantSelector);

/* Lavado de piso - Mosaico */
$("#ppisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("ppisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "mosaico"){
        $("#mosaico").show();
    } else {
        $("#mosaico").hide();
    }
})

function ppisoMosaico_cantSelector(){
    $("#ppisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("ppisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "mosaico"){
            $("#mosaico").show();
        } else {
            $("#mosaico").hide();
        }
    })
}

window.addEventListener('change', ppisoMosaico_cantSelector);

/* Lavado de piso - Terrazo */
$("#ppisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("ppisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "terrazo"){
        $("#terrazo").show();
    } else {
        $("#terrazo").hide();
    }
})

function ppisoTerrazo_cantSelector(){
    $("#ppisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("ppisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "terrazo"){
            $("#terrazo").show();
        } else {
            $("#terrazo").hide();
        }
    })
}

window.addEventListener('change', ppisoTerrazo_cantSelector);

/* Lavado de piso - Granito */
$("#ppisos-tipo-selector").on("change", function() {
    var e1 = document.getElementById("ppisos-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "granito"){
        $("#granito").show();
    } else {
        $("#granito").hide();
    }
})

function ppisoGranito_cantSelector(){
    $("#ppisos-tipo-selector").on("change", function() {
        var e1 = document.getElementById("ppisos-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "granito"){
            $("#granito").show();
        } else {
            $("#granito").hide();
        }
    })
}

window.addEventListener('change', ppisoGranito_cantSelector);

/* Limpieza de vidrios - Chica */
$("#vidrios-tipo-selector").on("change", function() {
    var e1 = document.getElementById("vidrios-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "vchica"){
        $("#vchica").show();
    } else {
        $("#vchica").hide();
    }
})

function limVidriosChica_cantSelector(){
    $("#vidrios-tipo-selector").on("change", function() {
        var e1 = document.getElementById("vidrios-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "vchica"){
            $("#vchica").show();
        } else {
            $("#vchica").hide();
        }
    })
}

window.addEventListener('change', limVidriosChica_cantSelector);

/* Limpieza de vidrios - Mediana */
$("#vidrios-tipo-selector").on("change", function() {
    var e1 = document.getElementById("vidrios-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "vmediana"){
        $("#vmediana").show();
    } else {
        $("#vmediana").hide();
    }
})

function limVidriosMediana_cantSelector(){
    $("#vidrios-tipo-selector").on("change", function() {
        var e1 = document.getElementById("vidrios-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "vmediana"){
            $("#vmediana").show();
        } else {
            $("#vmediana").hide();
        }
    })
}

window.addEventListener('change', limVidriosMediana_cantSelector);

/* Limpieza de vidrios - Grande */
$("#vidrios-tipo-selector").on("change", function() {
    var e1 = document.getElementById("vidrios-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "vgrande"){
        $("#vgrande").show();
    } else {
        $("#vgrande").hide();
    }
})

function limVidriosGrande_cantSelector(){
    $("#vidrios-tipo-selector").on("change", function() {
        var e1 = document.getElementById("vidrios-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "vgrande"){
            $("#vgrande").show();
        } else {
            $("#vgrande").hide();
        }
    })
}

window.addEventListener('change', limVidriosGrande_cantSelector);

/* Limpieza de vidrios - Extra grande */
$("#vidrios-tipo-selector").on("change", function() {
    var e1 = document.getElementById("vidrios-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "vegrande"){
        $("#vegrande").show();
    } else {
        $("#vegrande").hide();
    }
})

function limVidriosEGrande_cantSelector(){
    $("#vidrios-tipo-selector").on("change", function() {
        var e1 = document.getElementById("vidrios-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "vegrande"){
            $("#vegrande").show();
        } else {
            $("#vegrande").hide();
        }
    })
}

window.addEventListener('change', limVidriosEGrande_cantSelector);

/* Limpieza de vidrios - Personalizado */
$("#vidrios-tipo-selector").on("change", function() {
    var e1 = document.getElementById("vidrios-tipo-selector");
    var cant1 = e1.options[e1.selectedIndex].value;
    if(cant1 == "vpersonalizado"){
        $("#vpersonalizado").show();
    } else {
        $("#vpersonalizado").hide();
    }
})

function limVidriosPersonalizado_cantSelector(){
    $("#vidrios-tipo-selector").on("change", function() {
        var e1 = document.getElementById("vidrios-tipo-selector");
        var cant1 = e1.options[e1.selectedIndex].value;
        if(cant1 == "vpersonalizado"){
            $("#vpersonalizado").show();
        } else {
            $("#vpersonalizado").hide();
        }
    })
}

window.addEventListener('change', limVidriosPersonalizado_cantSelector);