const scrollDownBtn = $(".scroll-down-btn");

let winHeight = $(window).height();

scrollDownBtn.click(function(){
    var agent = navigator.userAgent.toLowerCase();
    var name = navigator.appName;
    var browser;

    if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1){
        return false;
    
    }else if(agent.indexOf('safari') > -1){
        if(agent.indexOf('opr') > -1){
            return false;
        
        }else if(agent.indexOf('chrome') > -1){
            return false;
        
        }else if(agent.indexOf('naver') > -1){
            $("html,body").animate({
                scrollTop:winHeight
            },1000)
            return false;
        }
        else{
            $("html,body").animate({
                scrollTop:winHeight + 100
            },1000)
            return false;
        }
    }

    $("html,body").animate({
        scrollTop:winHeight
    },1000)
    
})

$(window).scroll(function(){
    if($(window).scrollTop() <= 100){
        $(".scroll-down-btn").css({opacity:1});
        $(".sub-scroll-btn").css({opacity:1});
    }else{
        $(".scroll-down-btn").css({opacity:0});
        $(".sub-scroll-btn").css({opacity:0});
    }
})

let idx = 1;
$(".scrollarrow").click(function(){
    let bodyClass = $("body").attr("class");
    if(bodyClass == "fp-viewing-0"){
        $.fn.fullpage.moveTo(2);
        idx++;
    }
    else if(bodyClass == "fp-viewing-1"){
        $.fn.fullpage.moveTo(3);
        idx++;
    }
    else if(bodyClass == "fp-viewing-2"){
        $.fn.fullpage.moveTo(4);
        idx++;
    }
    else if(bodyClass == "fp-viewing-3"){
        $.fn.fullpage.moveTo(5);
        idx++;
    }
    else if(bodyClass == "fp-viewing-4"){
        $.fn.fullpage.moveTo(6);
        idx++;
    }
});
$(".scroll-up-btn").click(function(){
    if($(".about-fullpage").length){
        $.fn.fullpage.moveTo(1);
        idx = 1;
    }else{
        return false;
    }
})