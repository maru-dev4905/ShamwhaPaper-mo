$(".email-popup button").click(function(){
    $(".email-popup").css({
        'opacity' : "0",
        "z-index" : "-10",
        "visibility" : "hidden"
    });
    $(".email-dim").css({
        'opacity' : "0",
        "z-index" : "-10",
        "visibility" : "hidden"
    })
})