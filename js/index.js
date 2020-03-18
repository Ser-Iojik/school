jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#container_menu-les').addClass('fixed');
        }
        else if ($(this).scrollTop()<100){
            $('#container_menu-les').removeClass('fixed');
        }
    });
});
