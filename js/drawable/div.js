var div = function(){
	var element = document.createElement('div');

	element.style.position = "absolute";

	//-backgroundPosition: 300px 150px;
	element.backgroundPosition = function(x, y){
		element.style.backgroundPosition = x+"px "+y+"px";
	}

	//-background-size: 300px 150px;
	element.backgroundSize = function(width, height){
		element.style.backgroundSize = width+"px "+height+"px";
	}

	//-overflow: (visible | hidden | scroll | auto)
	element._overflow = 0;
	Object.defineProperty(element, 'overflow', {
	  get: function() { return element._overflow; },
	  set: function(value) { element._overflow = value; element.style.overflow = value },
	  enumerable: true,
	  configurable: true
	});

	//-background (url(raw/icon.png) | #D4D4D4)
	element._background = 0;
	Object.defineProperty(element, 'background', {
	  get: function() { return element._background; },
	  set: function(value) { element._background = value; element.style.background = value },
	  enumerable: true,
	  configurable: true
	});

	//-width
	element._width = 0;
	Object.defineProperty(element, 'width', {
	  get: function() { return element._width; },
	  set: function(value) { element._width = value; element.style.width = value+"px"; },
	  enumerable: true,
	  configurable: true
	});

	//-height
	element._height = 0;
	Object.defineProperty(element, 'height', {
	  get: function() { return element._height; },
	  set: function(value) { element._height = value; element.style.height = value+"px"; },
	  enumerable: true,
	  configurable: true
	});

	//-x
	element._x = 0;
	Object.defineProperty(element, 'x', {
	  get: function() { return element._x; },
	  set: function(value) { element._x = value; element.style.left = value+"px"; },
	  enumerable: true,
	  configurable: true
	});
	
	//-y
	element._y = 0;
	Object.defineProperty(element, 'y', {
	  get: function() { return element._y; },
	  set: function(value) { element._y = value; element.style.top = value+"px"; },
	  enumerable: true,
	  configurable: true
	});	
	
	//-opacity;
	element._opacity = 0;
	Object.defineProperty(element, 'opacity', {
	  get: function() { return element._opacity; },
	  set: function(value) { element._opacity = value; element.style.opacity = value; },
	  enumerable: true,
	  configurable: true
	});
	
	//-cursor;
	/*
	alias
	all-scroll
	auto
	cell
	context-menu
	col-resize
	copy
	crosshair
	default
	e-resize
	ew-resize
	help
	move
	n-resize
	ne-resize
	nw-resize
	ns-resize
	no-drop
	none
	not-allowed
	pointer
	progress
	row-resize
	s-resize
	se-resize
	sw-resize
	text
	vertical-text
	w-resize   
	wait
	zoom-in
	zoom-out
	*/
	element._cursor = 0;
	Object.defineProperty(element, 'cursor', {
	  get: function() { return element._cursor; },
	  set: function(value) { element._cursor = value; element.style.cursor = value; },
	  enumerable: true,
	  configurable: true
	});	
	
	document.body.appendChild(element);
	return element;	
};