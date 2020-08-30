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
    console.log(horarioServicio);
}

window.addEventListener('change', cambioHorarioDeServicio);

$("#form-selector").on("change", function() {
    $("#" + $(this).val()).show();//.siblings().hide();
    
})

function mainService(){
    $("#form-selector").on("change", function() {
        $("#" + $(this).val()).show();//.siblings().hide();
        
    })
}

window.addEventListener('change', mainService);

$("#sLavadoDeAlfombra").on("change", function() {
    $("#" + $(this).val()).show().siblings().hide();
})

function cantService(){
    $("#sLavadoDeAlfombra").on("change", function() {
        $("#" + $(this).val()).show().siblings().hide();
    })
}

window.addEventListener('change', cantService);

$("#alfombra1").on("change", function() {
    $("#" + $(this).val()).show()//.siblings().hide();
})

function defCantService(){
    $("#alfombra1").on("change", function() {
        $("#" + $(this).val()).show()//.siblings().hide();
    })
}

window.addEventListener('change', defCantService);

