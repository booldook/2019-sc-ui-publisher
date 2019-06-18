/* Selector(선택자) */
/*
$("body")
$(".wrap")
$("#bt1")
$("body").children(".wrap")
$("body").find(".wrap").eq(2)
$(this)
*/

/* Event(이벤트) */
$(".btn").click(function () {
	var n = $(this).index();
	$(".box").eq(n).addClass("ani1-cls");
	setTimeout(function () {
		$(".box").eq(n).removeClass("ani1-cls");
	}, 1000);
});
// click|mouseover|mouseleave|mouseenter|resize|change|
// https://www.w3schools.com/jquery/jquery_ref_events.asp


/* Animation(에니메이션) */
// https://www.w3schools.com/jquery/eff_animate.asp


/* DOM(Document Object Model) */
/* Ajax(통신) */