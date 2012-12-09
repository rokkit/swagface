$("#myFlippyBox").flippy({
	content:"Hi !",
	direction:"TOP",
	duration:"750",
	onStart:function(){
		alert("Let's flip");
	},
	onFinish:function(){
		alert("ok, it's flipped :)");
	}
});