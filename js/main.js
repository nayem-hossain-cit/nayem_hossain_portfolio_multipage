$(document).ready(function(){

    "use strict";
    var backTotop = $('.back-top-btn');
    var navbar = $('.navbar');
    var htmlBody = $('html,body');
    var body = $('body');

    //preloder
    $(window).on('load',function(){
        $('.preloder-box').fadeOut(800);
    });

    //back-top button and navbar fixed
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        //back-top button show
        if(scrolling > 200){
            backTotop.fadeIn();
        }else{
            backTotop.fadeOut();
        }

        if(scrolling >200){
            navbar.addClass('navbar-fixed');
        }else{
            navbar.removeClass('navbar-fixed');
        };
    });

    //back-top button click
        backTotop.on('click',function(){
            htmlBody.animate({
            scrollTop: '0',
        },3000);
    });

    // color Selection js
    $('.color-btn').on('click',function(){
        $('.color-selection').toggleClass('color-pos');
    });

    // color change js
    $('.red').on('click',function(){
        body.addClass('red').removeClass('orange').removeClass('green').removeClass('blue');
    });
    $('.orange').on('click',function(){
        body.addClass('orange').removeClass('red').removeClass('green').removeClass('blue');
    });
    $('.green').on('click',function(){
        body.addClass('green').removeClass('red').removeClass('orange').removeClass('blue');
    });
    $('.blue').on('click',function(){
        body.addClass('blue').removeClass('red').removeClass('orange').removeClass('green');
    });
    $('.defult').on('click',function(){
        body.removeClass('red').removeClass('orange').removeClass('green').removeClass('blue');
    });

    // date and time js
    function myTimer() {
    const date = new Date();
    var time = date.toLocaleTimeString();
    $('.date-time .text').html(time);
    };
    setInterval(myTimer, 1000);

    // banner text type js
    new TypeIt('#type',{
        strings: ["FREELANCER", "WEB DESIGNER", "WEB DEVELOPER"],
        startDelete:true,
        loop:true,
        breakLines:false,
        speed: 400,
    }).go();

    // about-image particles js
    $('.particles').daisyjs({
        density: 4000,
        dotColor:'#e23e38',
        lineColor:'green',
        particleRadius: 10,
        proximity: 80,
    });

    // skills progresbar
    $('.skillbar').skillbar({
        speed: 5000,
    });

    // feeback slider
    $(".feedback-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeeds: 2500,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
          ]
    });

    //aos animate
    AOS.init({
        duration: 3000,
        offset: 150,
    });

});