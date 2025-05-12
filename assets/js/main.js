"use strict";

document.addEventListener("DOMContentLoaded", function () {
    $(function ($) {
      // preloader
      setTimeout(function() {
        $('#preloader').fadeToggle();
      }, 500);

      // Aos Animation
      $(document).ready(function () {
        $('.title').attr({
           "data-aos": "zoom-in",
           "data-aos-duration": "2000"
        });
    
        AOS.init({
          once: true,
        });
     });
      //>> Aos Animation <<//
    
    //>> Mobile Menus <<//
      var fixed_top = $(".one__header");
      var ScrollTop = $(".scroll-top"); // Replace with the actual class or ID of your scroll-top element

      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("animated fadeInDown header-fixed");
        } else {
          fixed_top.removeClass("animated fadeInDown header-fixed");
        }

        if ($(this).scrollTop() < 600) {
          ScrollTop.removeClass("active");
        } else {
          ScrollTop.addClass("active");
        }
      });
    //>> Mobile Menus <<//

    // navbar custom//
    $('.navbar-toggle-btn').on('click', function () {
      $('.navbar-toggle-item').slideToggle(300);
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('open');
    });
    $('.menu-item a').on('click', function () {
      $(this).siblings("ul").slideToggle(300);
    });
    // navbar custom//
      
      // swipper slide //
        var swiper = new Swiper(".free__livewrap", {
          loop: true,
          slidesPerView: 1,
          slidesToShow: 1,
          spaceBetween: 48,
          speed: 1000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 1400,
          },
          breakpoints: {
            1400: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
        }
        });
      // swipper slide //

      // educational slide //
        var swiper = new Swiper(".educational__wrap", {
          loop: true,
          slidesPerView: 1,
          slidesToShow: 1,
          spaceBetween: 24,
          speed: 1000,
          navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
          autoplay: {
            delay: 1200,
          },
          breakpoints: {
            1400: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 14,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
        }
        });
      // swipper slide //


      	//--img comprijon--//
	const imageComparisonSlider = document.querySelector('[data-component="image-comparison-slider"]')

  function setSliderstate(e, element) {
    const sliderRange = element.querySelector('[data-image-comparison-range]');
  
    if (e.type === 'input') {
      sliderRange.classList.add('image-comparison__range--active');
      return;
    }
  
    sliderRange.classList.remove('image-comparison__range--active');
    element.removeEventListener('mousemove', moveSliderThumb);
  }
  
  function moveSliderThumb(e) {
    const sliderRange = document.querySelector('[data-image-comparison-range]');
    const thumb = document.querySelector('[data-image-comparison-thumb]');
    let position = e.layerY - 20;
  
    if (e.layerY <= sliderRange.offsetTop) {
      position = -20;
    }
  
    if (e.layerY >= sliderRange.offsetHeight) {
      position = sliderRange.offsetHeight - 20;
    }
  
    thumb.style.top = `${position}px`;
  }
  
  function moveSliderRange(e, element) {
    const value = e.target.value;
    const slider = element.querySelector('[data-image-comparison-slider]');
    const imageWrapperOverlay = element.querySelector('[data-image-comparison-overlay]');
  
    slider.style.left = `${value}%`;
    imageWrapperOverlay.style.width = `${value}%`;
  
    element.addEventListener('mousemove', moveSliderThumb);
    setSliderstate(e, element);
  }
  
  function init(element) {
    const sliderRange = element.querySelector('[data-image-comparison-range]');
  
    if ('ontouchstart' in window === false) {
      sliderRange.addEventListener('mouseup', e => setSliderstate(e, element));
      sliderRange.addEventListener('mousedown', moveSliderThumb);
    }
  
    sliderRange.addEventListener('input', e => moveSliderRange(e, element));
    sliderRange.addEventListener('change', e => moveSliderRange(e, element));
  }
  
  init(imageComparisonSlider);
    //--img comprijon--//

      });
  });


