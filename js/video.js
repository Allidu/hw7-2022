var video;
var vol;

var slider = document.getElementById("slider");
var output = document.getElementById("volume");
var mute = document.getElementById("mute");


slider.oninput = function() {
  output.innerHTML = this.value+'%';
}



window.addEventListener("load", function() {
	//console.log("Good job opening the window")
	video = document.querySelector('.video');
	video.autoplay = true;
	video.loop = false;
	//console.log(document.querySelector('.video').autoplay);

});

document.querySelector("#play").addEventListener("click", function() {
 	
	video.play();
	//update volume info
	video.volume = (slider.value)/100;
	output.innerHTML = video.volume*100+'%';
	console.log(video.volume);
 });

 document.querySelector("#pause").addEventListener("click", function() {
	//console.log("Pause Video");
    video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	//console.log("slower Video");
	video.playbackRate = video.playbackRate*0.9;
	console.log(video.playbackRate);

});


document.querySelector("#faster").addEventListener("click", function() {
	//console.log("faster Video");
	video.playbackRate = video.playbackRate*1.1;
	console.log(video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
		console.log(video.currentTime);
	}
	else{
		video.currentTime = video.currentTime + 10;
		console.log(video.currentTime);
	}
	
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted);
	if(video.muted == false){
		mute.innerHTML = "Unmute"
	}
	else{
		mute.innerHTML = "Mute"
	}
	
	video.muted = !video.muted;

});

document.querySelector("#vintage").addEventListener("click", function() {

	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {

	video.classList.remove("oldSchool");
});





