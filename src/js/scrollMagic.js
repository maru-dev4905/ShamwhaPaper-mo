// let winY;
// let winX;

// let chocoboxCloseTopNumber;
// let chocoboxCloseLeftNumber;

// calc_winY();
// calc_winX();

// $(window).resize(()=>{
//     winY = calc_winY();
//     winX = calc_winX();
// })

// function calc_winY(){
//     winY = $(window).height();
//     return winY;
// }

// function calc_winX(){
//     winX = $(window).width();
//     return winX;
// }

// const thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

// const controller = new ScrollMagic.Controller();

// if(thisfilefullname == "index.html" || thisfilefullname == "index.html#" || thisfilefullname == ""){

//     if(winX <= 768){
//         chocoboxCloseTopNumber = 8;
//         chocoboxCloseLeftNumber = -37;
//     }
    
//     gsap.registerPlugin(ScrollTrigger);

//     const filterClear = TweenMax.to(".makeup-bg",1,{filter:"grayScale(0)"})
//     const dimClear = TweenMax.to(".makeup-dim",1,{backgroundColor:"rgba(255,255,255,0)"})
//     const makeupTextClear = TweenMax.to(".makeup-intro",1,{opacity:0})
//     const makeupFillColor = TweenMax.to(".makeup",1,{backgroundColor:"#33048B"})
//     const dimFillColor = TweenMax.to(".makeup-dim",1,{backgroundColor:"rgba(51,4,139,0.7)"})
//     const filterFillColor = TweenMax.to(".makeup-bg",1,{filter:"grayScale(100%)"})
//     const makeupColorClear = TweenMax.to(".makeup",1,{backgroundColor:"transparent"})
//     const circleboxLidClose = TweenMax.to(".circlebox-lid",1,{top:50+"%"})
//     const circleboxMoveText = TweenMax.to(".circlebox-text",1,{left:"-120%"})
//     const circleboxPaperClear = TweenMax.to(".circlebox-paper",1,{opacity:0})
//     const circleboxOrange = TweenMax.to(".circlebox-orange",1,{opacity:1})
//     const circleboxFillOrange = TweenMax.to(".circlebox-bg-orange",1,{bottom:0})
//     const circleboxGreen = TweenMax.to(".circlebox-green",1,{opacity:1})
//     const circleboxFillGreen = TweenMax.to(".circlebox-bg-green",1,{bottom:0})
//     const rectboxFillGreen = TweenMax.to(".rectbox-bg-green",1,{bottom:0})
//     const rectboxFillChoco = TweenMax.to(".rectbox-bg-choco",1,{bottom:0})
//     const rectboxTextClear = TweenMax.to(".rectbox-text1",1,{opacity:0})
//     const rectboxClose = TweenMax.to(".chocobox-close-drawer",1,{
//         top: chocoboxCloseTopNumber + "vw",
//         left: chocoboxCloseLeftNumber + "vw"
//     });
//     const rectboxTextClear2 = TweenMax.to(".rectbox-text2",1,{opacity:0});
//     const rectboxClear = TweenMax.to(".box",1,{opacity:0});
//     const embossingShow = TweenMax.to(".embossing",1,{opacity:1});
//     const embossingTextScale = TweenMax.to(".embossing-svgText",{
//         transform:"scale(200)",
//         top:"-100%",
//         left:"-500%"
//     }).duration(2)
//     const embossingTextClear = TweenMax.to(".embossing-img p",1,{opacity:0})
//     const embossingTextScaleClear = TweenMax.to(".embossing-svgText",1,{opacity:0})
//     const embossingboxshow1 = TweenMax.to(".embossing-box2",1,{bottom:0})
//     const embossingboxshow2 = TweenMax.to(".embossing-box3",1,{bottom:0})
//     const embossingboxshow3 = TweenMax.to(".embossing-box4",1,{bottom:0})
//     const embossingboxshow4 = TweenMax.to(".embossing-box5",1,{bottom:0})
//     const embossingboxTextClear = TweenMax.to(".embossing-text",1,{opacity:0})
//     const rendezvousZoomText = TweenMax.to(".rendezvous-img img",1,{
//         top:"50%",
//         left:"0",
//         backgroundColor:"#fff",
//         transform:"scale(1)",
//         y:"-50%"
//     })
//     const rendezvousBgScale = TweenMax.to(".rendezvous-bg",1,{
//         transform:"scale(1.5)",
//         filter:"blur(5px)"
//     })
//     const rendezvousTextClear1 = TweenMax.to(".rendezvous-text h3",1,{color:"rgba(255,255,255,0)"})
//     const rendezvousTextClear2 = TweenMax.to(".rendezvous-text p",1,{color:"rgba(255,255,255,0)"})
//     const rendezvousCoverShow = TweenMax.to(".rendezvous-cover-box",{top:"50%"})
    
//     const endingShow = TweenMax.to(".ending",1,{bottom:0});
    
