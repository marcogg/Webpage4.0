console.log("cont.js is connected");

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



if((window.matchMedia("(min-width: 992px)").matches)){
    document.getElementById("social-media").classList.add("mt-5");
    document.getElementById("social-media").classList.add("pt-5");
    document.getElementById("androidDeviceImg").classList.replace("mx-auto", "float-left" );
    document.getElementById("androidDeviceImg").classList.add("d-block");
    document.getElementById("iphoneDeviceImg").classList.replace("mx-auto", "float-left" );
    document.getElementById("iphoneDeviceImg").classList.add("d-block");
    document.getElementById("information-section").classList.add("col-6");
    $("#iphoneDeviceImg").css("margin", "auto");
} else {
    document.getElementById("social-media").classList.remove("mt-5");
    document.getElementById("social-media").classList.remove("pt-5");
    document.getElementById("androidDeviceImg").classList.replace("float-left", "mx-auto" );
    document.getElementById("androidDeviceImg").classList.remove("d-block");
    document.getElementById("iphoneDeviceImg").classList.replace("float-left", "mx-auto");
    document.getElementById("iphoneDeviceImg").classList.remove("d-block");
    document.getElementById("information-section").classList.remove("col-6");
}


function contentListener(){
    if((window.matchMedia("(min-width: 992px)").matches)){
        document.getElementById("social-media").classList.add("mt-5");
        document.getElementById("social-media").classList.add("pt-5");
        document.getElementById("androidDeviceImg").classList.replace("mx-auto", "float-left" );
        document.getElementById("androidDeviceImg").classList.add("d-block");
        document.getElementById("iphoneDeviceImg").classList.replace("mx-auto", "float-left" );
        document.getElementById("iphoneDeviceImg").classList.add("d-block");
        document.getElementById("information-section").classList.add("col-6");
        $("#iphoneDeviceImg").css("margin", "auto");
    } else {
        document.getElementById("social-media").classList.remove("mt-5");
        document.getElementById("social-media").classList.remove("pt-5");
        document.getElementById("androidDeviceImg").classList.replace("float-left", "mx-auto" );
        document.getElementById("androidDeviceImg").classList.remove("d-block");
        document.getElementById("iphoneDeviceImg").classList.replace("float-left", "mx-auto");
        document.getElementById("iphoneDeviceImg").classList.remove("d-block");
        document.getElementById("information-section").classList.remove("col-6");
    }
}

window.addEventListener('resize', contentListener);
