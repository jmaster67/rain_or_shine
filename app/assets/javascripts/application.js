// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$(".rain, .pulse, .sun").show();
	$("#locationText").hide();
	$("form").hide();
	$("#buttonsAll").hide();
	$("#login-button").hide();

	// number of drops created.
	var numberDrops = 200; 

	// function to generate a random number range.
	function randRange( minNum, maxNum) {
	  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
	}

	var w = 0;

	$( window ).load( function(){
	   w = $( window ).width();
	   w=w/2;
	   
	   // Make it rain
	   createRain(w);  	 

	});

	$( window ).resize( function(){
	  if( w != $( window ).width() ){
	    w = $( window ).width();
	    w=w/2;
	    // Make it rain
     	createRain(w);
     	 
	}

	
	});

	// function to generate drops
	function createRain(w) {

		for( i=1;i<numberDrops;i++) {
		var dropLeft = randRange(0,w);
		var dropTop = randRange(-1000,600);

		$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
		$('#drop'+i).css('left',dropLeft);
		$('#drop'+i).css('top',dropTop);
		}
	}


	$("button").on("click", function() {

	  $(".rain, .pulse, .sun, .frontButtom").hide();
	  	
		$("#black").css('background-image', 'url("img/cloud.jpg")');
		$("#text").css('color', 'white');
		$("#text").css('text-shadow','-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
		$("#subText").css('color', 'white');
		// $("#subText").css('text-shadow','-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white');
		$("#text").css('margin-top', '10%');
		$("#text").css('margin-left', '50%');
		$("#subText").css('margin-top', '16%');
		$("#subText").css('margin-left', '50%');
		$("#subText").css('font-size', '2vw');
		// }, 500);
		$("form").show();
		$("#locationText").show();
		$("#buttonsAll").show();
		$("#login-button").show();

		$('#login-button').click(function(){
			$('#login-button').fadeOut("slow",function(){
				$("#container").fadeIn();
				TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
				TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
			});
		});

		$(".close-btn").click(function(){
			TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
			TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
			$("#container, #forgotten-container").fadeOut(800, function(){
				$("#login-button").fadeIn(800);
			});
		});

	/* Forgotten Password */
		$('#forgotten').click(function(){
		  $("#container").fadeOut(function(){
		    $("#forgotten-container").fadeIn();
		  });
		});	  
	});	
});