$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    
// const burger = document.querySelector('.burger');
// const navbar = document.querySelector('.mt-mobile');
// const body = document.querySelector('body');

// burger.addEventListener('click', () => {
//     navbar.classList.toggle('nav-open');
//     body.classList.toggle('body-open');
//     burger.classList.toggle('burger-open');
    
// });





$('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})


$('.companygoal-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            
            slidesToScroll: 1
          }
        }
        ]
    });

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

});






$( document ).ready(function(){
    $( ".idolz-team-img" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open" ).toggle(); // отображаем, или скрываем элемент
    });

    $( ".idolz-team-img2" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open2" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open2" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open2" ).toggle(); // отображаем, или скрываем элемент
    });

    $( ".idolz-team-img3" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open3" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open3" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open3" ).toggle(); // отображаем, или скрываем элемент
    });

    $( ".idolz-team-img4" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open4" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open4" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open4" ).toggle(); // отображаем, или скрываем элемент
    });

    $( ".idolz-team-img5" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".idolz-team-open5" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

    $( ".idolz-team-open5" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".idolz-team-open5" ).toggle(); // отображаем, или скрываем элемент
    });



 
});








const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});


