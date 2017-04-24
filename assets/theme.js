/**
 * 
 *
 * This file contains all template JS functions
 *
 * 
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------
 * 01 - Product Zoom 
 * 02 - Owl Carousel
 * 03 - Slider Text
 * 04 - Facts Count
 * 05 - Navigation
 * 06 - Video Play
 * 07 - Work Filter
 * 08 - Product Category Filter 
 * 09 - Star Rating
 * 10 - Preloader
--------------------------------------------------------------*/

(function($) {
  "use strict";


// Owl Carousel 

    // Home Slider
    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 300,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: true,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

    // Testimonial Slider
    $("#testimonial-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 300,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

    // Clients Slider
    $("#clients-slider").owlCarousel({
      loop: true,
      items: 6,
      dots: false,
      nav: false,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: false,
      slideSpeed: 300,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 3,
            nav: false,
            dots: false,
        },
        768: {
            items: 4,
            nav: false,
        },
        1100: {
            items: 6,
            nav: false,
        }
      }
    });

    // About Slider
    $("#about-slider").owlCarousel({
      loop: true,
      items: 1,  
      nav: false,
      dots: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 300,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,   
            dots: false,   
        },
        600: {
            items: 1,
            nav: false,  
            dots: false,     
        },
        768: {
            items: 1,
            nav: false,
            dots: true,       
        },
        1100: {
            items: 1,
            nav: false,        
        }
      }
    });

    // Say Slider
    $("#say-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: false,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: false,
      margin: 0,
      autoplay: true,
      slideSpeed: 100,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: false,
        }
      }
    });

// Slider Text    
    (function ($) {
      var options = {};
      var oldx = 0;
      var direction = "";
      var stop_timeout = false;
      var stop_check_time = 150;
      $.mousedirection = function (opts) {
        var defaults = {};
        options = $.extend(defaults, opts);
        $(document).on("mousemove", function (e) {
            var activeElement = e.target || e.srcElement;
            if (e.pageX > oldx) {
               $(document).on('mousemove', function(e){
                    $('.slider-heading span').css({
                      marginLeft: 0,                        
                       
                    });
                });
            } else if (e.pageX < oldx) {
               $(document).on('mousemove', function(e){
                    $('.slider-heading span').css({
                      marginLeft: 4 +'%',
                    });
                });
            }
            clearTimeout(stop_timeout);
            stop_timeout = setTimeout(function () {
                direction = "stop";
                $(activeElement).trigger(direction);
                $(activeElement).trigger({
                    type: "mousedirection",
                    direction: direction
                });
            }, stop_check_time);

            $(activeElement).trigger(direction);
            $(activeElement).trigger({
                type: "mousedirection",
                direction: direction
            });
            oldx = e.pageX;
        });
      }
    })(jQuery)
    $(function () {
        $.mousedirection();    
    });

// Facts Count 
    if ($('.counter').length) { 
      $('.counter').counterUp({
          delay: 20,
          time: 2000
      }); 
    }

// Navigation 

/*    // Navigation top-fix
    $(window).scroll(function() {
      if ($(".navbar").offset().top > 250) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    });*/

    // Navigation Dropdown
    $(function () {
      function checkWidth() {
        var windowSize = $(window).width();
        if (windowSize > 767) {
          var hoverTimeout;
          $('.dropdown').hover(function() {
            clearTimeout(hoverTimeout);
              $(this).addClass('open');
          }, function() {
            var $self = $(this);
            hoverTimeout = setTimeout(function() {
              $self.removeClass('open');
            }, 50);
          });
        } 
      }      
      checkWidth(); // Execute on load    
      $(window).resize(checkWidth); // Bind event listener
    });

// Video Play     
    $('.btn-video-play').on('click',function() {
      $('.video-item .video-preview').append(video_url);
      $(this).hide();
    }); 

// Work Filter 
    $(function(){
      $(".filter-design").on('click',function() {
        $(".branding, .creative").fadeOut(400);
        $(".design").fadeIn(400);        
        $(".filter-nav li a").removeClass("active");
        $(".filter-design").addClass("active");
      });
      $(".filter-branding").on('click',function(){
        $(".design, .creative").fadeOut(400);
        $(".branding").fadeIn(400);
        $(".filter-nav li a").removeClass("active");
        $(".filter-branding").addClass("active");
      });
      $(".filter-creative").on('click',function(){
        $(".design, .branding").fadeOut(400);
        $(".creative").fadeIn(400);
        $(".filter-nav li a").removeClass("active");
        $(".filter-creative").addClass("active");
      });
      $(".filter-all").on('click',function(){
        $(".design, .branding, .creative").fadeIn(400);
        $(".filter-nav li a").removeClass("active");
        $(".filter-all").addClass("active");
      });   
    }); 

// Product Category Filter 
    $(function(){
      $(".filter-new").on('click',function(){
        $(".poster, .banner, .calander, .bc").fadeOut(400);
        $(".new").fadeIn(400);        
        $(".filter-nav li a").removeClass("active");
        $(".filter-new").addClass("active");
      });
      $(".filter-poster").on('click',function(){
        $(".new, .banner, .calander, .bc").fadeOut(400);
        $(".poster").fadeIn(400);
        $(".filter-nav li a").removeClass("active");
        $(".filter-poster").addClass("active");
      });
      $(".filter-banner").on('click',function(){
        $(".new, .poster, .calander, .bc").fadeOut(400);
        $(".banner").fadeIn(400);
        $(".filter-nav li a").removeClass("active");
        $(".filter-banner").addClass("active");
      });
      $(".filter-calander").on('click',function(){
        $(".new, .poster, .banner, .bc").fadeOut(400);
        $(".calander").fadeIn(400);
        $(".filter-nav li a").removeClass("active");
        $(".filter-calander").addClass("active");
      });  
      $(".filter-bc").on('click',function(){
        $(".new, .poster, .banner, .calander").fadeOut(400);
        $(".bc").fadeIn(400);
        $(".filter-nav li a").removeClass("active");
        $(".filter-bc").addClass("active");
      });  
      $(".filter-all-products").on('click',function(){
        $(".new, .poster, .banner, .calander, .bc").fadeIn(400);
        $(".filter-nav li a").removeClass("active");
        $(".filter-all-products").addClass("active");
      });   
    });

// Star Rating
    $('.rating input').change(function () {
      var $radio = $(this);
      $('.rating .selected').removeClass('selected');
      $radio.closest('label').addClass('selected');
    });
    


})(jQuery);