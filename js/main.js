$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200 ){
            $('.gotop-bt').fadeIn();
        } else {
            $('.gotop-bt').fadeOut();
        }
    });

    $('.gotop-bt').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},350);
    });

    new WOW().init();
})