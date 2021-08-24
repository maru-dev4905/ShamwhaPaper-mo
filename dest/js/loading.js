$(".loading-bar .loading-bar-status").animate({
    'width' : '100%'
},2000)

$(".loading-img").animate({
    'left':'100%'
},2000, function(){
    // $("#loading").css("opacity","0");
})
var i = 0;
var plusNumber = setInterval(function(){
    i++
    if(i == 100){
        clearTimeout(plusNumber);
    }
    $(".loading-num").text(i+"%");
},19)