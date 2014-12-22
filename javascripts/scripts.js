// VIEWPORT STUFF
function hideEverything() {
  $('.drop-down-menu').hide();
  $('#about').hide();
  $('#portfolio').hide();
  $('#resume').hide();
  $('#hire-me').hide();
}


// MENU DROPDOWN
function menuToggle() {
  $('.nose').on('click', function() {
    $('.drop-down-menu').slideDown(750);
  });
}

// BACK
function backHome() {
  $('.arrow').on('click', function() {
    hideEverything();
    $('.drop-down-menu').slideDown(750);      
  });
}

// ABOUT
function showAboutPage() {
  $('a[href="#about"]').on('click', function() {
    $('.drop-down-menu').toggle('slide', {direction: 'up'}, function() {
      $('#about').show('fold', 750);      
    }, 750);
  });
}



$(function() {
  hideEverything();
  menuToggle();
  showAboutPage();
  backHome();
})
