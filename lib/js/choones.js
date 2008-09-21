(function () {
	$.choones = function (title, message) {
		// Map some properties
		this.title = title;
		this.message = message;
		this.options = arguments[2] || {};
		init();
	}
	
	//
	// == Public methods
	//
	$.extend($.choones, {
	
		// Default options
		options: $.extend({
			type: 'success',
			display_time: 5000
		}, $.choones.options),
		
		display: function () {
			$('#choones').slideDown();
			this.timeout = setTimeout(function () {
				$('#choones').slideUp();
			}, $.choones.options.display_time);
		}
		
	});
	
	//
	// == Private methods
	//
	
	init = function () {
		resetTimeout();
		setType();
		setMessage();
		$.choones.display();
	}
	
	resetTimeout = function () {
		if(this.timeout) {
			clearTimeout(this.timeout);
		}
	}
	
	// Set either a success or failure state
	setType = function () {
		$('#choones')[0].className = ($.choones.options.type == 'success') ? 'success' : 'failure';
	}
	
	setMessage = function () {
		$('#choones').children('h1').text($.choones.title);
		$('#choones').children('p').text($.choones.message || '');
	}

	// 
	// == Events
	//
	
	// If there is a message to display already in the DOM, display it

	// if($('#choones').children('p').text() != 'Message') {
	// 	$.choones.display();
	// }
	// When the user scrolls we need to re-tack the message area to the bottom of the screen
	$(document).scroll(function () {
		var clip = ($(this).scrollTop() > 0) ? '-' + $(this).scrollTop() : 0;
		$('#choones').css({bottom: clip + 'px'});
	});
})(jQuery);