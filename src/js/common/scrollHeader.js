const header = $("header");

let scrollY;

$(window).on("scroll",function(){
    scrollY = $(window).scrollTop();
    
    if(header.hasClass("header-white")){
        if(scrollY <= "0"){
            header.removeClass("black");
        }else{
            header.addClass("black");
        }
    }else{
        if(scrollY <= "0"){
            header.removeClass("white");
        }else{
            header.addClass("white");
        }
    }
})