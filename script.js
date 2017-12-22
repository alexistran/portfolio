$(document).ready(function(){

	$(".picture").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".picture").removeClass("pic-click");

	});
});