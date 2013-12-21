function sticky_relocate() {
<<<<<<< HEAD
	var window_top = $(window).scrollTop();
=======
  var window_top = $(window).scrollTop();
>>>>>>> a67235b4f53a5d616c58237dc2db9d7f8ab4eaff
	var div_top = $('#nav-anchor').offset().top;

	if (window_top > div_top) {
		$('#nav').addClass('stick');
	} else {
		$('#nav').removeClass('stick');
	}
}

	$(function() {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
<<<<<<< HEAD
	});
=======
	});
>>>>>>> a67235b4f53a5d616c58237dc2db9d7f8ab4eaff
