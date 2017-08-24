function setDarg(){
	var pano = document.querySelector('#pano');
	var panoBg = document.querySelector('#panoBg');
	var tZ = document.querySelector('#tZ');
	var startPoint = {x:0,y:0};
	var panoBgDeg = {x:0,y:0};
	var scale ={x:129/18,y:1170/80} 
	var startZ = css(tZ,"translateZ");
	var lastDeg = {x:0,y:0};
	var lastDis = {x:0,y:0};
	document.addEventListener('touchstart', function(e) {
		window.isTouch = true;
		clearInterval(pano.timer);
		clearInterval(panoBg.timer);
		clearInterval(tZ.timer);
		startPoint.x = e.changedTouches[0].pageX;
		startPoint.y = e.changedTouches[0].pageY;
		panoBgDeg.x = css(panoBg,"rotateY");
		panoBgDeg.y = css(panoBg,"rotateX");
	});
	document.addEventListener('touchmove', function(e) {
		var nowPoint = {};
		var nowDeg = {};
		var nowDeg2 = {};
		nowPoint.x = e.changedTouches[0].pageX;
		nowPoint.y = e.changedTouches[0].pageY;
		var dis = {}
		dis.x = nowPoint.x - startPoint.x;
		dis.y = nowPoint.y - startPoint.y;
		var disDeg = {};
		disDeg.x = -(dis.x/scale.x);
		disDeg.y = dis.y/scale.y;
		nowDeg.y = panoBgDeg.y + disDeg.y;
		nowDeg.x = panoBgDeg.x + disDeg.x;
		nowDeg2.x = panoBgDeg.x + (disDeg.x)*0.83;
		nowDeg2.y = panoBgDeg.y + (disDeg.y)*0.83;
		if(nowDeg.y > 45){
			nowDeg.y = 45;
		} else if(nowDeg.y < -45) {
			nowDeg.y = -45;
		}
		if(nowDeg2.y > 45){
			nowDeg2.y = 45;
		} else if(nowDeg2.y < -45) {
			nowDeg2.y = -45;
		}
		lastDis.x =  nowDeg.x - lastDeg.x;
		lastDeg.x = nowDeg.x;
		lastDis.y =  nowDeg.y - lastDeg.y;
		lastDeg.y = nowDeg.y;
		css(panoBg,"rotateX",nowDeg.y);
		css(panoBg,"rotateY",nowDeg.x);
		css(pano,"rotateX",nowDeg2.y);
		css(pano,"rotateY",nowDeg2.x);
		var disZ = Math.max(Math.abs(dis.x),Math.abs(dis.y));
		if(disZ > 300){
			disZ = 300;
		}
		css(tZ,"translateZ",startZ -disZ);
	}); 
	document.addEventListener('touchend', function(e) {
		var nowDeg = {x:css(panoBg,"rotateY"),y:css(panoBg,"rotateX")};
		var disDeg = {x:lastDis.x*10,y:lastDis.y*10};
		tween({
			el:tZ,
			target:{translateZ:startZ},
			time: 700,
			type: "linear"
		});
		tween({
			el:panoBg,
			target:{rotateY:nowDeg.x + disDeg.x},
			time: 800,
			type: "linear"
		});
		tween({
			el:pano,
			target:{rotateY:nowDeg.x + disDeg.x},
			time: 800,
			type: "linear",
			callBack: function(){
				window.isTouch = false;
				window.isStart = false;
			}
		});
	}); 
}