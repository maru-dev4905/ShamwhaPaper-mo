var agent = navigator.userAgent.toLowerCase();
var name = navigator.appName;
var browser;

if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1){
    browser = 'IE';
}else if(agent.indexOf('safari') > -1){
    if(agent.indexOf('opr') > -1){
        browser = 'opera';
    }else if(agent.indexOf('chrome') > -1){
        browser = 'chrome';
    }else if(agent.indexOf('naver') > -1){
        $(".rendezvous-sec-content").css({bottom:"20px"})
    }
    else{
        browser = 'safari';
        $(".rendezvous-sec-content").css({bottom:"130px"})
        $(".sustainability-visual h2").css({"top":"40%"});
    }
}


var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

if (mobile) { 
  //모바일 처리
  var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

  if ( varUA.indexOf('android') > -1) {
      //안드로이드
      $(".file").css({'transform':"translateY(-10px)"});
  } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
      //IOS
      $(".sub-visual h2").css({"top":"45%"});
  } else {
      //아이폰, 안드로이드 외
  }
}else{
  //비 모바일 처리
}

const $hambugerBtn = $(".hambuger-btn");
const $menu = $(".hambuger-menu");
const $body = $("body");

$hambugerBtn.click(function(){
    if($(this).hasClass("close")){
        $(this).removeClass("close");
        $(this).addClass("open");
        $body.removeClass("menu-white");
    }else{
        $(this).addClass("close");
        $menu.addClass("show");
        $body.addClass("menu-white");
    }
})

const $search = $(".search");
const $searchBox = $(".header-search-box");

$search.click(function(){
    $searchBox.addClass("show");
    $hambugerBtn.removeClass("close");
    $hambugerBtn.addClass("open");
    $body.removeClass("menu-white")
})

const $searchCloseBtn = $(".search-box-close");

$searchCloseBtn.click(function(){
    $searchBox.removeClass("show");
})
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
const thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

$(".scroll-up-btn").click(function(){
    $("html, body").animate({scrollTop : 0}, 1000);
});