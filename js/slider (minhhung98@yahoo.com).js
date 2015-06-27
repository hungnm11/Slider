$(document).ready(function() {
	var speed = 500;
	var autoSwitch = true;
	var autoSwitch_speed = 4000;

	//Add active to the first slide
	$('.slide').first().addClass('active');

	// Hide all slide
	$('.slide').hide();

	// Show the first slide
	$('.active').show();

	/*$('#next').on('click', function(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	});

	$('#prev').on('click', function() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	});*/

	if(autoSwitch == true) {
		setInterval(function() {
			$('.active').removeClass('active').addClass('oldActive');
			if($('.oldActive').is(':last-child')) {
				$('.slide').first().addClass('active');
			} else {
				$('.oldActive').next().addClass('active');
			}

			$('.oldActive').removeClass('oldActive');
			$('.slide').fadeOut(speed);
			$('.active').fadeIn(speed);
		}, autoSwitch_speed);
	}

});