$(document).ready(function () {
	$('ul[class="nav navbar-nav navbar-right"] li').click(function (e) {
		e.preventDefault();
		$('ul[class="nav navbar-nav navbar-right"] li').removeClass('active');
		$(this).addClass('active');
	});
})
