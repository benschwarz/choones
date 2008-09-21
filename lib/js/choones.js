(function ($) {
	$.choones = function (title, message) {
		var args = arguments[2] || {};
		
		// Default settings
		defaults = {
			type: 'success',
			display_time: 5000
		};
		
		init(title, message, args);
	}
	
	//
	// == Public methods
	//
	$.extend($.choones, {
		display: function () {
			$('#choones').slideDown();
			this.timeout = setTimeout(function () {
				$('#choones').slideUp();
			}, settings.display_time);
		}
	});
	
	//
	// == Private methods
	//
	
	init = function (title, message, args) {
		display = {title: title, message: message};
		settings = $.extend(defaults, args);
		
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
		$('#choones')[0].className = (settings.type == 'success') ? 'success' : 'failure';
	}
	
	setMessage = function () {
		$('#choones').children('h1').text(display.title);
		$('#choones').children('p').text(display.message || '');
	}

	// 
	// == Events
	//
	
	// If there is a message to display already in the DOM, display it

	if($('#choones').children('p').text() != 'Message') {
		display();
	}
	
	// When the user scrolls we need to re-tack the message area to the bottom of the screen
	$(document).scroll(function () {
		var clip = ($(this).scrollTop() > 0) ? '-' + $(this).scrollTop() : 0;
		$('#choones').css({bottom: clip + 'px'});
	});
})(jQuery);