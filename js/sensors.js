//陀螺仪 & 横竖屏切换
function setSensors() {
	var h = document.querySelector('#pano');
	var i = document.querySelector('#panoBg');
	var j = {};
	var k = {};
	var l = {};
	var m = Date.now();
	var n = 129 / 20;
	var o = -100;
	var p = window.orientation;
	window.isStart = false;
	window.isTouch = false;
	window.addEventListener('orientationchange', function(e) {
		p = window.orientation
	});
	window.addEventListener('deviceorientation', function(e) {
		if (window.isTouch) {
			return
		}
		switch (p) {
		case 0:
			var x = e.beta;
			var y = e.gamma;
			break;
		case 90:
			var x = e.gamma;
			var y = e.beta;
			break;
		case -90:
			var x = -e.gamma;
			var y = -e.beta;
			break;
		case 180:
			var x = -e.beta;
			var y = -e.gamma;
			break
		}
		var a = Date.now();
		if (a - m < 30) {
			return
		}
		m = a;
		if (!isStart) {
			isStart = true;
			j.x = x;
			j.y = y;
			l.x = css(h, "rotateX");
			l.y = css(h, "rotateY")
		} else {
			k.x = x;
			k.y = y;
			var b = {};
			b.x = k.x - j.x;
			b.y = k.y - j.y;
			var c = {};
			c.x = l.x + b.x;
			c.y = (l.y + b.y)*4;
			if (c.x > 45) {
				c.x = 45
			} else if (c.x < -45) {
				c.x = -45
			}
			var d = Math.abs(Math.round((c.x - css(h, "rotateX")) * n));
			var f = Math.abs(Math.round((c.y - css(h, "rotateY")) * n));
			var g = Math.max(d, f);
			if (g > 300) {
				g = 300
			}
			tween({
				el: tZ,
				target: {
					translateZ: o - g
				},
				time: 100,
				type: "linear",
				callBack: function() {
					tween({
						el: tZ,
						target: {
							translateZ: o
						},
						time: 100,
						type: "linear"
					})
				}
			});
			tween({
				el: h,
				target: {
					rotateX: c.x,
					rotateY: c.y
				},
				time: 300,
				type: "linear"
			});
			tween({
				el: i,
				target: {
					rotateX: c.x,
					rotateY: c.y
				},
				time: 300,
				type: "linear"
			})
		}
	})
}


//切换分辨率
//根据可视区高度和固定的视角计算景深
//计算景深 & 视距不变 == setPerc
function setPerc() {
	resetview();
	window.onresize = resetview;

	function resetview() {
		var a = document.querySelector('#view');
		var b = document.querySelector('#mian');
		var c = 52.5;
		var d = document.documentElement.clientHeight;
		var R = Math.round(Math.tan(c / 180 * Math.PI) * d * .5);
		a.style.WebkitPerspective = a.style.perspective = R + "px";
		css(b, "translateZ", R)
	}
}