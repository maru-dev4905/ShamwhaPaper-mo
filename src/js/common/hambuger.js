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