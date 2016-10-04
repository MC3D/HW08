jQuery.noConflict();

(function($) {
	'use strict';
	$('#menu section p').on('click',function() {

		if ( $(this).parents('section').hasClass('hide') ){

		$(this).parents().siblings('section').addClass('hide');
		$(this).parents('section').removeClass('hide');}

		else{
			$(this).parents('section').addClass('hide');
		}
	});
})(jQuery);
