
//for stylisation
$('.header-menu__icon').click(function(event) {
    $(this).toggleClass('active');
    $('.burger_menu').toggleClass('active');
    if($(this).hasClass('active')){
        $('body').data('scroll',$(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if(!$(this).hasClass('active')){
        $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
});


//move on block to other functions
$(window).resize(function(event) {
    adaptive_function();
});

function adaptive_header(w,h) {
    var burgerMenu=$('.burger_menu');
    var movedBlock=$('.block-01__menu');
    if(w<769){
        if(!movedBlock.hasClass('done')){
            movedBlock.addClass('done').appendTo(burgerMenu);
        }
    }else{
        if(movedBlock.hasClass('done')){
            movedBlock.removeClass('done').prependTo($('.block-01__menu-wrapper'));
        }
    }

}
function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}
adaptive_function();


