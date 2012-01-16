// ==UserScript==
// @name        YouTube HD enabled
// @description	Reloads all URLs with `&hd=1` to turn on >=720p by default
// @include      http://www.youtube.com/*
// @include      https://www.youtube.com/*
// @match        http://www.youtube.com/watch?*
// @match        https://www.youtube.com/watch?*
// ==/UserScript==

(function() {
	if(document.location.search.indexOf('hd=1') == -1) {
		document.location.href = document.location.href + '&hd=1';
	}
})()


