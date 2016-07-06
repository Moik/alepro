$(document).ready(function() {

	$(".top_mnu ul a[href*='#']").mPageScroll2id();

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$('.popup').magnificPopup({type:'image'});
	$('.popup_content').magnificPopup({type:'inline', midClick: true, showCloseBtn: true});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_flip").animated("flipInY", "fadeOutDown");
	$(".animation_left").animated("fadeInLeft", "fadeOutDown");
	$(".animation_right").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".right .resume_item").animated("fadeInRight", "fadeOutRight");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".top_mnu li a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated")
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});

	$(".portfolio_item").each(function(i) {
		$(this).find(".popup_content").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});