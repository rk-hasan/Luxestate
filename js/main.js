$(document).ready(function(){
	$('a').click(function(){
		if(this.hash !== ""){
			var hash = this.hash;


			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900);
		}
	});
})