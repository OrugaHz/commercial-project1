$('.arrow, #home').on("click", function(){
    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 500)
})


$('nav a, button, p.opinions a').on('click', function(){
   const goToSection = "#" + $(this).attr('class');

     $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})


$(".burger").on("click", function () {
    $(".fas, nav").toggleClass("off");

})

