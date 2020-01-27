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
        "img/bgslides/4.jpeg",
        "img/bgslides/1.jpg", 
        "img/bgslides/2.jpg",
        "img/bgslides/3.jpg",
        "img/bgslides/2.jpeg"
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


  $(function() {
    Grid.init();
  });
  
  function eraseCookie(name) {   
      document.cookie = name+'=; Max-Age=-99999999;';  
  }

  function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "students.xml", false); // sync load
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("List");
    for (i = 0; i <x.length; i++) { 
      var students = x[i].getElementsByTagName('Student');
      for (j = 0; j < students.length; ++j) {
        var name = students[j].getElementsByTagName("Name")[0].childNodes[0].nodeValue;
        var ID   = students[j].getElementsByTagName("ID")[0].childNodes[0].nodeValue;
        // console.log(name + ID);
        idPool.add(ID);
      }
    }
    // console.log(idPool);
    var tmp = getCookie("sid");
    // console.log(tmp);
  }



    loadXMLDoc()
    
    var sid = getCookie("sid");
    // console.log(idPool);
    if (idPool.has(sid)) {
      $(".login").each(function() {
        console.log("verified user");
        $(this).show();
        $(this).removeClass("login");
      });
    }
    else {
      $(".login").each(function() {
        console.log("guest user");
        $(this).hide();
      });
    }
})(jQuery);
