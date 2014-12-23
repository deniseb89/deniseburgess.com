// VIEWPORT STUFF
function hideEverything() {
  $('.drop-down-menu').hide();
  $('#about').hide();
  $('#portfolio').hide();
  $('#resume').hide();
  $('#hire-me').hide();
  $('.arrow').hide();
}


// MENU DROPDOWN
function menuToggle() {
  $('.nose').on('click', function() {
    $('.drop-down-menu').slideDown(750);
  });
}

// BACK
function showArrow() {
  $('.arrow').fadeIn(500);
};

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
    showArrow();
  });
}

// PORTFOLIO
function showPortfolioPage() {
  $('a[href="#portfolio"]').on('click', function() {
    $('.drop-down-menu').toggle('slide', {direction: 'up'}, function() {
      $('#portfolio').show('explode', 750);      
    }, 750);    
    showArrow();
  });
}

// RESUME
function showResumePage() {
  $('a[href="#resume"]').on('click', function() {
    $('.drop-down-menu').toggle('slide', {direction: 'up'}, function() {
      $('#resume').show('highlight', 750);      
    }, 750);
    showArrow();
  });
}

// HIRE ME
function showHireMePage() {
  $('a[href="#hire-me"]').on('click', function() {
    $('.drop-down-menu').toggle('slide', {direction: 'up'}, function() {
      $('#hire-me').show('scale', 750);      
    }, 750);
    showArrow();
  });
}


$(function() {
  hideEverything();
  menuToggle();
  backHome();
  showAboutPage();
  showPortfolioPage();
  showResumePage()
  showHireMePage();
})
