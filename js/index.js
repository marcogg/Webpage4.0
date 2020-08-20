console.log(".js file is conected");
$("#main-screen-section").hide();
$("footer").hide();

setTimeout(function(){
    $("#initialScreen").hide();
    $(".initialScreen").css("background", "rgba(26, 100, 209, 1)");
    $("nav").css("border-bottom", "#ffffff solid 1px");
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