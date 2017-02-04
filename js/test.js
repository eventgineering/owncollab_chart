(function (OC, window, $, undefined) {
'use strict';
	$(document).ready(function () {
		$('#sidebar_tab_3').click(function () {
			var $box = $('#colorPicker');
			$box.tinycolorpicker();
			console.log('clicked');
		});

	});
})(OC, window, jQuery);
