const rendezvousCloseBtn = $(".rendezvous-close-btn");
const rendezvousOpenBtn = $(".rendezvous-btn");
const rendezvousBox = $(".rendezvous-section");

var swiper = new Swiper(".rendezvous-section",{
})

rendezvousOpenBtn.click(function(){
    rendezvousBox.addClass("show"),swiper.slideTo(0,0,false);;
})
rendezvousCloseBtn.click(function(){
    rendezvousBox.removeClass("show")
})

