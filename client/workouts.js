Template.workout.onRendered( function () {
	var rand = Math.floor((Math.random()*7) +1);
	$("div#1").hide();
	$("div#2").hide();
	$("div#3").hide();
	$("div#4").hide();
	$("div#5").hide();
	$("div#6").hide();
	$("div#7").hide();
	let temp = "div#" + rand;
	$(temp).show();
});
