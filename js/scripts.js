$(document).ready(function () {
	$(".section-header ul li a").click(function () {
		$(".section-header ul li a").removeClass('active-tab');
		$(this).addClass('active-tab');
	});
	$(".nav-links ul li a").click(function () {
		$(".nav-links ul li a").removeClass('active-link');
		$(this).addClass('active-link');
		var getContent = $(this).text()
		$(".section-header h1").html(getContent)
	});
});