//     const scene8 = new ScrollMagic.Scene({
//         triggerElement : "#trigger3",
//         duration : "50%"
//     })
//     // .addIndicators({name: "filterClear (duration:100%)"})
//     .setTween(filterClear)
//     .addTo(controller)
    
//     const scene9 = new ScrollMagic.Scene({
//         triggerElement : "#trigger2",
//         duration : "250%"
//     })
//     // .addIndicators({name: "makeupPin (duration:350%)"})
//     .setPin("#makeup-pin",{pushFollowers: false})
//     .addTo(controller)
    
//     const scene10 = new ScrollMagic.Scene({
//         triggerElement : "#trigger3",
//         duration : "50%"
//     })
//     // .addIndicators({name: "dimClear (duration:50%)"})
//     .setTween(dimClear)
//     .addTo(controller)
    
//     const scene11 = new ScrollMagic.Scene({
//         triggerElement : "#trigger3",
//         duration : "50%"
//     })
//     // .addIndicators({name: "makeupTextClear (duration:50%)"})
//     .setTween(makeupTextClear)
//     .addTo(controller)
    
//     const scene12 = new ScrollMagic.Scene({
//         triggerElement : "#trigger4",
//         duration : "50%"
//     })
//     // .addIndicators({name: "makeupFillColor (duration:50%)"})
//     .setTween(makeupFillColor)
//     .addTo(controller)
    
//     const scene13 = new ScrollMagic.Scene({
//         triggerElement : "#trigger5",
//         duration : "50%"
//     })
//     // .addIndicators({name: "dimFillColor (duration:50%)"})
//     .setTween(dimFillColor)
//     .addTo(controller)
    
//     const scene14 = new ScrollMagic.Scene({
//         triggerElement : "#trigger5",
//         duration : "50%"
//     })
//     // .addIndicators({name: "filterFillColor (duration:50%)"})
//     .setTween(filterFillColor)
//     .addTo(controller)
    
//     const scene15 = new ScrollMagic.Scene({
//         triggerElement : "#trigger5",
//         duration : "50%"
//     })
//     // .addIndicators({name: "makeupcolor (duration:50%)"})
//     .setTween(makeupColorClear)
//     .addTo(controller)
    
//     const scene16 = new ScrollMagic.Scene({
//         triggerElement : "#trigger6",
//         duration : "50%"
//     })
//     // .addIndicators({name: "circleboxLidClose (duration:50%)"})
//     .setTween(circleboxLidClose)
//     .addTo(controller)
    
//     const scene17 = new ScrollMagic.Scene({
//         triggerElement : "#trigger6",
//         duration : "50%"
//     })
//     // .addIndicators({name: "circleboxMoveText (duration:50%)"})
//     .setTween(circleboxMoveText)
//     .addTo(controller)
    
//     const scene18 = new ScrollMagic.Scene({
//         triggerElement : "#trigger7",
//         duration : "15%"
//     })
//     // .addIndicators({name: "circleboxPaperClear (duration:15%)"})
//     .setTween(circleboxPaperClear)
//     .addTo(controller)
    
//     const scene19 = new ScrollMagic.Scene({
//         triggerElement : "#trigger8",
//         duration : "100%"
//     })
//     // .addIndicators({name: "circleboxOrange (duration:100%)"})
//     .setTween(circleboxOrange)
//     .addTo(controller)
    
//     const scene20 = new ScrollMagic.Scene({
//         triggerElement : "#trigger8",
//         duration : "100%"
//     })
//     // .addIndicators({name: "circleboxFillOrange (duration:100%)"})
//     .setTween(circleboxFillOrange)
//     .addTo(controller)
    
//     const scene21 = new ScrollMagic.Scene({
//         triggerElement : "#trigger9",
//         duration : "100%"
//     })
//     // .addIndicators({name: "circleboxGreen (duration:100%)"})
//     .setTween(circleboxGreen)
//     .addTo(controller)
    
//     const scene22 = new ScrollMagic.Scene({
//         triggerElement : "#trigger9",
//         duration : "100%"
//     })
//     // .addIndicators({name: "circleboxFillGreen (duration:100%)"})
//     .setTween(circleboxFillGreen)
//     .addTo(controller)
    
//     const scene23 = new ScrollMagic.Scene({
//         triggerElement : "#trigger10",
//         duration : "100%"
//     })
//     // .addIndicators({name: "rectboxFillGreen (duration:100%)"})
//     .setTween(rectboxFillGreen)
//     .addTo(controller)
    
//     const scene24 = new ScrollMagic.Scene({
//         triggerElement : "#trigger12",
//         duration : "100%"
//     })
//     // .addIndicators({name: "rectboxFillChoco (duration:100%)"})
//     .setTween(rectboxFillChoco)
//     .addTo(controller)
    
//     const scene25 = new ScrollMagic.Scene({
//         triggerElement : "#trigger12",
//         duration : "100%"
//     })
//     // .addIndicators({name: "rectboxTextClear (duration:100%)"})
//     .setTween(rectboxTextClear)
//     .addTo(controller)
    
