//-------------------- ProjectA Dynamic Variables ---------------------------
var navItemWidth = 80;
var carouselInterval = 10000;
var navDuration = 600;
var navShrink = 2.5;
var carouselDirection = 'right'; //Accepts right or left
var carouselFade = 200;
var dropSpeed = 400;

//Landing page fading down animation
function fadeDown() {
  $('.fade-down').css({'top':'0px','opacity':'1'});
};

//Calendar vars this could be way better but lack of time
var monthName = ['January', 'February', 'March', 'April', 'May'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var february = [ ' ', ' ', ' ', ' ', ' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, ' ', ' '];
var march = [ ' ', ' ', ' ', ' ', ' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var april = [ ' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, ' ', ' ', ' ', ' '];
var may = [ ' ', '  ', ' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, ' ', ' '];

//Variables for the calendar changing
var date = new Date();
var m = date.getMonth();
var today = date.getDay();
var j = 1;
var scheduled;
var isScheduled = false;

//Function uses current month to determine which array of numbers to load
function monthChange(month) {
  $('.month').html(monthName[month]);
  for(var i = 0; i < 5; i++) {
    $('.days').append('<tr></tr>');
    while(j < 36) {
      switch(month) {
        case 1:
          $('.days tr:nth-child(' + (i + 2) + ')').append('<td>' + february[j-1] + '</td>');
          break;

        case 2:
          $('.days tr:nth-child(' + (i + 2) + ')').append('<td>' + march[j-1] + '</td>');
          break;

        case 3:
          $('.days tr:nth-child(' + (i + 2) + ')').append('<td>' + april[j-1] + '</td>');
          break;

        case 4:
          $('.days tr:nth-child(' + (i + 2) + ')').append('<td>' + may[j-1] + '</td>');
          break;
      }
      if((j % 7) === 0) {
        j++;
        break;
      }
      j++;
    }
  }
};

//Functions opens the scheduling modal when clicking on an appropriate date
function modal() {
  $('.days > tbody > tr > td').click(function() {
    if($(this).html() !== ' ' && isScheduled === false) {
      $('.modal').fadeIn();
      $('body').css('overflow', 'hidden');
      scheduled = $(this);
    }
  });
  $('.modalform i').click(function() {
     $('.modal').fadeOut();
     $('body').css('overflow', 'auto');
  });
};

//Function submits the scheduling and puts the time into the calendar
function schedule() {
  var selected = $('#times option:selected').text();
  $('.modalform').html('<p>Thank you for choosing Accuracy</p>');
  scheduled.append('<div>' + selected + '</div>');
  isScheduled = true;
  setTimeout(function () {
    $('.modal').fadeOut();
    $('body').css('overflow', 'auto');
  }, 2000);
};

//Redirects the user to the homepage after contacting
function redirect() {
  $('.contact').html('<h4>Thank you for contacting us. You will be redirected to the homepage</h4>');
  setTimeout(function () {
    window.location.href = "http://accuracy.services";
  }, 3000);
};

$(document).ready(function() {
  monthChange(m);
  modal();
});
