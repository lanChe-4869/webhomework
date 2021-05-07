var aul = document.querySelector("ul");
var ali = document.getElementsByTagName('li');
ali[0].onmousedown = function(e) {
	alert(1);
	this.style.color = 'red';
}
ali[0].onmouseup = function(e) {
	this.style.color = 'black';
}
ali[1].onmousedown = function(e) {
	alert(2);
	var date = new Date();
	document.querySelector("h1").innerHTML = (date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay());
}
ali[2].onmousedown = function(e) {
	alert(3);
	this.classList.add('active');
}
ali[3].onmousedown = function(e) {
	alert(4);
	aul.removeChild(ali[7]);
	aul.remo
}
ali[4].onmousedown = function(e) {
	alert(5);
	window.open("https://www.taobao.com/");
}
ali[5].onmousedown = function(e) {
	alert(6);
	var newLi = document.createElement('li');
	newLi.textContent = 'p9';
	aul.append(newLi);
}
ali[6].onmousedown = function(e) {
	alert(7);
	document.querySelector('.m-box').width = screen.availWidth;
}
ali[7].onmousedown = function(e) {
	alert(8);
}