$(document).ready(function () {
	$('#tabs li').on('click', function () {
		var tab = $(this).data('tab');

		$('#tabs li').removeClass('is-active');
		$(this).addClass('is-active');

		$('#tab-content .tabcontent').removeClass('is-active');
		$('.tabcontent[data-content="' + tab + '"]').addClass('is-active');
	});
});