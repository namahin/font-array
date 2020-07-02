// alphabat category js
$(function () {
	$('#fontFilter').listnav({
		initHidden: false,
		noMatchText: 'No font for this Alphabet'
	});
	$('.filter a').click(function (e) {
		e.preventDefault();

	});
});


// add .italic-active class & remove .italic class
$('.italic').click(function () {
	var $this = $(this);
	if ($this.hasClass('italic')) {
		$this.removeClass('italic').addClass('italic-active');
	} else if ($this.hasClass('italic-active')) {
		$this.removeClass('italic-active').addClass('italic');
	} else {
		$this.addClass('italic')
	}
})