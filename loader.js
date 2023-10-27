$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('select').formSelect();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
    
});


$('.tenth_books').click(function(){

  $('.main').css({
    'display':'none'
  });

  $('#tenth').css({
    'display':'block'
  });

});

$('.ninth_books').click(function(){

  $('.main').css({
    'display':'none'
  });

  $('#ninth').css({
    'display':'block'
  });

});

$('.eighth_books').click(function(){

  $('.main').css({
    'display':'none'
  });

  $('#eighth').css({
    'display':'block'
  });

});

$('.e_books').click(function(){

  $('.main').css({
    'display':'none'
  });

  $('#ebooks').css({
    'display':'block'
  });

});