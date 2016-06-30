$(document).ready(function(){
				//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
				//Vertical Sliding
				$('.boxgrid.slidedown').hover(function(){
					$(".cover", this).stop().animate({top:'-230px'},{queue:false,duration:500});
				}, function() {
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:500});
				});
				//Full Caption Sliding (Hidden to Visible)
				$('.boxgrid.captionfull').hover(function(){
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:500});
				}, function() {
					$(".cover", this).stop().animate({top:'230px'},{queue:false,duration:500});
				});


				});
				

			    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 400,
        navigation: false,
        
      });
    });


