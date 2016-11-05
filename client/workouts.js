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

	let counter = 60;

   	let myInterval = Meteor.setInterval(function(){
      if(counter !=0)
      {
      counter --
      Session.set("counter", counter);
    }}, 1000);
});

Template.workout.helpers({
  counter: function (){
  	let counter = Session.get("counter");
  	return counter;
  }
});

Template.workout.events({
	"click #returnButton": function()
	{
		let counter = Session.get("counter");
		if(counter == 0)
		{
			Router.go('/happening');
		}
		else
		{
			console.log("NULL");
		}
	}
})
