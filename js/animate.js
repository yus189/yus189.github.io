document.addEventListener('touchstart', function(e) {
	e.preventDefault();
});
function setLoding(){
	var logoText = document.querySelector('.logoText');
	var data = [];
	var n = 0;
	for(var s in imgData) {
		data = data.concat(imgData[s]);
	}
	for(var i = 0; i < data.length; i++){
		var img = new Image();
		img.src = data[i];
		img.onload = function(){
			n++;
			logoText.innerHTML = "已加载 "+(Math.floor(n/data.length*100))+"%";
			if(n == data.length){
				anmt();
			}
		};
	}
};
function anmt(){
	var view = document.querySelector('#view');
	var logo1 = document.querySelector('#logo1');
	var logo2 = document.createElement("div");
	var logo3 = document.createElement("div");
	var img = new Image();
	var img2 = new Image();
	img.src = imgData.logo[0];
	img2.src = imgData.logo[1];
	logo2.id = "logo2";
	logo3.id = "logo3";
	logo3.className = logo2.className = "logoImg";
	logo2.appendChild(img);
	logo3.appendChild(img2);
	css(logo2,"opacity",0);
	css(logo3,"opacity",0);
	css(logo2,"translateZ",-1000);
	css(logo3,"translateZ",-1000);	
	view.appendChild(logo2);
	view.appendChild(logo3);	
	tween({
		el: logo1,
		target: {opacity:0},
		time: 800,
		type: "linear",
		callBack: function(){
			view.removeChild(logo1);
			css(logo2,"opacity",100);
			tween({
				el: logo2,
				target: {translateZ:110},
				time: 400,
				type: "linear",
				callBack:anmt2
			});
		}
	});
};
function anmt2(){
	var view = document.querySelector('#view');
	var logo2 = document.querySelector('#logo2');
	var logo3 = document.querySelector('#logo3');
	setTimeout(function(){
		tween({
			el: logo2,
			target: {translateZ:-1000},
			time: 800,
			type: "linear",
			callBack: function(){
				view.removeChild(logo2);
				css(logo3,"opacity",100);
				setTimeout(function(){
					tween({
						el: logo3,
						target: {translateZ:110},
						time: 400,
						type: "linear",
						callBack: anmt3
					});
				},300);
			}
		});
	},1000);
};
function anmt3(){
	var view = document.querySelector('#view');
	var logo3 = document.querySelector('#logo3');
	setTimeout(function(){
		tween({
			el: logo3,
			target: {translateZ:-1000},
			time: 1500,
			type: "linear",
			callBack: function(){
				view.removeChild(logo3);
				anmt4();
			}
		});
	},1000);
};
function anmt4(){
	var view = document.querySelector('#view');
	var logo4 = document.createElement("div");
	var logoIcos = document.createElement("div");
	var logo4Img = new Image();
	var iconsLength = imgData.logoIco.length*3;
	logo4.id = "logo4";
	logo4Img.id = "logo4Img";
	logoIcos.id = "logoIcos";
	logo4Img.src = imgData.logo[2];
	css(logo4,"translateZ",-2000);
	for(var i = 0; i < iconsLength; i++){
		var span = document.createElement("span");
		var xR = 50+Math.round(Math.random()*210);
		var xDeg = Math.round(Math.random()*360)
		var yR = 40+Math.round(Math.random()*210);
		var yDeg = Math.round(Math.random()*360)
		css(span,"rotateY",xDeg);
		css(span,"translateZ",xR);
		css(span,"rotateX",yDeg);
		css(span,"translateY",yR);
		span.style.backgroundImage = "url("+imgData.logoIco[i%imgData.logoIco.length]+")";
		logoIcos.appendChild(span);
	}
	logo4.appendChild(logoIcos);
	logo4.appendChild(logo4Img);
	view.appendChild(logo4);
	tween({
		el: logo4,
		target: {translateZ: 80},
		time: 500,
		type: "easeOut",
		callBack:function(){
			setTimeout(function(){
				tween({
					el: logo4,
					target: {translateZ: -1000,scale:0},
					time: 2000,
					type: "linear",
					callBack: function(){
						view.removeChild(logo4);
						anmt5();
					}
				});
			},1200);
		}
	});
}

