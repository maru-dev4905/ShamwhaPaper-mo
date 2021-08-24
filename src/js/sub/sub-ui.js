$(function(){
    inputClear();   
    layerpop();  
    tabContent();  
    accordion();
});

$(function(){
    var vheight = $(".sub-visual").outerHeight();

    $(".sub-scroll-btn").on("click",function(){
        $('html, body').animate({scrollTop: vheight}, 1000);
    });
    $('.search-tab li').on('click', function (){
        $(this).closest('li').siblings('li').removeClass('active');
        $(this).closest('li').addClass('active');
        return false;
    })

    var fileTarget = $('#file'); 
    fileTarget.on('change', function(){ 
        var cur=$(".upload-wrap input[type='file']").val();
        $(".upload").val(cur);
        $(".input-type.upload").next().removeClass("hidden").removeClass("opa");
    }); 

    $('.dropdown-el').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('active');
        $('#'+$(e.target).attr('for')).prop('checked',true);
      });
      $(document).click(function() {
        $('.dropdown-el').removeClass('active');
      });

    $('.scroll-up-btn').click( function(){
        $('html, body').animate({scrollTop : 0}, 400);
        return false;
    });
});

var inputClear = function (){
    var $ipt = $('.input-type');
    var $clearIpt = $('.btn-clear');

    
    $ipt.on('input propertychange', function() {
        var $this = $(this);
        var visible = Boolean($this.val());
        $this.siblings($clearIpt).toggleClass('hidden', !visible);
    }).trigger('propertychange');
      
    $clearIpt.click(function() {
        $(this).siblings('input[type="text"]').val('')
          .trigger('propertychange').focus();
          
    });
    //0122 추가
    $ipt.on('blur',function() {
        $(this).siblings($clearIpt).addClass('opa');
    });
    $ipt.on('focus',function() {
        $(this).siblings($clearIpt).removeClass('opa');
    });
    ////0122 추가
    

    $('.form-list input, .form-list select').focus(function(){
        $(this).parents('dl').addClass('border');
    }).blur(function(){
        $(this).parents('dl').removeClass('border');
   })
   
}

var layerpop = function(){
    var $layer = $('#layer');
    var $layerBtn = $('.btn-popup-open');
    var $layerClose = $('#layer .close');
    var $clearIpt = $('.btn-clear');

    $layerBtn.click(function(e){
        e.preventDefault();
        $layer.fadeIn(400);
    });
    $layerClose.click(function(e){
        e.preventDefault();
        $layer.fadeOut(400);
    });
}

var tabContent = function (){
	var openTrigger = $('[data-tab-href]');
	openTrigger.on('click', function (){
		var tabHref = $(this).attr('data-tab-href');

		$(this).closest('li').siblings('li').removeClass('active');
		$(this).closest('li').addClass('active');

		$('[' + tabHref + ']').siblings('').removeClass('active')
		$('[' + tabHref + ']').addClass('active');
	})
}

var accordion = function (){
    var $accTrigger = $('.accordion dt').not('.accordion .wid dt');
    var $accContent = $('.accordion dd');

    $accTrigger.click(function() {
        if ( $(this).hasClass('active') ) {
            $(this).next('dd').stop().slideUp(300);
            $(this).removeClass('active');
        }
        else {
            $(this).next('dd').stop().slideDown(300);
            $(this).addClass('active');
        }
    });
}
