const cookiePopup = $(".cookie-box");
const cookiePopupBtn = $(".cookie-box-close");

const popup = $(".popup-box");
const popupBtn = $(".popup-bottom-close");

const iePopup = $(".ie");
const iePopupBtn = $(".ie-box-close");

cookiePopupBtn.click(function(){
    cookiePopup.css({'display':'none'});
})

iePopupBtn.click(function(){
    iePopup.css({'display':'none'})
})

popupBtn.click(function(){
    var idx = popupBtn.index(this);
    popup.eq(idx).css({'display':'none'});
})

$(".emailPopup").click(function(){
    $(".email-dim").css({
        'opacity' : 1,
        "z-index" : "9999999999999",
        "visibility" : "visible"
    });
    $(".email-popup").css({
        'opacity' : 1,
        "z-index" : "9999999999999",
        "visibility" : "visible"
    });
});

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