$(document).ready(function() {
	
	$(document).on('scroll', function() {

		var scrollPos = $(document).scrollTop();
		console.log('scrollPos ' + scrollPos);
		$('#nav a').each(function() {
			var $this = $(this);
			var hrefElement = $($this.attr("href"));
			console.log(hrefElement.position().top);
			if (hrefElement.position().top <= scrollPos && hrefElement.position().top + hrefElement.height() > scrollPos) {
				$this.removeClass('active');
				$this.addClass('active');
			} else {
				$this.removeClass('active');
			}
		});


	});

	
});