//     const scene26 = new ScrollMagic.Scene({
//         triggerElement : "#trigger13",
//         duration : "100%"
//     })
//     // .addIndicators({name: "rectboxClose (duration:100%)"})
//     .setTween(rectboxClose)
//     .addTo(controller)
    
//     const scene27 = new ScrollMagic.Scene({
//         triggerElement : "#trigger14",
//         duration : "100%"
//     })
//     // .addIndicators({name: "rectboxTextClear2 (duration:100%)"})
//     .setTween(rectboxTextClear2)
//     .addTo(controller)
    
//     const scene28 = new ScrollMagic.Scene({
//         triggerElement : "#trigger14",
//         duration : "100%"
//     })
//     // .addIndicators({name: "rectboxClear (duration:100%)"})
//     .setTween(rectboxClear)
//     .addTo(controller)
    
//     const scene29 = new ScrollMagic.Scene({
//         triggerElement : "#trigger14",
//         duration : "100%"
//     })
//     // .addIndicators({name: "embossingShow (duration:100%)"})
//     .setTween(embossingShow)
//     .addTo(controller)
    
//     const scene30 = new ScrollMagic.Scene({
//         triggerElement : "#trigger15",
//         duration : "300%",
        
//     })
//     // .addIndicators({name: "embossingTextScale (duration:200%)"})
//     .setTween(embossingTextScale)
//     .addTo(controller)
    
//     const scene31 = new ScrollMagic.Scene({
//         triggerElement : "#trigger15",
//         duration : "10%"
//     })
//     // .addIndicators({name: "embossingTextClear (duration:10%)"})
//     .setTween(embossingTextClear)
//     .addTo(controller)
    
//     const scene32 = new ScrollMagic.Scene({
//         triggerElement : "#trigger16",
//         duration : "1%"
//     })
//     // .addIndicators({name: "embossingTextScaleClear (duration:1%)"})
//     .setTween(embossingTextScaleClear)
//     .addTo(controller)
    
//     const scene33 = new ScrollMagic.Scene({
//         triggerElement : "#trigger17",
//         duration : "100%"
//     })
//     // .addIndicators({name: "embossingboxshow1 (duration:100%)"})
//     .setTween(embossingboxshow1)
//     .addTo(controller)
    
//     const scene34 = new ScrollMagic.Scene({
//         triggerElement : "#trigger18",
//         duration : "100%"
//     })
//     // .addIndicators({name: "embossingboxshow2 (duration:100%)"})
//     .setTween(embossingboxshow2)
//     .addTo(controller)
    
//     const scene35 = new ScrollMagic.Scene({
//         triggerElement : "#trigger19",
//         duration : "100%"
//     })
//     // .addIndicators({name: "embossingboxshow3 (duration:100%)"})
//     .setTween(embossingboxshow3)
//     .addTo(controller)
    
//     const scene36 = new ScrollMagic.Scene({
//         triggerElement : "#trigger20",
//         duration : "100%"
//     })
//     // .addIndicators({name: "embossingboxshow4 (duration:100%)"})
//     .setTween(embossingboxshow4)
//     .addTo(controller)
    
//     const scene37 = new ScrollMagic.Scene({
//         triggerElement : "#trigger21",
//         duration : "25%"
//     })
//     // .addIndicators({name: "embossingboxTextClear (duration:25%)"})
//     .setTween(embossingboxTextClear)
//     .addTo(controller)
    
//     const scene38 = new ScrollMagic.Scene({
//         triggerElement : "#trigger22",
//         duration : "200%"
//     })
//     // .addIndicators({name: "rendezvousZoomText (duration:200%)"})
//     .setTween(rendezvousZoomText)
//     .addTo(controller)
    
//     const scene39 = new ScrollMagic.Scene({
//         triggerElement : "#trigger23",
//         duration : "50%"
//     })
//     // .addIndicators({name: "rendezvousBgScale (duration:50%)"})
//     .setTween(rendezvousBgScale)
//     .addTo(controller)
    
//     const scene40 = new ScrollMagic.Scene({
//         triggerElement : "#trigger24",
//         duration : "50%"
//     })
//     // .addIndicators({name: "rendezvousTextClear1 (duration:50%)"})
//     .setTween(rendezvousTextClear1)
//     .addTo(controller)
    
//     const scene41 = new ScrollMagic.Scene({
//         triggerElement : "#trigger24",
//         duration : "50%"
//     })
//     // .addIndicators({name: "rendezvousTextClear2 (duration:50%)"})
//     .setTween(rendezvousTextClear2)
//     .addTo(controller)
    
//     const scene42 = new ScrollMagic.Scene({
//         triggerElement : "#trigger25",
//         duration : "100%"
//     })
//     // .addIndicators({name: "rendezvousCoverShow (duration:100%)"})
//     .setTween(rendezvousCoverShow)
//     .addTo(controller)
    
//     const scene43 = new ScrollMagic.Scene({
//         triggerElement : "#trigger26",
//         duration : "100%"
//     })
//     // .addIndicators({name: "endingShow (duration:100%)"})
//     .setTween(endingShow)
//     .addTo(controller)
// }