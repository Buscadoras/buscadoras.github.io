
jQuery(function($) {

var doAnimations = function() {
  var offset = $(window).scrollTop() + $(window).height(),
  $animatables = $('.animatable');
  $animatables.each(function(i) {
    var $animatable = $(this);
    if (($animatable.offset().top + $animatable.height()-200) < offset) {
      if (!$animatable.hasClass('animate-in')) {
        $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
      }
		} else if (($animatable.offset().top + $animatable.height()-200) > offset) {
      if ($animatable.hasClass('animate-in')) {
        $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
    }
  }
/*
  var $quotes = $('.quote');
  $quotes.each(function(i) {
    var $quote = $(this);
    if (($quote.offset().top + $quote.height()-200) < offset) {
        $('#full_bg_image').fadeIn();
    }
  });
*/
});



var min = 750;
var max = 5500;

/*
$(window).resize(function(){
  if ($(window).width() <= 880) {
    var min = 750;
    var max = 5500;
  }
});
*/
var scroll = $(window).scrollTop();
  if (scroll >= min && scroll <= max) {
    $('#full_bg_image').fadeIn();
  } else {
    $('#full_bg_image').fadeOut();
  }
  if (scroll >= min) {
    $('#top').fadeIn();
  } else {
    $('#top').fadeOut();
  }
};




$(window).on('scroll', doAnimations);
$(window).trigger('scroll');



$('.start').click(function() {
  $("html:not(:animated),body:not(:animated)").animate({ scrollTop: 920}, 800);
  return false;
});

$('#top').click(function(){
  $("html:not(:animated),body:not(:animated)").animate({scrollTop:0}, 500);
  return false;
});

}); //jQuery(function($)




$(window).scroll(function() {
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  var scroll = $window.scrollTop() + ($window.height() / 3);
  $panel.each(function () {
    var $this = $(this);
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
      $body.addClass('color-' + $(this).data('color'));
    }
  });
}).scroll();






$(document).ready(function() {
  var turn = 1;
  $('.hamburger').click(function() {
      $(this).toggleClass("activo");
      if (turn==1) {
        $("sidebar").animate({
          height: "100%",
        }, 600, function(){
          $("nav.navbar").fadeIn(200);
          $("a#about:link, p#lang, #guide").fadeIn(400);
          turn=0;
        });
      } else {
        $("nav.navbar, a#about:link, p#lang, #guide").fadeOut(200, function(){
          $("sidebar").animate({
            height: "48px",
          }, 600, function(){
              turn=1;
          });
        });
      }
  });

if ($(window).width()<768) {
      $('ul.nav-menu li a').click(function() {
        $('.hamburger').toggleClass("activo");
        $("nav.navbar, .nav-p").fadeOut(200, function(){
          $("sidebar").animate({
            height: "48px",
          }, 600, function(){
              turn=1;
          });
        });
      });
}





$('.tag').click(function(){
  var filterValue = $(this).attr('data-filter');
  $('a.tag').removeClass('factive');
  $(this).addClass('factive');
  if(filterValue == 'all') { $('.line, .docus').show('slow'); }
  else { $('.line, .docus').hide(); $(filterValue).show(); }
});




$('.button').click(function(){
  var videoUrl = $(this).attr('vid');
  var videoImg = $(this).attr('im');
  $('.overlay').fadeIn();
  $("#vi").attr("src", videoUrl);
  $("#vi").attr("poster", videoImg);
});

$('.cancel').click(function(){
 $('.overlay').fadeOut();
 $("#vi").attr("src", "");
});


}); /* DOCUMENT READY */
