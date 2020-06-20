/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'youtube-instabug\'">' + entity + '</span>' + html;
	}
	var icons = {
		'yti-share': '&#xe900;',
		'yti-thumbs-down': '&#xe901;',
		'yti-thumbs-up': '&#xe902;',
		'yti-verified-channel': '&#xe903;',
		'yti-search': '&#xe904;',
		'yti-close': '&#xe905;',
		'yti-filter': '&#xe906;',
		'yti-more-vertical': '&#xe907;',
		'yti-more-horizontal': '&#xe908;',
		'yti-spinner-dots': '&#xe97f;',
		'yti-spinner-circle': '&#xe981;',
		'yti-youtube': '&#xea9d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/yti-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
