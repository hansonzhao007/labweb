(function($) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  //navigation
  $('.navigation').onePageNav({
    scrollOffset: 0
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //Home Background Slider

  $(function() {

    $.mbBgndGallery.buildGallery({
      containment: "#intro",
      timer: 3000,
      effTimer: 1000,
      controls: "#controls",
      grayScale: false,
      shuffle: false,
      preserveWidth: false,
      effect: "fade",
      effect: {
        enter: {
          left: 0,
          opacity: 0
        },
        exit: {
          left: 0,
          opacity: 0
        },
        enterTiming: "ease-in",
        exitTiming: "ease-in"
      },

      // If your server allow directory listing you can use:
      // (however this doesn't work locally on your computer)

      // folderPath:"img/bgslides/",

      // else:

      images: [
        "img/bgslides/1.png",
        "img/bgslides/2.png"
      ],

      onStart: function() {},
      onPause: function() {},
      onPlay: function(opt) {},
      onChange: function(opt, idx) {},
      onNext: function(opt) {},
      onPrev: function(opt) {}
    });


  });

  // featured text
  $("#rotator .1strotate").textrotator({
    animation: "dissolve",
    speed: 4000
  });
  $("#rotator .2ndrotate").textrotator({
    animation: "dissolve",
    speed: 4000
  });

  // Fixed navbar
  $(window).scroll(function() {

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');

    } else if (scrollTop == 0) {

      $('.navbar-default').removeClass('fixed-to-top');
    }
  });


  //parallax
  if ($('#parallax1').length || $('#parallax2').length) {

    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }

  function navbar() {

    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('show-nav');
    } else {
      $('#navigation').removeClass('show-nav');
    }

  }

  $(document).ready(function() {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function() {
        navbar();
      });

    }

  });


  $(window).resize(function() {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function() {
        navbar();
      });

    }

  });


 
  //animation
  new WOW().init();

  // news list
  var dd = $('.news').easyTicker({
    direction: 'up',
		easing: 'easeInOutCirc',
		speed: 10,
		interval: 3000,
		height: 'auto',
		visible: 1,
		mousePause: 1,
    controls: {
			up: '.up',
			down: '.down',
			toggle: '.toggle',
			stopText: 'Stop !!!'
		}
  }).data('easyTicker');

  $('.vis1').click(function(){
		dd.options['visible'] = 1;
		
	});
	
	$('.visall').click(function(){
		// dd.stop();
		dd.options['visible'] = 0 ;
		// dd.start();
	});

  //Google Map
  var get_latitude = $('#google-map').data('latitude');
  var get_longitude = $('#google-map').data('longitude');

  function initialize_google_map() {
    var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize_google_map);
  

  $(function() {
    Grid.init();
  });
  
})(jQuery);
