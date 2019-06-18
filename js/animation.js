$("#bt1").click(function(){
	$(".box").css({"transform":"rotate(360deg)"});
});
$("#bt2").click(function(){
	$(".box").css({"transform":"rotate(0deg)"});
});
$("#bt3").click(function(){
	$(".box").css({"animation-play-state":"running"});
});

$("#bt4").click(function(){
	$(".box").css({"animation-play-state":"paused"});
});