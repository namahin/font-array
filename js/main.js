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

// profile image prview js
function previewImage(event) {
	var reader = new FileReader();
	var imageField = document.getElementById("profileIMG")
	reader.onload = function () {
		if (reader.readyState == 2) {
			imageField.src = reader.result;
		}
	}
	reader.readAsDataURL(event.target.files[0]);
}

// add new field at font submit 
$(function () {
	$(".repeat").on('click', function (e) {
		e.preventDefault();
		var $self = $(this);
		$self.before($self.prev('.repeatField').clone());
	});
});