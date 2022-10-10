
     $(document).ready(function() {
      new WOW().init();
      var $isAnimatedSecond = $('.pemicu .is-animated');
      var $isAnimatedOne = $('.one .is-animated');
      var $isAnimatedDaftar = $('.daftar .is-animated');
      var $isAnimatedDaftar2 = $('.daftar2 .is-animated');
      var $isAnimatedDaftar3 = $('.daftar3 .is-animated');
        $('#fullpage').fullpage({
          onLeave: function(index,nextIndex, direction){
            // animate__animated animate__fadeIn" data-wow-delay="0.5s"
             // first animation
                if( index == 1 && nextIndex == 2 ) { 
                  $isAnimatedOne.eq(0).addClass('animate__animated animate__fadeIn animate__delay-2s	2s')
                  //$isAnimatedSecond.eq(0).css('animation-delay', '.3s');
                  // $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
                  // $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
                  //$isAnimatedSecondSingle.addClass('animated animate__fadeInRightBig').css('animation-delay', '1.7s');
                }
                
                else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
                  $isAnimatedSecond.eq(0).addClass('animate__animated animate__fadeIn animate__delay-1s	1s');
                  $isAnimatedSecond.eq(1).addClass('animate__animated animate__fadeInRight animate__delay-2s	2s')
                  $isAnimatedSecond.eq(2).addClass('animate__animated animate__fadeInLeft animate__delay-2s	2s')
                  $isAnimatedSecond.eq(3).addClass('animate__animated animate__fadeInRight animate__delay-3s	3s')
                  $isAnimatedSecond.eq(4).addClass('animate__animated animate__fadeInLeft animate__delay-3s	3s')
                    // $isAnimatedThird.addClass('animate__animated animate__fadeInLeft animate__repeat-2	2')
                    // $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
                    // $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
                }

           
                // third animation
                else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
                  $isAnimatedDaftar.eq(0).addClass('animate__animated animate__fadeIn animate__delay-1s	1s');
                  $isAnimatedDaftar.eq(1).addClass('animate__animated animate__fadeInLeft animate__delay-2s	2s');
                  $isAnimatedDaftar.eq(2).addClass('animate__animated animate__fadeInLeft animate__delay-2s	2s');
                  $isAnimatedDaftar.eq(3).addClass('animate__animated animate__fadeInRight animate__delay-3s	3s');
                  $isAnimatedDaftar.eq(4).addClass('animate__animated animate__fadeInRight animate__delay-3s	3s');
                  $isAnimatedDaftar.eq(5).addClass('animate__animated animate__fadeIn animate__delay-4s	4s');
                  $isAnimatedDaftar.eq(6).addClass('animate__animated animate__fadeIn animate__delay-4s	4s');
                }

                // third animation
                else if( ( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5 ) {
                  $isAnimatedDaftar2.eq(0).addClass('animate__animated animate__fadeIn animate__delay-1s	1s');
                  $isAnimatedDaftar2.eq(1).addClass('animate__animated animate__fadeInLeft animate__delay-2s	2s');
                  $isAnimatedDaftar2.eq(2).addClass('animate__animated animate__fadeInLeft animate__delay-2s	2s');
                  $isAnimatedDaftar2.eq(3).addClass('animate__animated animate__fadeInRight animate__delay-3s	3s');
                  $isAnimatedDaftar2.eq(4).addClass('animate__animated animate__fadeInRight animate__delay-3s	3s');
                  $isAnimatedDaftar2.eq(5).addClass('animate__animated animate__fadeIn animate__delay-4s	4s');
                  $isAnimatedDaftar2.eq(6).addClass('animate__animated animate__fadeIn animate__delay-4s	4s');
                }

                 // third animation
                 else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ) && nextIndex == 6 ) {
                  $isAnimatedDaftar3.eq(0).addClass('animate__animated animate__fadeIn animate__delay-1s	1s');
                  $isAnimatedDaftar3.eq(1).addClass('animate__animated animate__fadeInLeft animate__delay-2s	2s');
                  $isAnimatedDaftar3.eq(2).addClass('animate__animated animate__fadeInLeft animate__delay-2s	2s');
                  $isAnimatedDaftar3.eq(3).addClass('animate__animated animate__fadeInRight animate__delay-3s	3s');
                  $isAnimatedDaftar3.eq(4).addClass('animate__animated animate__fadeInRight animate__delay-3s	3s');
                  $isAnimatedDaftar3.eq(5).addClass('animate__animated animate__fadeIn animate__delay-4s	4s');
                  $isAnimatedDaftar3.eq(6).addClass('animate__animated animate__fadeIn animate__delay-4s	4s');
                }
        },
          navigation: false,
          autoScrolling: true,
          navigationPosition: 'right',
          scrollOverflow: true,
          navigationTooltips:["one","two","three"],
          
        });

        var makeItRain = function() {
          //clear out everything
          $('.rain').empty();
        
          var increment = 0;
          var drops = "";
          var backDrops = "";
        
          while (increment < 100) {
            //couple random numbers to use for various randomizations
            //random number between 98 and 1
            var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            //random number between 5 and 2
            var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
            //increment
            increment += randoFiver;
            //add in a new raindrop with various randomizations to certain CSS properties
            drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
            backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
          }
        
          $('.rain.front-row').append(drops);
          $('.rain.back-row').append(backDrops);
        }
        
        $('.splat-toggle.toggle').on('click', function() {
          $('body').toggleClass('splat-toggle');
          $('.splat-toggle.toggle').toggleClass('active');
          makeItRain();
        });
        
        $('.back-row-toggle.toggle').on('click', function() {
          $('body').toggleClass('back-row-toggle');
          $('.back-row-toggle.toggle').toggleClass('active');
          makeItRain();
        });
        
        $('.single-toggle.toggle').on('click', function() {
          $('body').toggleClass('single-toggle');
          $('.single-toggle.toggle').toggleClass('active');
          makeItRain();
        });
        
        makeItRain();
      });


      