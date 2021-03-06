/**
 * Created by robjuz on 17/03/2017.
 */
"use strict";

$(document).ready(function () {
    addAnimation();
    smoothscroll();

});

$(window).scroll(addAnimation);
$(window).scroll(onScroll);

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > (scrollPos - $('#menu').height()) ) {
            $('#menu a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

function smoothscroll() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - $('#menu').height() +2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
}

function addAnimation() {
    $('.animate').each(function(){
        var imagePos = $(this).closest('.content').offset().top;

        var topOfWindow = $(window).scrollTop();
        if ((imagePos < topOfWindow+400)) {
            $(this).addClass($(this).data('animation'));
        }
    });
}