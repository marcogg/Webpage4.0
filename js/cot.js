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
    $("#" + $(this).val()).show();
})

function serviceSelector(){
    $("#service-selector").on("change", function() {
        $("#" + $(this).val()).show();
    })
}

window.addEventListener('change', serviceSelector);

//Lavado de alfombra cant
$("#alfombra-cant-selector").on("change", function(){
    var e = document.getElementById("alfombra-cant-selector");
    var tipoDeServicio = e.options[e.selectedIndex].value;
    console.log(tipoDeServicio);
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
        if(tipoDeServicio == "alfombra1"){
            $("#" + $(this).val()).show();
        } else if(tipoDeServicio != "alfombra1"){
            $("#alfombra1").hide();
        } else if(tipoDeServicio == "alfombra2"){
            $("#" + $(this).val()).show();
        } else if(tipoDeServicio != "alfombra2"){
            $("#alfombras2").hide();
        } else if(tipoDeServicio == "alfombra3"){
            $("#" + $(this).val()).show();
        } else if(tipoDeServicio != "alfombra3"){
            $("#alfombras3").hide();
        } else if(tipoDeServicio == "alfombra4"){
            $("#" + $(this).val()).show();
        } else if(tipoDeServicio != "alfombra4"){
            $("#alfombras4").hide();
        } else if(tipoDeServicio == "alfombra5"){
            $("#" + $(this).val()).show();
        } else if (tipoDeServicio != "alfombra5"){
            $("#alfombras5").hide();
        } else if (tipoDeServicio == "cantOtra"){
            $("#" + $(this).val()).show();
        } else if (tipoDeServicio != "cantOtra"){
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
    } else if (number < 6){
        number = 6;
        document.getElementById("cantServices").text = "6";
        document.getElementById("cantServices").value = "6";
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

function alfombraCantOtra(){
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

window.addEventListener('change', alfombraCantOtra);
