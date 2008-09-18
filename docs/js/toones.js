var Toones = function (title, message) {
	this.title = title;
	this.message = message;
	this.options = arguments[2] || {};
	this.container = document.getElementById('toones');
	this.init();
};

Toones.prototype = {
	init: function () {
		
		this.options = $.extend({
			type: this.container.className,
			display_time: 5000
		}, this.options);
		
		this._clearTimeout();
		this._setType();
		this._setMessage();
		this._display();
	},
	_setType: function () {
		this.container.className = (this.options.type == 'success') ? 'success' : 'failure';
	},
	_setMessage: function () {
		$(this.container).children('h1').text(this.title);
		$(this.container).children('p').text(this.message||'');
	},
	_clearTimeout: function () {
		if(this.timeout) {
			clearTimeout(this.timeout);
		}
	},
	_display: function () {
		var container = this.container;
		$(container).slideDown('slow');
		this.timeout = setTimeout(function () {
			$(container).slideUp('slow');
		}, this.options.display_time);
	}
};

if($('#toones p').text() != 'Message') {
	new Toones($('#toones h1').text(), $('#toones p').text());
}
$(document).scroll(function () {
	var clip = ($(this).scrollTop() > 0) ? '-' + $(this).scrollTop() : 0;
	$('#toones').css({bottom: clip+'px'});
});