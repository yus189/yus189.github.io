//main
function anmt5(){
	var z = document.querySelector('#tZ');
	css(z,"translateZ",-2000);
	css(z,"scale",10);
	anmt7();
	anmt6();
	createPano();
	tween({
		el:z,
		target: {translateZ:-200,scale:100},
		time: 3600,
		type: "linear"
	});
}

//红色背景show
function bgShow(){
	var pageBg = document.querySelector('#pageBg');
	tween({
		el:pageBg,
		target:{opacity:100},
		time: 400,
		type:"linear"
	});
}

//生成主体背景圆柱并show
function anmt6(){
	var panoBg = document.querySelector('#panoBg');
	var width = 129;
	var deg = 360/imgData.bg.length;
	var R = parseInt(Math.tan((180-deg)/2*Math.PI/180)*(width/2)) - 1;
	var startDeg = 180;
	css(panoBg,"rotateX",0);
	css(panoBg,"rotateY",-695);
	for(var i = 0; i < imgData.bg.length; i++){
		var span = document.createElement("span");
		css(span,"rotateY",startDeg);
		css(span,"translateZ",-R);
		span.style.backgroundImage = "url("+imgData.bg[i]+")";
		span.style.display = "none";
		panoBg.appendChild(span);
		startDeg -= deg;
	}
	var n = 0;
	var timer = setInterval(function(){
		panoBg.children[n].style.display = "block";
		n++;
		if(n >= panoBg.children.length){
			clearInterval(timer);
		}
	},3600/2/20);
	tween({
		el: panoBg,
		target: {rotateY:25},
		time: 3600,
		type: "linear",
		callBack:function(){
			setDarg();
			setTimeout(function(){
				setSensors();
			},1000);
				
		}
	});
}

//cloud show
function anmt7(){
	var cloud = document.querySelector('#cloud');
	css(cloud,"translateZ",-400);
	for(var i = 0; i < 12; i++){
		var span = document.createElement("span");
		span.style.backgroundImage = "url("+imgData.cloud[i%3]+")";
		var R = 500+(Math.random()*130);
		var deg = (360/12)*i;
		var x = Math.sin(deg*Math.PI/180)*R;
		var z = Math.cos(deg*Math.PI/180)*R;
		var y = (Math.random()-.5)*200
		css(span,"translateX",x);
		css(span,"translateZ",z);
		css(span,"translateY",y);
		span.style.display = "none";
		cloud.appendChild(span);
	}
	var num = 0;
	var timer = setInterval(function(){
		cloud.children[num].style.display = "block";
		num++;
		if(num >= cloud.children.length){
			clearInterval(timer);
		}
	},50);
	tween({
		el:cloud,
		target: {rotateY:540},
		time: 3500,
		type: "linear",
		callIn:function(){
			var deg = -css(cloud,"rotateY");
			for(var i = 0; i < cloud.children.length; i++){
				css(cloud.children[i],"rotateY",deg);
			}
		},
		callBack:function(){
			cloud.parentNode.removeChild(cloud);
			bgShow();
		}
	});
}

//漂浮层
function createPano(){
	//1
	var pano = document.querySelector('#pano');
	var deg = 18;
	var R = 406;
	var num = 0;
	var startDeg = 180;
	css(pano,"rotateX",0);
	css(pano,"rotateY",-180);
	css(pano,"scale",0);
	var pano1 = document.createElement("div");
	pano1.className = "pano";
	css(pano1,"translateX",1.564);
	css(pano1,"translateZ",-9.877);
	for(var i = 0; i < 2; i++){
		var span = document.createElement("span");
		span.style.cssText = "height:344px;margin-top:-172px;";
		span.style.background = "url("+imgData["pano"][num]+")";
		css(span,"translateY",-163);
		css(span,"rotateY",startDeg);
		css(span,"translateZ",-R);
		num++;
		startDeg -= deg;
		pano1.appendChild(span)
	}
	pano.appendChild(pano1);
	//2
	var pano2 = document.createElement("div");
	pano2.className = "pano";
	css(pano2,"translateX",20.225);
	css(pano2,"translateZ",-14.695);
	for(var i = 0; i < 3; i++){
		var span = document.createElement("span");
		span.style.cssText = "height:326px;margin-top:-163px;";
		span.style.background = "url("+imgData["pano"][num]+")";
		css(span,"translateY",278);
		css(span,"rotateY",startDeg);
		css(span,"translateZ",-R);
		num++;
		startDeg -= deg;
		pano2.appendChild(span)
	}
	pano.appendChild(pano2);
	//3
	var pano3 = document.createElement("div");
	pano3.className = "pano";
	css(pano3,"translateX",22.175);
	css(pano3,"translateZ",-11.35);
	for(var i = 0; i < 4; i++){
		var span = document.createElement("span");
		span.style.cssText = "height:195px;margin-top:-97.5px;";
		span.style.background = "url("+imgData["pano"][num]+")";
		css(span,"translateY",192.5);
		css(span,"rotateY",startDeg);
		css(span,"translateZ",-R);
		num++;
		startDeg -= deg;
		pano3.appendChild(span)
	}
	pano.appendChild(pano3);
	//4
	var pano4 = document.createElement("div");
	pano4.className = "pano";
	css(pano4,"translateX",20.225);
	css(pano4,"translateZ",14.695);
	startDeg = 90;
	for(var i = 0; i < 5; i++){
		var span = document.createElement("span");
		span.style.cssText = "height:468px;margin-top:-234px;";
		span.style.background = "url("+imgData["pano"][num]+")";
		css(span,"translateY",129);
		css(span,"rotateY",startDeg);
		css(span,"translateZ",-R);
		num++;
		startDeg -= deg;
		pano4.appendChild(span)
	}
	pano.appendChild(pano4);
	//5
	var pano5 = document.createElement("div");
	pano5.className = "pano";
	css(pano5,"translateX",-4.54);
	css(pano5,"translateZ",9.91);
	startDeg = 18;
	for(var i = 0; i < 6; i++){
		var span = document.createElement("span");
		span.style.cssText = "height:444px;margin-top:-222px;";
		span.style.background = "url("+imgData["pano"][num]+")";
		css(span,"translateY",-13);
		css(span,"rotateY",startDeg);
		css(span,"translateZ",-R);
		num++;
		startDeg -= deg;
		pano5.appendChild(span)
	}
	pano.appendChild(pano5);
	//6
	var pano6 = document.createElement("div");
	pano6.className = "pano";
	css(pano6,"translateX",-11.35);
	css(pano6,"translateZ",22.275);
	startDeg = 18;
	for(var i = 0; i < 6; i++){
		var span = document.createElement("span");
		span.style.cssText = "height:582px;margin-top:-291px;";
		span.style.background = "url("+imgData["pano"][num]+")";
		css(span,"translateY",256);
		css(span,"rotateY",startDeg);
		css(span,"translateZ",-R);
		num++;
		startDeg -= deg;
		pano6.appendChild(span)
	}
	pano.appendChild(pano6);	
	//go
	setTimeout(function(){
		tween({
			el:pano,
			target: {
				rotateY: 25,
				scale:100
			},
			time: 1100,
			type: "linear",
			callBack:function(){
				document.getElementById('vr').style.display = 'block';
			}
		});
	},2700);
}