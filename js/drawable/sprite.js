var sprite = function(){
	var element = document.createElement('div');
	//element.style.overflow = "hidden";//если необходимо скрыть объекты за рамками контейнера.
	element.style.position = "absolute";
	//style
	/*
	background: url(raw/icon.png); 
	background-size: 300px 150px; 
	width: 300px; 
	height: 150px; 
	position: absolute; 
	left: 15px; 
	top: 15px;
	*/
	element.imageURL = function(url){
		element.style.background = "url("+url+")";
	};
	element.width = function(width){
		element.style.width = width+"px";
	};
	element.height = function(height){
		element.style.height = height+"px";
	};
	element.setX = function(x){
		element.style.left = x+"px";
	};
	element.setY = function(y){
		element.style.top = y+"px";
	};
	document.body.appendChild(element);
	return element;	
};