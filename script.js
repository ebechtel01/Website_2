$(document).ready(function(){
	console.log("ready!");
	$("#link1").click(function(event){
		alert("You clicked me")
	});
	$("#container")
	.css({
		"height": "100px",
		"background-color": "blue"})
		.on("click",function(event) {
			$(this).css({"background-color":"green"})
		})
		.on("mouseout",function(event) {
				$(this).css({"background-color": "purple"})
			});
	$("div#form1").append
		$("<h3/>").text("Contact Form")
		$("<p/".text ("this is my form.")
		$("<form/>"){
			action: '#'
			method '#'
		})
		.append
			$"<input/>", {
				type: 'text',
				id: 'vname',
				name: 'name',
				placeholder: 'Your Email'
			})),
		$("<input/>"), {
			type: 'text'
		}
			}
,

		})}
});