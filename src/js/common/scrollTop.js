const thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

$(".scroll-up-btn").click(function(){
    $("html, body").animate({scrollTop : 0}, 1000);
});