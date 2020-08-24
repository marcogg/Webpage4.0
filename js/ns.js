console.log("ns.js is connected");

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



