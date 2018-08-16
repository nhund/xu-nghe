$(document).ready(function () {

    //Search Pro - Shop
    $(".ali-search-type").click(function () {
        $(this).find('.select-type').toggleClass('click');
        $(this).find('ul').toggleClass('click');
    })

    $('.ali-search-type li').click(function () {
        $(".select-type").html($(this).text());
        $('input[name=kw]').attr('placeholder', $(this).data('holder'));
        $('input[name=type]').val($(this).data('type'));
        $('#_search_frm').attr('action', $('input[name=' + $(this).data('type') + '_link]').val());
    });

//    sideba
    //$("ul.list-it-ali").find('ul > li').each(function (index) {
//        if ($(this).hasClass('active')) {
//            $(this).parent().css({
//                'display': 'block'
//            });
//            $(this).parent().parent().find('h3').addClass('active open');
//        }
//    });

//    $(".list-it-ali > li").hover(function () {
    //$('.list-it-ali > li h3').removeClass('active');

//        if (!$(this).find('h3').hasClass('active')) {
//            $(this).find('h3').addClass('active');
//            $(this).find('h3').toggleClass('open');
//        }

//        /*
//         $(".list-it-ali > li ul").slideUp();
//         */
//        if (!$(this).find('h3').next().is(":visible")) {
//            $(this).find('h3').next().slideDown();
//        }
//    });
//    $('.item-sidebar-alias').mouseleave(function () {
//        $(this).find('h3').removeClass('active').removeClass('open');
//        $(".list-it-ali > li > ul").each(function() {
//            $(this).slideUp();
//        });
//    });
//    var height_content_alias = $('.list-it-ali2').height();
//    if (height_content_alias > 245) {
//        $('.list-it-ali2').addClass('content_alias');
//    }
    $(document).on('click','.panel-style1', function(){
        $('.panel-boxme').find('.panel-style1').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click','.selectBox-price .search-left', function(){
        $(".search-left-block").toggleClass("block");
    });
    $(document).on('click','.selectBox-price .search-right', function(){
        $(".search-right-block").toggleClass("block");
    });
    $(document).on('click','.history .top-content .dropdown.right', function(){
        $(".search-right-block").toggleClass("block");
        $(".search-right").toggleClass("block");
    });
    $(document).on('click','.history .his-item-content', function(){
        $(this).toggleClass("block");
    });


    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#bttop').fadeIn();
                $('#cart-tooltip').fadeIn();
                $('#cart-sr').fadeIn();
            } else {
                $('#bttop').fadeOut();
                $('#cart-sr').fadeOut();
            }
        });
        $(document).on('click','#bttop', function(){
            $('body,html').animate({scrollTop: 0}, 800);
        });
    });

});


function MM_jumpMenu(targ,selObj,restore){ //v3.0
    eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
    if (restore) selObj.selectedIndex=0;
}
