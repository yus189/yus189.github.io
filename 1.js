var oDiv = document.getElementsByTagName('div')[0];

document.onmousemove = function(ev){

	oDiv.style.left = ev.clientX - 100 + 'px';

	oDiv.style.top = ev.clientY - 100 + 'px';

}
