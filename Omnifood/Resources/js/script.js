$(document).ready(function() {
    
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
  
    /* scroll */
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    
    /* navi scroll */
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
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
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });  
    
    /*Animations*/
    
    $('.js--wp-1').waypoint(  
    (direction) => {
    // add the class animated__animated and animate__fadeIn to waypoint 1
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
//When you reach waypoint 2
  $('.js--wp-2').waypoint(
    (direction) => {
// add the class animated__animated and animate__fadeInLeft to waypoint 2
      $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
    },
    {
      offset: '50%',
    }
  );
//When you reach waypoint 3
  $('.js--wp-3').waypoint(
    (direction) => {
 // add the class animated__animated and animate__fadeIn to waypoint 3
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
//When you reach waypoint 4
  $('.js--wp-4').waypoint(
    (direction) => {
// add the class animated__animated and animate__bounceIn to waypoint 4
      $('.js--wp-4').addClass('animate__animated animate__bounceIn');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js--header').waypoint(
    (direction) => {
      if (direction === 'up') {
// remove the animation classes from all waypoints (1 - 4)
        $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
        $('.js--wp-2').removeClass('animate__animated animate__fadeInLeft');
        $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
        $('.js--wp-4').removeClass('animate__animated animate__bounceIn');
      }
    },
    {
      offset: '-25%',
    }
  );
});