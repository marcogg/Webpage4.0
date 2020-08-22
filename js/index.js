console.log(".js file is conected");
$("#main-screen-section").hide();
$("footer").hide();

setTimeout(function(){
    $("#initialScreen").hide();
    $(".initialScreen").css("background", "rgba(26, 100, 209, 1)");
    $("nav").css("border-bottom", "#ffffff solid 1px");
    if((window.matchMedia("(min-width: 768px)").matches)){
        $('.nav-options').css('visibility', 'visible');
    } 
    //$("nav").css("background-color", "rgba(64, 159, 239, 1)");
    $("#main-screen-section").show();
    $("#main-screen-section").css("padding-top", "26px");
    //$("#main-screen-section").css("background-color", "rgba(64, 159, 239, 1)");
    $("footer").show();
}, 2500)

setTimeout(function(){
    document.getElementById("main-video-player").play();
    document.getElementById("main-video-player").volume = .1;
}, 3000);

function hide(idOfObject){
    $(`#` + `${idOfObject}`).hide();
}

function show(idOfObject){
    $(`#` + `${idOfObject}`).show();
}

function nosotrosSomosImgExpand(){
    /* console.log($(`#nosotros-somos-section`).prop('clientHeight')); */
    if($(`#nosotros-somos-section`).prop('clientHeight') == 229){
        $(`#nosotros-somos-section`).css("display", "block");
        $(`.col-lg-6`).css("padding", "0px");
        document.getElementById(`nosotros-somos-img`).classList.remove('col-lg-6');
        document.getElementById(`nosotros-somos-img`).classList.add('col-lg-12');
        document.getElementById(`nosotros-somos-text`).classList.remove('col-lg-6');
        document.getElementById(`nosotros-somos-text`).classList.add('col-lg-12');
    } else{
        $(`#nosotros-somos-section`).css("display", "inline-flex");
        $(`#nosotros-somos-text`).css("padding-left", "30px");
        document.getElementById(`nosotros-somos-img`).classList.remove('col-lg-12');
        document.getElementById(`nosotros-somos-img`).classList.add('col-lg-6');
        document.getElementById(`nosotros-somos-text`).classList.remove('col-lg-12');
        document.getElementById(`nosotros-somos-text`).classList.add('col-lg-6');
    }
}