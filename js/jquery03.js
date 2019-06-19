/*
var ani = "HI~";
var fn = function(){
	alert("Hello");
}
var arr = ["A","B","C", 3, 4, "Hello", {}, ani, fn];	// 배열(Array) 선언
var box = {};	// 객체(Object) 선언 - 형식 json(JavaScript Object Nation)
console.log(arr[8]);
*/

/*
var cls = "box";
var interval = setInterval(intervalFn, 1000, cls);

$(".btn").click(function(){
	cls = "box " + $(this).data("cls");
	clearInterval(interval);
	interval = setInterval(intervalFn, 1000, cls);
});

function intervalFn(clsName){
	$(".boxes").prepend('<div class="'+clsName+'"></div>');
}

for append prepend html
*/

var datas = [
	{
		tagName: "div",
		clsName: "box",
		bgColor: "red"
	},{
		tagName: "div",
		clsName: "box",
		bgColor: "blue"
	},{
		tagName: "div",
		clsName: "box",
		bgColor: "green"
	},{
		tagName: "div",
		clsName: "box",
		bgColor: "grey"
	}
];

$(".btn").eq(1).click(function(){
	var html = '';
	for(var i=0; i<datas.length; i++) {
		html = '<'+datas[i].tagName+' class="'+datas[i].clsName+'" style="background-color:'+datas[i].bgColor+';"></div>';
		$(".boxes").prepend(html);
	}
});





$(".btn").eq(0).click(function(){
	$.ajax({
		url: "../json/data.json",
		type: "get",
		dataType: "json",
		success: function(res){
			console.log(res);
			var html = '';
			for(var i=0; i<res.datas.length; i++) {
				html = '<'+res.datas[i].tagName+' class="'+res.datas[i].clsName+'" style="background-color:'+res.datas[i].bgColor+';"></div>';
				$(".boxes").prepend(html);
			}
		}
	});
});