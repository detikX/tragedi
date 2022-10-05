$(document).ready(function () {
    new WOW().init();
	/* Slide variable */
		var slideIndexBis = 1;
		var sliding = false;
    var $isAnimatedSecond = $('.second .is-animated');
    var $isAnimatedFour = $('.four .is-animated');
	$('#fullpage').fullpage({
        onLeave: function(index,nextIndex, direction){
            // animate__animated animate__fadeIn" data-wow-delay="0.5s"
             // first animation
                if( index == 1 && nextIndex == 2 ) { 
                    $isAnimatedSecond.addClass('animate__animated animate__fadeInRightBig').attr("data-wow-delay","2.5s"); 
                    //$isAnimatedSecond.eq(0).css('animation-delay', '.3s');
                    // $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
                    // $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
                    //$isAnimatedSecondSingle.addClass('animated animate__fadeInRightBig').css('animation-delay', '1.7s');
                }

                else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
                    // $isAnimatedThird.addClass('animate__animated animate__fadeInLeft animate__repeat-2	2').attr("data-wow-delay","2.5s"); 
                    // $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
                    // $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
                }

           
                // third animation
                else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
                    $isAnimatedFour.eq(0).addClass('animate__animated animate__fadeInRight').attr("data-wow-delay","2.5s");
                    $isAnimatedFour.eq(1).addClass('animate__animated animate__fadeInLeft').attr("data-wow-delay","3.8s");;
                    // $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
                    // $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
                    // $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    // $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
                    // });
                }
        },
        // first animation
		// anchors: [
		// 	'page1',
		// 	'page2',
		// 	'page3',
		// 	'page4'
		// ],
		sectionsColor: [
			'#00B0FF',
			'#00C853',
			'#FF1744',
			'#6200ea'
		]
	});
	
});