jQuery(document).ready(function($) {

	'use strict';

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });
	$('body').delay(500).animate({"opacity": "1"}, 1500);
	$('nav').delay(2000).animate({"opacity": "1"}, 2000);
});
