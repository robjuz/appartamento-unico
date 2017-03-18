/**
 * Created by robjuz on 17/03/2017.
 */
"use strict";

$(document).ready(function() {
    menu();
    offset();
});
$(window).resize(menu);
$(window).scroll(function () {
    var top = $(document).scrollTop();
    $('.box:not(.last):not(.fixed)').each(function () {
        if(($(this).offset().top <= top)) {
            $(this).css('top', 0);
            $(this).addClass('fixed');
        }
    });
    $('.box').each(function () {
        if ( $(this).data('top') > top ) {
            $(this).removeClass('fixed')
            $(this).css('top', $(this).data('top'));
        }
    });

});

$('#menu').find('a').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    $('html, body').animate({scrollTop : $($this.attr('href')).data('top')}, 'slow');
});

function menu() {
    var menu = $('#menu');
    if ($(window).height() < menu.height()) {
        // menu.removeClass('fixed');
    } else {
        menu.addClass('fixed');
    }
}

function offset() {
    $('.box').removeClass('fixed');
    $('.box').css('position', 'static');
    $('.box').each(function () {
        $(this).css('top', $(this).offset().top);
        $(this).attr('data-top', $(this).offset().top);
    });
    $('.box').css('position', 'absolute');
}