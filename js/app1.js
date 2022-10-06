
     $(document).ready(function() {
      new WOW().init();
      var $isAnimatedSecond = $('.pemicu .is-animated');
      var $isAnimatedOne = $('.one .is-animated');
      var $isAnimatedDaftar = $('.daftar .is-animated');
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
                  
                    // $isAnimatedFour.eq(0).addClass('animate__animated animate__fadeInRight').attr("data-wow-delay","2.5s");
                    // $isAnimatedFour.eq(1).addClass('animate__animated animate__fadeInLeft').attr("data-wow-delay","3.8s");;
                    // $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
                    // $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
                    // $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    // $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
                    // });
                }
        },
          navigation: false,
          autoScrolling: true,
          navigationPosition: 'right',
          scrollOverflow: true,
          navigationTooltips:["one","two","three"],
          
        });
      });


      