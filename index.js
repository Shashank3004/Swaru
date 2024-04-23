
/*animation*/
$(document).ready(function ()
{
    // Initialize AOS library
   AOS.init({
     duration: 1000, // Duration of animations
     once: true // Repeats the animation only once
    });

   // Smooth scrolling to top
  $('.scrollToTopButton').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
   });
});

/* close button*/
function toggleNavbar() {
    var menuButton = document.querySelector('.navbar-toggler');
    var closeButton = document.querySelector('.btn-close');

    menuButton.classList.add('d-none');
    closeButton.classList.remove('d-none');
}

function closeNavbar() {
    var menuButton = document.querySelector('.navbar-toggler');
    var closeButton = document.querySelector('.btn-close');

    menuButton.classList.remove('d-none');
    closeButton.classList.add('d-none');

    var navbarCollapse = document.querySelector('.collapse');
    navbarCollapse.classList.remove('show'); // Close the navbar
}


