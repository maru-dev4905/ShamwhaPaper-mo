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
