var media = document.getElementById('media');
var audio = document.getElementById('audio');
function audioPlay(){
	audio.addEventListener('touchend',function(){
		playAudio();
	}); 
}
//播放暂停切换  
function playAudio() {  
    if(media.paused) {  
        play();  
    } else {  
        pause();  
    }  
}  
//播放  
function play() {  
    media.play();  
    audio.style.background = 'url(img/music.png) no-repeat';
    audio.style.backgroundSize = '100% 100%'; 
}   
//暂停  
function pause() {  
    media.pause();  
    audio.style.background = 'url(img/pause.png) no-repeat';  
    audio.style.backgroundSize = '100% 100%';
}  