/**
 * Created by robjuz on 17/03/2017.
 */
"use strict";
$('#menu, #logo').find('a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : $($(this).attr('href')).offset().top - $('#menu').height() + 1}, 'slow');
});

$('#menu').find('a').click(function (e){
   $('#menu').find('a').removeClass('active');
   $(this).addClass('active');
});