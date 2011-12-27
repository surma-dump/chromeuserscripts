// ==UserScript==
// @name        Trello “Open All” button
// @description	Adds a “Open All” button to the Trello notification page
// @include      http://trello.com/*
// @include      https://trello.com/*
// @match        http://trello.com/*
// @match        https://trello.com/*
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
var addJQuery = function(callback) {
	if(window.jQuery) {
		callback();
		return;
	}
	var script = document.createElement("script");
	script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "(" + callback.toString() + ")();";
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
};

var run = function() {
	var getNotifications = function() {
		return $('#content .list-notifications .phenom');
	};

	var highlight = function() {
		getNotifications().each(function() {
			if(!$(this).hasClass('unread')) {
				$(this).css('background-color', 'transparent');
			} else {
				$(this).css('background-color', 'rgba(255,0,0,0.5)');
			}
		});
		setTimeout(highlight, 4000);
	};

	var createOpenAllButton = function() {
		var $button = $('<div>')
				.text('Open all')
				.css({
				'background-color': '#1D6087',
				'position': 'fixed',
				'bottom': '0px',
				'right': '0px',
				'padding': '10px'
		});
		$button.click(function() {
			var list = new Array();
			getNotifications().each(function() {
				if($(this).hasClass('unread')) {
					var link = $(this).find('.phenom-desc > a.action-card').attr('href');
					if($.inArray(link, list) == -1) {
						list.push(link);
					}
				}
			})
			$.each(list, function(idx, item) {
				window.open(item);
			})
			setTimeout(function() {location.reload();}, 1000);
		})
		$('body').append($button);
	};

	highlight();
	createOpenAllButton();
};

addJQuery(run);


