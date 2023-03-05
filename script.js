// smooth scroll to section when menu item is clicked
$('nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 140
      },
      800
    );
  }
});

// add active class to menu item when scrolling to section
$(window).scroll(function() {
  const scrollDistance = $(window).scrollTop();
  $('section').each(function(i) {
    if ($(this).position().top - 140 <= scrollDistance) {
      $('nav a.active').removeClass('active');
      $('nav a')
        .eq(i)
        .addClass('active');
    }
  });
}).scroll();

// close menu on link click
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  