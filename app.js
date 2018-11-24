
$( document ).ready(() => {
  
  // $('.projects').mouseover(() => {
  //   // console.log('works');
  //   $('.project-stack').css("display", "block")
  // }).mouseleave(() => {
  //   // console.log('yup')
  //   $('.project-stack').css("display", "none")
  // })

  // Toggle visible on burger menu
  // $('.menu-icon').click(function() {
  //   $('.link-wrap').toggleClass('visible');
  // });

  $('#menu-icon').on('click', function(){
    $('.menu').toggleClass('expand');
    return false;
  });

  // Stick nav to top of screen
  var stickyNavTop = $('#nav').offset().top;

  $(window).scroll(function() {  
      if ($(window).scrollTop() > stickyNavTop) {
          $('#nav').addClass('fixed');
      }
      else {
          $('#nav').removeClass('fixed');
      }  
  });

  // Smooth Scrolling
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

  let modal = document.querySelector(".modal");
  let trigger = document.querySelector(".trigger");
  let closeButton = document.querySelector(".close-button");

  function toggleModal() {
      modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
      if (event.target === modal) {
          toggleModal();
      }
  }

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

})
