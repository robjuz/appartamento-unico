/**
 * Created by robjuz on 17/03/2017.
 */
"use strict";
var viewHeight;

$(document).ready(function() {
    $('.box').removeClass('fixed');
    $('.box').css('position', 'static');
    $('.box').each(function () {
        $(this).css('top', $(this).offset().top);
        $(this).attr('data-top', $(this).offset().top);
    });
    $('.box').css('position', 'absolute');
    viewHeight = $('body').height();
});

$(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    $('.box:not(.last):not(.fixed)').each(function () {
        var offsetTop = $(this).offset().top;
        var height = $(this).find('.content').height();
        var breakpoint = offsetTop + height - viewHeight + 50;

        if((breakpoint <= scrollTop)) {
            $(this).css('top', 'unset');
            $(this).css('bottom', 0);
            $(this).addClass('fixed');
        }
    });
    $('.box').each(function () {
        var offsetTop = $(this).data('top');
        var height = $(this).find('.content').height();
        var breakpoint = offsetTop + height - viewHeight + 50;
        if ( breakpoint >= scrollTop ) {
            $(this).removeClass('fixed');
            $(this).css('top', $(this).data('top'));
            $(this).css('bottom', 'unset');
        }
    });

});

$('#menu').find('a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : $($(this).attr('href')).data('top')}, 'slow');
});