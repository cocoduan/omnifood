$(document).ready(function() {
  /* add / remove sticky class */
  $('.js--section-features').waypoint(function(direction) {
    if (direction === "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  })

  /* scroll on button click */
  scrollOnHeaderBtnClick()

  clickOnNav();

  animateOnScroll();
});

function scrollOnHeaderBtnClick() {
  $('.js-scroll-to-plans').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-plans-section').offset().top
    }, 1000);
  });

  $('.js-scroll-to-features').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);
  });
}

/**
 * https://css-tricks.com/snippets/jquery/smooth-scrolling/
 * @return
 */
function clickOnNav() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}

function animateOnScroll() {
  /* feature list items fade in */
  $('.js--feature-list').waypoint(function() {
    $('.js--feature-list').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--city-list').waypoint(function() {
    $('.js--city-list').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  /* how it works phone image fade up */
  $('.js--phone-image').waypoint(function() {
    $('.js--phone-image').addClass('animate__animated animate__fadeInUp');
  }, {
    offset: '50%'
  });

  /* first plan box pulse */
  $('.js--plan-first').waypoint(function() {
    $('.js--plan-first').addClass('animate__animated animate__pulse');
  }, {
    offset: '50%'
  });
}
